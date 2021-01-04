<template>
	<div class="rosca-container mediana">
		<div class="grid-container">
			<div
				v-for="(piece, index) in pieces"
				v-on:click="checkBabie(piece, index)"
				:key="piece"
				:class="'rp-'+index">
			</div>
		</div>
	</div>
</template>
<script>
	import Swal from 'sweetalert2'
	export default {
		data() {
			return {
				pieces: 20,
				price: 0,
				babies: this.$store.state.babies,
				prieces: [],
				hiddenPlaces: [],
			}
		},
		mounted(){
			this.prieces = this.$cookies.get('babies')
		    for (var i = 0, cPieces = []; i < this.pieces; i++) {
	    		cPieces[i] = i;
	  		}
	  		cPieces.sort(function () {
		     	return Math.random() - 0.5;
			});
			this.hiddenPlaces = cPieces.splice(0,this.babies);
			console.log(this.hiddenPlaces);
		},
		methods: {
			checkBabie: function(piece, index) {
				let inPrieces = this.checkValue(index);
				console.log(inPrieces);
				if(inPrieces){
					Swal.fire({
					  	imageUrl: '../assets/img/grogu.png',
						imageHeight: 300,
					  	title: 'Yeeei!',
					  	text: this.prieces[this.price].text,
					});
					this.price++;
				} else {
					Swal.fire({
					  icon: 'info',
					  title: 'Buuu',
					  text: 'No hay ninjo :(',
					});
				}
				let el = document.getElementsByClassName('rp-'+index)[0];
				el.style.display = "none";
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