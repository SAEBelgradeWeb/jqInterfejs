$(document).ready(function(){
	$('dd').hide();

	var $dt = $('dl');

	$dt.on('click', 'dt', function(){
		$(this).next('dd').slideDown()
				.siblings('dd').slideUp();
	});


	$('input[type=button]').attr('disabled', 'disabled')
});