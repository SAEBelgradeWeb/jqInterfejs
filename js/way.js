$(document).ready(function(){

	$('#cilj').waypoint(function(direction){
		//ovo ce da ogranici samo ako je skrol na dole
		if (direction == "down"){

			/*$('#cilj p').fadeIn().animate({
				'left': '0px'
			}, {
				duration: 300,
				queue: false

			});

			$('#cilj img').fadeIn().animate({
				'right': '0px'
			}, {
				duration: 300,
				queue: false

			})*/

			$('#cilj p').addClass('p_stanje2');
			$('#cilj img').addClass('img_stanje2');
		} else {
			$('#cilj p').removeClass('p_stanje2');
			$('#cilj img').removeClass('img_stanje2');
		}

	}, {
		offset: "500px"
	});

}); 