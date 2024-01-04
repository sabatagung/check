$(document){
    $(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 40) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
}