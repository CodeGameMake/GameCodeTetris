$(document).ready(function () {
	$("#html").focusin(function () {
		$("#html").keydown(function (event) {
			if (event.which == "13") {
				var text = $("#html").val();
				$('#html').attr('disabled', 'disabled');
				CreateBlock(text);
				FallBlock(5000);
			}
		});
	});
	$("#js").focusin(function () {
		$("#js").keydown(function (event) {
			if (event.which == "13") {
				var command = $("#js").val();
				$('#js').attr('disabled', 'disabled');
				Command[command]();
			}
		});
	});
	
});




var Command = Object();

Command.GoLeft = function () {
	var position = $('.block').css('left');
	position = parseInt(position)+50+'px';
	$('.block').css('margin-left', position);
}

Command.GoRight = function () {
	var position = $('.block').css('left');
	position = parseInt(position)-50+'px';
	$('.block').css('left', position);
}

Command.GoBottom = function () {
	var position = $('.block').css('top');
	position = parseInt(position)+50+'px';
	$('.block').css('top', position);
}

function FallBlock(speed) {
	$('.block').css('left', LeftRandom());
	$('.block').animate({
		top: '720px'
	}, speed);

}


function CreateBlock(text) {
	if (text == '<div></div>') {
		$("#gamearea").html(text);
		$('#gamearea div').addClass('block');
	}
	//  $("#gamearea").html(text);
}

function LeftRandom() {
	var pixel = Math.random() * 620;
	pixel = Math.round(pixel) + "px"
	return pixel;
}

