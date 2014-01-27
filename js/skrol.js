$(document).ready(function(){

	$(window).on('scroll', function(){
		var gdesmo = $(window).scrollTop();
		if(gdesmo > 0) {
			$('.nav').addClass('skrol');
		} else {
			$('.nav').removeClass('skrol');
		}

	});


	//$('.nav').addClass('skrol');
});