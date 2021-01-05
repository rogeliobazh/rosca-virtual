<template>
	<div class="step-container">
		<div class="py-8 px-9">
			<p class="text-xl font-bold leading-relaxed mb-1">¿Con cuántas personas compartirás tu rosca?</p>
			<p class="text-sm font-normal"> <sup>*</sup> Grande y Extragrande estarán disponibles en las próximas horas.</p>
			<div class="mx-auto flex flex-col md:flex-row justify-center my-4 mb-6">
				<div class="mb-6 md:mb-0">
					<input type="radio" id="sm" value="10" v-model="size" class="hide-radio">
					<label for="sm" class="size-label border-2 shadow-md border-gray-200 text-gray-400 relative rounded-lg">
						<img src="/assets/img/Chica.png"  class="absolute" alt="Chica">
						<div class="absolute bg-orange-custom text-white top-0 right-0 rounded-bl-lg rounded-tr-lg px-2 font-bold text-sm text-center">Chica</div>
						<div class="absolute bottom-0 right-1 font-bold text-white text-lg">10px</div>
					</label>
				</div>
				<div class="mb-6 md:mb-0">
					<input type="radio" id="md" value="20" v-model="size" class="hide-radio">
					<label for="md" class="size-label border-2 shadow-md border-gray-200 text-gray-400 relative rounded-lg">
						<img src="/assets/img/Mediana.png"  class="absolute" alt="Mediana">
						<div class="absolute bg-orange-custom text-white top-0 right-0 rounded-bl-lg rounded-tr-lg px-2 font-bold text-sm text-center">Mediana</div>
						<div class="absolute bottom-0 right-1 font-bold text-white text-lg">20px</div>
					</label>
				</div>
			</div>
			<transition name="fade">
				<div v-if="size !=''" class="mb-6">
					<p class="text-xl font-bold leading-relaxed mb-1">¿Qué modelo de bebé te gustaría encontrar?</p>
					<div class="mx-auto flex flex-col md:flex-row justify-start my-4">
						<div>
							<input type="radio" id="bebe" name="babyType" value="bebe" v-model="babyType" class="hide-radio">
							<label for="bebe" class="block border border-gray-200 text-gray-400 size-md relative mx-4 cursor-pointer mb-2" style="width: 300px; height: 200px;">
								<img src="/assets/img/HappyBebe.png" style="max-height: 200px" alt="Bebé">
								<div class="absolute bg-orange-custom text-white top-0 right-0 rounded-bl-lg  px-2 font-bold text-sm text-center">Bebé Jesús</div>
							</label>
						</div>
						<div>
							<input type="radio" id="grogu" name="babyType" value="grogu" v-model="babyType" class="hide-radio">
							<label for="grogu" class="block border border-gray-200 text-gray-400 size-md relative mx-4 cursor-pointer mb-2" style="width: 300px; height: 200px;">
								<img src="/assets/img/HappyGrogu.png" style="max-height: 200px" alt="Grogu">
								<div class="absolute bg-orange-custom text-white top-0 right-0 rounded-bl-lg  px-2 font-bold text-sm text-center">Bebé Yoda</div>
							</label>
						</div>
					</div>
				</div>
			</transition>
			<transition name="fade">
				<div v-if="babyType != ''" class="custom-number-input my-4 mb-6">
					<p class="text-xl font-bold leading-relaxed mb-1">¿Cuántos bebés quieres esconder en tu rosca?</p>
					<div class="flex flex-col md:flex-row justify-start items-center content-center" style="max-width: 700px">
						<div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 mr-6" style="max-width: 300px">
						    <button data-action="decrement" class="bg-orange-custom text-white hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" v-on:click="decrement">
						      <span class="m-auto text-2xl font-thin text-white">−</span>
						    </button>
						    <input type="number" class="border border-grey text-center w-full bg-white text-sm md:text-basecursor-default flex items-center text-gray-700" v-model="babies" disabled="disabled"></input>
						  	<button data-action="increment" class="bg-orange-custom text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" v-on:click="increment">
						    <span class="m-auto text-2xl font-thin text-white">+</span>
						  </button>
						</div>
						<div>
							<p class="text-center text-sm leading-6">
								* Tienes <span class="text-orange-custom text-base leading-6 font-bold">{{this.size - this.babies}}</span> bebés disponibles
							</p>
						</div>
					</div>
				</div>
			</transition>
			<transition name="fade">
				<div v-show="babies > 0">
					<input type="checkbox" v-model="edit" id="edit" >
					<label for="edit" class="text-xl font-bold leading-relaxed mb-1">Personalizar premios y castigos</label>
					<p class="text-base font-normal leading-relaxed mb-6" style="max-width: 800px">Por el momento solo cuentas con el castigo y premio "Te toca traer tamales", pero puedes cambiarlo por el premio y castigo que deees.</p>
					<transition name="fade">
						<div v-if="edit" id="babies_container" style="max-width: 600px" class="mx-auto">
							<div v-for="(babie, index) in cBabies">
								<div class="mb-3 flex flex-col md:flex-row justify-between pt-2 pb-4">
									<input type="text" v-model="babie.text" class="border border-gray-600 px-2 py-1 text-left bg-white text-sm text-gray-700 w-full max-w-md rounded mr-4" :name="'babie['+index+'][text]'">
									<div class="mt-6 md:mt-0">
										<input type="radio" :name="'babie['+index+'][type]'" v-model="babie.type" value="castigo" :id="'castigo-'+index" class="hide-radio">
										<label :for="'castigo-'+index" class="text-sm text-gray-700 border border-gray-200 label-button rounded p-1">Castigo</label>
										<input type="radio" :name="'babie['+index+'][type]'" v-model="babie.type" value="premio" :id="'premio-'+index" class="hide-radio">
										<label :for="'premio-'+index" class="text-sm text-gray-700 border border-gray-200 label-button rounded p-1">Premio</label>
									</div>

								</div>

							</div>
						</div>
					</transition>
				</div>
			</transition>
			<div class="flex flex-row justify-between pb-4 mt-8">
				<button class="py-3 px-4 bg-orange-custom text-white rounded-lg" @click="navigatePrev" type="button"> Regresa</button>
				<transition name="fade">
	        		<button v-show="babies > 0" class="py-3 px-4 bg-orange-custom text-white rounded-lg" @click="navigateNext" type="button">Estamos Listos!</button>
	        	</transition>
			</div>
		</div>
	</div>
</template>
<script>
	import Mobile from '@/mixins/mobile.js'
	export default {
		mixins: [Mobile],
		data() {
			return {
				cBabies: []
			}
		},
		computed: {
			babies: {
				get() {
					return this.$store.state.babies
				},
				set(value){
					this.$store.commit('setBabies', value)
				}
			},
			babyType: {
				get() {
					return this.$store.state.babyType
				},
				set(value){
					this.$store.commit('setBabyType', value)
				}
			},
			size: {
				get() {
					return this.$store.state.size
				},
				set(value){
					this.$store.commit('setSize', value)
				}
			},
			edit: {
				get() {
					return this.$store.state.edit
				},
				set(value) {
					this.$store.commit('setEdit', value)
				},
			},
			customBabies: {
				get() {
					this.$store.state.customBabies
				},
				set(value) {
					this.$store.commit('setcustomBabies', value)
				}
			}
		},
		mounted() {
			if(this.isMobile()){
				this.$router.push('/')
			}

			if(this.$cookies.get('babies')) {
				let cookie = this.$cookies.get('babies')
				this.cBabies = JSON.parse(cookie)
			} else {
				this.resetValues()
			}

			if(this.cBabies.length < this.babies) {
				let diff = this.babies - this.cBabies.length
				for(var i=0; i<diff; i++){
					this.addNewCustomBabie()
				}
			}

			if(this.cBabies.length > this.babies) {
				let diff = this.cBabies.length - this.babies
				for(var i=0; i<diff; i++){
					this.removeCustomBabie()
				}
			}

			if(this.babies > this.size){
				this.resetValues()
			}
		},
		methods: {
			decrement: function(e) {
			    if ( this.babies > 0){
			    	this.babies--
			    	this.removeCustomBabie()
			    }
			},
			resetValues: function() {
				this.babies = 0
				this.cBabies = []
				this.edit = false
			},
			increment: function(e) {
			    if (this.babies < this.size){
			    	this.babies++
			    	this.addNewCustomBabie()
			    }
			},
			addNewCustomBabie: function() {
				this.cBabies.push({
					text: 'Te toca traer tamales!',
					type: 'castigo'
				})
			},
			removeCustomBabie: function() {
				this.cBabies.pop()
			},
			storeCookie: function(){
				let cleanArray = []
				if(this.edit){
					for(var i = 0; i < this.babies; i++){
						let text_val = document.getElementsByName("babie["+i+"][text]")[0].value
						let type_val = document.getElementsByName("babie["+i+"][type]")[0].checked ? 'castigo' : 'premio'
						cleanArray.push({
							text: text_val,
							type: type_val
						})
					}
				} else {
					for(var i = 0; i < this.babies; i++){
						cleanArray.push({
							text: 'Te toca traer tamales!',
							type: 'castigo'
						})
					}
				}

				this.$cookies.set('babies', JSON.stringify(cleanArray), 0)
			},
			navigatePrev: function() {
				this.storeCookie()
				this.$router.push('/')
			},
			navigateNext: function(){
				this.storeCookie()
				this.$router.push('/rosca/')
			}
		},
	}
</script>
<style>
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }
</style>