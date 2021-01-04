<template>
	<div class="step-container">
		<div v-if="size != ''" class="max-w-2xl mx-auto">
			<p class="text-center text-base leading-6 mb-2">
				Aquí nos gusta ser muy complacientes y dejamos que casi todo se pueda personalizar para satisfacer a nuestros clientes. Y los bebés en la rosca es un claro ejemplo de ello. <p>
			<p class="text-center text-base leading-6 mb-2">
				Puedes escoger entre usar el bebé tradicional o una figurita del bebé mas famoso del momento:
			</p>
			<div class="mx-auto flex flex-row justify-center my-4">
				<div>
					<input type="radio" id="bebe" name="babyType" value="bebe" v-model="babyType">
					<label for="bebe" class="size-label border border-gray-200 text-gray-400 size-sm">Bebé</label></div>
				<div>
					<input type="radio" id="grogu" name="babyType" value="grogu" v-model="babyType">
					<label for="grogu" class="size-label border border-gray-200 text-gray-400 size-md">Grogu</label>
				</div>
			</div>
			<transition name="fade">
				<div v-if="babyType != ''" class="custom-number-input max-w-2xl mx-auto my-4">
					<p class="text-center text-base leading-6 mb-2">
						Ahora, cuantos bebés quieres que escondamos en tu rosca?
					</p>
					<p class="text-center text-base leading-6 mb-2">
						Puedes poner los que quieras (mientras quepan en la rosca, claro) y no te preocupes, no le diremos a nadie ;)
					</p>
					<p class="text-center text-base leading-6 mb-2">
						Tienes <span class="text-yellow-500 text-base leading-6 font-bold">{{this.size - this.babies}}</span> bebés disponibles
					</p>
					 <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
					    <button data-action="decrement" class="bg-yellow-500 text-white hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" v-on:click="decrement">
					      <span class="m-auto text-2xl font-thin">−</span>
					    </button>
					    <input type="number" class="border border-grey text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700" v-model="babies" disabled="disabled"></input>
					  	<button data-action="increment" class="bg-yellow-500 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" v-on:click="increment">
					    <span class="m-auto text-2xl font-thin">+</span>
					  </button>
					</div>
				</div>
			</transition>
		</div>
		<transition name="fade">
			<div v-show="babies > 0">
				<p class="text-center text-base leading-6 mb-2">

					Ahora, para hacerlo mas divertido, te ofrecemos la opción de personalizar cada uno de tus bebés.
				</p>
				<p class="text-center text-base leading-6 mb-2">
					Puedes cambiar entre dos tipos de bebé, Premio o Castigo y cambiarle el texto a cada uno!
				</p>
				<p class="text-center text-sm leading-6 mb-2">
					Intenta intercalarlos, ya que el orden de los bebés es el orden en él que iran apareciendo.
				<p>
				<input type="checkbox" v-model="edit" id="edit" >
				<label for="edit" class="text-sm">Quieres personalizar tus bebés?</label>
				<transition name="fade">
					<div v-if="edit" id="babies_container">
						<div v-for="(babie, index) in cBabies">
							<div class="mb-3">
								<input type="text" v-model="babie.text" class="border border-grey text-center bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default text-gray-700" :name="'babie['+index+'][text]'">
								<input type="radio" :name="'babie['+index+'][type]'" v-model="babie.type" value="castigo" :id="'castigo-'+index"> <label :for="'castigo-'+index">Castigo</label>
								<input type="radio" :name="'babie['+index+'][type]'" v-model="babie.type" value="premio" :id="'premio-'+index"> <label :for="'premio-'+index">Premio</label>
							</div>

						</div>
					</div>
				</transition>
				<div class="flex flex-row justify-between">
					<button class="py-3 px-4 bg-yellow-500 text-white rounded-lg" @click="navigatePrev" type="button"> Regresa</button>
		        	<button class="py-3 px-4 bg-yellow-500 text-white rounded-lg" @click="navigateNext" type="button">Estamos Listos!</button>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	export default {
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
			if(! this.size) {
				this.$router.push('/')
			}
			if(this.$cookies.get('babies')) {
				let cookie = this.$cookies.get('babies')
				this.cBabies = JSON.parse(cookie);
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

				this.$cookies.set('babies', JSON.stringify(cleanArray), 0);
			},
			navigatePrev: function() {
				this.storeCookie()
				this.$router.push('/');
			},
			navigateNext: function(){
				this.storeCookie()
				this.$router.push('/rosca/');
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