$(document).ready(function(){
	var carouselList = $("#carousel ul");
	var intervalID = setInterval(nextSlide, 3000);

	function nextSlide (){
		carouselList.animate({"marginLeft":-400}, 500, afterNextSlide);
	}

	function previousSlide (){
		carouselList.animate({"marginLeft":0}, 500, afterPreviousSlide);
	}

	function afterNextSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function afterPreviousSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	}

	$("#rightButton").click(function() {
		clearInterval(intervalID);
		nextSlide();
		intervalID = setInterval(nextSlide, 3000);
	});

	$("#leftButton").click(function() {
		clearInterval(intervalID);
		previousSlide();
		intervalID = setInterval(previousSlide, 3000);
	});
});