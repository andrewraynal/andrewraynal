$(document).ready(function(){
		function getPos() {
    	var Pos = $(window).scrollTop();
    				return Pos;
}
		var bgImage = $('#masthead');
		
			$(window).scroll(function() {
			var here = getPos();
			if (here <= 10) {
				bgImage.css('background-image', 'url("images/livemusic.jpg")');
			} else if (here <= 75) {
				bgImage.css('-webkit-filter', 'brightness(150%)');
			}
			else if (here <= 150) {
				bgImage.css('-webkit-filter', 'brightness(175%)');
			}
				});

		var bgProjectOne = $('.red');
		var bgProjectTwo = $('.green');
		var bgProjectThree = $('.blue');
		$(window).scroll(function() {
			var here = getPos();
			console.log(here);
			if (here >= 1300) {
				bgProjectOne.css('-webkit-filter', 'brightness(200%)');
				bgProjectTwo.css('-webkit-filter', 'brightness(200%)');
				bgProjectThree.css('-webkit-filter', 'brightness(200%)');
			
			}
		}); 
	});