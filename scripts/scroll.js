$(document).ready(function(){
	$(window).scroll(function (url) {
		var img_url = '..images/livemusic.jpg'
		if ($(window).scrollTop() > 800) {
			image_url = '..images/surprise.jpg';
		}
		$(#masthead).css('background-image', img_url);
	});
});