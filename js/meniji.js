$(document).ready(function(){
	$('.drugi li').on('mouseenter', function(){
		$(this).animate( {
			'width': '250px',
			'font-size': '25px'
		}, 300 );
	}).on('mouseout', function(){
		$(this).animate( {
			'width': '200px',
			'font-size': '20px'
		}, 300 );
	});

});