$(document).ready(function(){
	
	var mrdanje;

	$('.slika img').on('mouseover', function(){
		var i = 1;
		mrdanje = setInterval(function(){
		if (i < 6) {
			$('.slika img').attr('src', 'images/mov1-new' + i + '.jpg');
			i++;
		} else {
			i = 1;
		}

		}, 200);
	}).on('mouseout', function(){

		clearInterval(mrdanje);
	});


	$('.zeleno').on('click', function(){
		$(this).animate({
			'width': '400px'

		}, 2000)
	});
});




