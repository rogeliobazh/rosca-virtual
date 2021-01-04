import Swal from 'sweetalert2'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import {routes} from './routes/index'
import App from './components/App.vue'
import store from './store/index'

Vue.use(VueRouter);
Vue.use(VueCookies)

let router = new VueRouter({
	mode: 'hash',
	routes,
	store
});

var vm = new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App),
});