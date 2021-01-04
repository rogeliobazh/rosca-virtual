<template>
	<div>
		<div class="step-container text-center">
			<div class="max-w-2xl mx-auto">
				<h1 class="text-xl mb-4">Bienvenido!</h1>
				<p class="text-center text-base leading-6 mb-2">
					Gracias por visitar nuestra panadería virtual!
				</p>
				<p class="text-center text-base leading-6 mb-2">
					Por temporada alta, solo te venimos manejando lo que son las roscas de reyes y la verdad es que nos quedan bien buenas. Cómo ves, te interesa?
				</p>
				<p class="text-center text-base leading-6 mb-2">
					Excelente! Para empezar, cuentanos... de que tamaño quieres tu rosca?
				</p>
				<div class="mx-auto flex flex-row justify-center my-4">
					<div>
						<input type="radio" id="sm" value="10" v-model="size">
						<label for="sm" class="size-label border border-gray-200 text-gray-400 size-sm">Chica</label></div>
					<div>
						<input type="radio" id="md" value="20" v-model="size">
						<label for="md" class="size-label border border-gray-200 text-gray-400 size-md">Mediana</label>
					</div>
					<div>
						<input type="radio" id="lg" value="30" v-model="size">
						<label for="lg" class="size-label border border-gray-200 text-gray-400 size-lg">Grande</label>
					</div>
					<div>
						<input type="radio" id="xl" value="50" v-model="size">
						<label for="xl" class="size-label border border-gray-200 text-gray-400 size-xl">Extra Grande</label>
					</div>
				</div>

			</div>
			<transition name="fade">
				<div v-show="size != ''" class="flex flex-row justify-end">
					<button class="py-3 px-4 bg-yellow-500 text-white rounded-lg" @click="navigateNext" type="button">Siguiente</button>
				</div>
			</transition>
		</div>

	</div>
</template>
<script>
	export default {
		computed: {
			size: {
				get() {
					return this.$store.state.size
				},
				set(value){
					this.$store.commit('setSize', value)
				}
			},
		},
		methods: {
			navigateNext: function(){
				this.$router.push('/babies/');
			}
		}
	}
</script>