import Swal from 'sweetalert2'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import {routes} from './routes/index'
import App from './components/App.vue'
import store from './store/index'

Vue.use(VueRouter);
Vue.use(VueCookies)
document.getElementById('creditos').addEventListener("click", function(){
	Swal.fire({
		title: 'Nos Presentamos',
	  	html: '<div>' +
			'<div class="flex flex-row justify-start items-center content-center mb-2">' +
				'<div class="mr-4">' +
					'<img src="/assets/img/ale.jpg" alt="Alejandra" style="max-width: 70px; border-radius: 70px">' +
				'</div>' +
				'<div>' +
					'<a href="https://twitter.com/Alejandrama_" target="_blank" style="font-style: italic;">@Alejandrama_</a>' +
					'<p class="text-left">Diseño</p>' +
				'</div>' +
			'</div>' +
			'<div class="flex flex-row justify-start items-center content-center mb-2">' +
				'<div class="mr-4">' +
					'<img src="/assets/img/bodo.jpg" alt="Abraham" style="max-width: 70px; border-radius: 70px">' +
				'</div>' +
				'<div>' +
					'<a href="https://twitter.com/bazh_" target="_blank" style="font-style: italic;">@bazh_</a>' +
					'<p class="text-left">Diseño</p>' +
				'</div>' +
			'</div>' +
			'<div class="flex flex-row justify-start items-center content-center mb-2">' +
				'<div class="mr-4">' +
					'<img src="/assets/img/naila.jpg" alt="Naila" style="max-width: 70px; border-radius: 70px">' +
				'</div>' +
				'<div>' +
					'<a href="https://twitter.com/nailarogu" target="_blank" style="font-style: italic;">@nailarogu</a>' +
					'<p class="text-left">Diseño</p>' +
				'</div>' +
			'</div>' +
			'<div class="flex flex-row justify-start items-center content-center mb-2">' +
				'<div class="mr-4">' +
					'<img src="/assets/img/pepe.jpg" alt="Pepe" style="max-width: 70px; border-radius: 70px">' +
				'</div>' +
				'<div>' +
					'<a href="https://twitter.com/RegresoSrBazan" target="_blank" style="font-style: italic;">@RegresoSrBazan</a>' +
					'<p class="text-left">Redes Sociales</p>' +
				'</div>' +
			'</div>' +
			'<div class="flex flex-row justify-start items-center content-center mb-2">' +
				'<div class="mr-4">' +
					'<img src="/assets/img/jc.jpg" alt="JC" style="max-width: 70px; border-radius: 70px">' +
				'</div>' +
				'<div>' +
					'<a href="https://twitter.com/juancr_"  target="_blank" style="font-style: italic;">@juancr_</a>' +
					'<p class="text-left">Desarrollo</p>' +
				'</div>' +
			'</div>'+
			'<div class="flex flex-row justify-start items-center content-center mb-2">' +
				'<div class="mr-4">' +
					'<img src="/assets/img/ro.jpg" alt="Ro" style="max-width: 70px; border-radius: 70px">' +
				'</div>' +
				'<div>' +
					'<a href="https://twitter.com/rogeliobazh" target="_blank" style="font-style: italic;">@rogeliobazh</a>' +
					'<p class="text-left">Desarrollo</p>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<p class="mt-4"> Déjanos un comentario en las redes sociales <a href="https://www.facebook.com/LaRoscaVirtual" class="text-yellow-500" target="_blank">facebook</a>, <a href="https://twitter.com/RoscaVirtual" class="text-yellow-500" target="_blank">twitter</a> o <a href="https://www.instagram.com/roscavirtual/" class="text-yellow-500" target="_blank">instagram!</a></p>',
	})

})

let router = new VueRouter({
	mode: 'history',
	routes,
	store
});

var vm = new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App),
});