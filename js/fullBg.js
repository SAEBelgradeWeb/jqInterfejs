$(document).ready(function(){
var broj = 1;


	setInterval(function(){
		
		animirajTekst();

		promeniSliku();
		broj++;
	}, 3000);




function promeniSliku(){
	var $cont = $('.container')
	
	// $cont.fadeOut().fadeIn();

	$cont.fadeOut('200', function(){
		//sto napisem ovde, desice se nakon sto se fade out zavrsi

		if (broj == 4) broj = 1;
		$cont.css({
					backgroundImage: 'url(images/bg_full' + broj + '.jpg)'
		});
	}).fadeIn();
}

function animirajTekst(){
	$('h1').animate({
		left: '200px'
	}, 200);

	$('h2').animate({
		left: '208px'
	}, 850);


}



});