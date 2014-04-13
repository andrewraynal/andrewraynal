$(document).ready(function() {

	//when click on top img (flag),
	//reveal album (top flag img and 2 hidden img)

var showImgs = function(event) {
      event.preventDefault();

//$("." + $(this).attr("href"));

var $contentDiv = $("." + $(this).attr("rel"))
	console.log($contentDiv);

	if (($contentDiv).hasClass("show")) {
		return;
      } else {
	//$("." + contentDiv).siblings().removeClass("show");
      $contentDiv.siblings().removeClass("show");
      $contentDiv.addClass("show");
      }
}
      //when clicking on flag img link
	  //show related imgs 

$(".navcontainer a").click(showImgs);

//scrolling through album pictures
$(".spain").click(function(event) {
      event.preventDefault();
      var $thisPicture = $(this);

      console.log($(this));

$thisPicture.closest("li").siblings().toggle();
$thisPicture.toggleClass("magnify");
});

$(".italy").click(function(event) {
      event.preventDefault();
      var $thisPicture = $(this);

      console.log($(this));

$thisPicture.closest("li").siblings().toggle();
$thisPicture.toggleClass("magnify");
});

$(".argentina").click(function(event) {
      event.preventDefault();
      var $thisPicture = $(this);

      console.log($(this));

$thisPicture.closest("li").siblings().toggle();
$thisPicture.toggleClass("magnify");
});

$(".peru").click(function(event) {
      event.preventDefault();
      var $thisPicture = $(this);

      console.log($(this));

$thisPicture.closest("li").siblings().toggle();
$thisPicture.toggleClass("magnify");
});

 $(".poland").click(function(event) {
      event.preventDefault();
      var $thisPicture = $(this);

      console.log($(this));

$thisPicture.closest("li").siblings().toggle();
$thisPicture.toggleClass("magnify");
});

$(".brazil").click(function(event) {
      event.preventDefault();
      var $thisPicture = $(this);

      console.log($(this));

$thisPicture.closest("li").siblings().toggle();
$thisPicture.toggleClass("magnify");
});

$(".egypt").click(function(event) {
      event.preventDefault();
      var $thisPicture = $(this);

      console.log($(this));

$thisPicture.closest("li").siblings().toggle();
$thisPicture.toggleClass("magnify");
});
});