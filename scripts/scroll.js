$(document).ready(function(){
		function getPos() {
    	var Pos = $(window).scrollTop();
    				return Pos;
}
		var bgImage = $('#masthead');
			$(window).scroll(function() {
			var here = getPos();
				console.log(here);
			if (here <= 10) {
				bgImage.css('background-image', 'url("images/livemusic.jpg")');
			} else if (here <= 100) {
				bgImage.css('-webkit-filter', 'brightness(150%)');
			}
			else if (here <= 200) {
				bgImage.css('-webkit-filter', 'brightness(200%)');
			}
		

	}); //scroll
});