import Swal from 'sweetalert2'

export default {
	data() {
		return {
			used: [],
		}
	},
	computed: {
		babyType: {
			get() {
				return this.$store.state.babyType
			},
		},
	},
	mounted(){
		this.setPiecesPosition()
		this.hideBabies()
		setTimeout(function(){
			this.loadPie = true
		}.bind(this), 3000)
	},
	methods: {
		setPiecesPosition: function() {
			let pieceNumber = document.querySelectorAll("[class^=rp]")

			for (var i=0; i < pieceNumber.length; i++)
			{
				let currentPiece = pieceNumber[i].getAttribute("data-piece")

				if (this.top.indexOf(currentPiece) != -1 ) {
					pieceNumber[i].classList.add("rp-top");
				} else if (this.left.indexOf(currentPiece) != -1) {
					pieceNumber[i].classList.add("rp-left");
				} else if (this.bottom.indexOf(currentPiece) != -1) {
					pieceNumber[i].classList.add("rp-bottom");
				} else if (this.right.indexOf(currentPiece) != -1) {
					pieceNumber[i].classList.add("rp-right");
				}
			}
		},
		hideBabies: function() {
			this.piecesLeft = this.pieces
			this.prieces = JSON.parse(this.$cookies.get('babies'))
		    for (var i = 0, trancientPieces = []; i < this.pieces; i++) {
	    		trancientPieces[i] = i;
	  		}
	  		trancientPieces.sort(function () {
		     	return Math.random() - 0.5;
			});

			this.hiddenPlaces = trancientPieces.splice(0,this.babies);
		},
		checkBabie: function(piece, index) {
			if(this.used.indexOf(index) != -1){
				return;
			}
			this.used.push(index)
			this.piecesLeft--
			let inPrieces = this.checkValue(index);
			if(inPrieces){
				let title_s = this.prieces[this.price].type == 'castigo' ? '¡OH-UH!' : '¡YAY!'
				let name = this.babyType == 'grogu' ? 'Grogu' : 'Bebe'
				let img = this.prieces[this.price].type == 'castigo' ? 'Sad'+name : 'Happy'+name
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
			let breadcrum = this.getRandomBreadcrum() + 1
			let el = document.getElementsByClassName('rp-'+index)[0];
			el.classList.add("breadcrum-"+breadcrum);
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
		},
		getRandomBreadcrum: function(){
	 	 	return Math.floor(Math.random() * Math.floor(3));
		}
	}
}