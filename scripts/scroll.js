$(document).ready(function(){
var elemId = '.logo';
 $('.logos').animate({
    scrollTop: $(elemId).parent().scrollTop() + $(elemId).offset().top - $(elemId).parent().offset().top
}, {
    duration: 1000,
    specialEasing: {
        width: 'linear',
        height: 'easeOutBounce'
    },
    complete: function (e) {
        console.log("done");
    	}
	});
});