import Swal from 'sweetalert2'

export default {
	computed: {
		babyType: {
			get() {
				return this.$store.state.babyType
			},
		},
	},
	mounted(){
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

		this.piecesLeft = this.pieces

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