(function($){
	$(document).ready(function(){
		let price = 0;

		for (var i = 1, pieces = []; i < 29; i++) {
	    	pieces[i] = i;s
	  	}

	  	pieces.sort(function () {
		     return Math.random() - 0.5;
		});

	  	let babies = pieces.splice(0,7);

	  	let prices = [
	  		'Tamales',
	  		'Abrazos',
	  		'Chistes',
	  		'Perritos',
	  		'Calzones',
	  		'Calcetines',
	  		'Tangas'
	  	];

		$("body").on("click", "*[class^='rp-']", function(){
			let className = $(this).attr('class');
			let number = className.split("-")[1];
			var inBabies = checkValue(number, babies);
			if(inBabies){
				Swal.fire({
				  imageUrl: 'assets/img/grogu.png',
					  imageHeight: 300,
				  title: 'Yeeei!',
				  text: 'Te toco el grogu de ' + prices[price],
				});
				price++;
			} else {
				Swal.fire({
				  icon: 'info',
				  title: 'Buuu',
				  text: 'No hay ninjo :(',
				});
			}
			$(this).hide()
		});

		function checkValue(value,arr){
		  let status = false;

		  for(var i=0; i<arr.length; i++){
		    let name = arr[i];
		    if(name == value){
		      status = true;
		      break;
		    }
		  }
		  return status;
		}
	});
})(jQuery);