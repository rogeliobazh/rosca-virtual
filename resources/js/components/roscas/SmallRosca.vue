<template>
	<div class="rosca-container chica">
		<transition name="fade">
			<div v-if="loadPie == true" class="mesa">
				<div v-if="piecesLeft > 0" class="grid-container">
					<div
						v-for="(piece, index) in pieces"
						v-on:click="checkBabie(piece, index)"
						:key="piece"
						:class="'rp-'+index">
					</div>
				</div>
			</div>

		</transition>
		<transition name="fade">
			<div v-if="piecesLeft == 0" class="step-container">
				<div  class="max-w-2xl mx-auto">
					<h1>Gracias por tu preferencia!</h1>
					<p class="text-center text-base leading-6 mb-2">Esperamos que hayan disfrutrado de nuestra rosca!</p>
					<p class="text-center text-base leading-6 mb-2"> Te agradeceriamos mucho tus comentarios en nuestra página de <a href="https://www.facebook.com/LaRoscaVirtual" class="text-yellow-500" target="_blank">facebook</a>!</p>
					<p class="text-center text-base leading-6 mb-2"> Quieres volver a empezar? </p>
					<p class="text-center text-sm leading-6 mb-2"> No te preocupes, puedes pedir las roscas que quieras, son libres de gluten, no engordan y el envió va por nuestra cuenta ;)</p>
					<button class="py-3 px-4 bg-yellow-500 text-white rounded-lg" @click="navigateBeg" type="button">Empezar de Nuevo</button>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	import Swal from 'sweetalert2'
	export default {
		data() {
			return {
				pieces: 10,
				price: 0,
				piecesLeft: 1,
				babies: this.$store.state.babies,
				prieces: [],
				hiddenPlaces: [],
				loadPie: false,
			}
		},
		mounted(){
			this.piecesLeft = this.pieces
			Swal.fire({
			  title: 'Cocinando!',
			  html: '<p class="text-center text-base leading-6 mb-2">Ve preparando tu cafecito</p> <p class="text-center text-base leading-6 mb-2">No olvides compartir tu pantalla!</p>',
			  timer: 4000,
			  timerProgressBar: true,
			  allowOutsideClick: () => false,
			  didOpen: () => {
			    Swal.showLoading()
			  },
			  willClose: () => {
			    clearInterval()
			  }
			})
			this.prieces = JSON.parse(this.$cookies.get('babies'))
		    for (var i = 0, cPieces = []; i < this.pieces; i++) {
	    		cPieces[i] = i;
	  		}
	  		cPieces.sort(function () {
		     	return Math.random() - 0.5;
			});
			this.hiddenPlaces = cPieces.splice(0,this.babies);
			console.log(this.hiddenPlaces);
			setTimeout(function(){
				this.loadPie = true
			}.bind(this), 3000)
		},
		methods: {
			checkBabie: function(piece, index) {
				this.piecesLeft--
				let inPrieces = this.checkValue(index);
				if(inPrieces){
					let title_s = this.prieces[this.price].type == 'castigo' ? '¡OH-UH!' : '¡YAY!'
					let img = this.prieces[this.price].type == 'castigo' ? 'SadGrogu' : 'HappyGrogu'
					Swal.fire({
					  	imageUrl: '../assets/img/'+img+'.png',
						imageHeight: 300,
					  	title: title_s,
					  	confirmButtonText: 'Seguir Jugando',
					  	text: this.prieces[this.price].text,
					});
					this.price++;
				} else {
					Swal.fire({
					  icon: 'info',
					  title: 'UFFFFF',
					  text: 'De la que te salvaste',
					});
				}
				let el = document.getElementsByClassName('rp-'+index)[0];
				el.style.display = "none";
			},
			navigateBeg: function(){
				this.$router.push('/');
			},
			checkValue: function(index){
				let status = false;
				for(var i=0; i<this.hiddenPlaces.length; i++){
					let name = this.hiddenPlaces[i];
				    if(name == index){
				      status = true;
				      break;
				    }
				  }
				  return status;
			}
		},
	}
</script>