import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.sessionStorage,
})

export default new Vuex.Store(
    {
        state: {
        	size: "",
        	babies: 0,
            babyType: "",
        	edit: false,
			customBabies: [],
        },
        mutations: {
        	setSize(state, value) {
        		state.size = value
        	},
        	setBabies(state, value) {
        		state.babies = value
        	},
            setBabyType(state, value) {
                state.babyType = value
            },
        	setEdit(state, value) {
        		state.edit = value
        	},
        	setCustomBabies(state, value) {
        		state.customBabies = value
        	},
        },
        plugins: [vuexLocalStorage.plugin]
    }
)