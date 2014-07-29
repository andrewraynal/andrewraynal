$(document).ready(function(){
	$(window).scroll(function () {
		var img_url = 'images/livemusic.jpg'
		if ($(window).scrollTop() > 800) {
			img_url = 'images/surprise.jpg';
		}
		$('#masthead').css('background-image', img_url);
	});
});