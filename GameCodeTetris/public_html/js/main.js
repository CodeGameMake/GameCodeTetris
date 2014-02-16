$(document).ready(function () {
	$('.block').click(function () {
		$('.block').css ('left', LeftRandom());
		$('.block').animate({ top: '720px'},5000);
	});
});

function LeftRandom()
{
	var pixel = Math.random()*620;
	pixel = Math.round(pixel)+"px"
	return pixel;
}