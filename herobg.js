var images = [
    "1.jpg",
	"donk.png",
	"shrek.jpg"
];
$(function () {
	var i = 0;
	$("#hero").css("background-image", "url(herobg/" + images[i] + ")");
	$("#hero").css("background-position-x", "center");
	$("#hero").css("background-position-y", "center");
	$("#hero").css("background-size", "cover");
	setInterval(function () {
        console.log(`${i} ${images.length} ${images[i]}`);
		i++;
		if (i == images.length) {
			i = 0;
		}
		$("#hero").fadeOut("slow", function () {
			$(this).css("background-image", "url(herobg/" + images[i] + "");
			$(this).fadeIn("slow");
		});
	}, 2500);
});