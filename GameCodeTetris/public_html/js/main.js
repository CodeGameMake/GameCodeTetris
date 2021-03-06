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
        $('.block').addClass(RandomColor());
    }
}

function LeftRandom() {
		var pixel = Math.random() * 620;
    pixel = Math.round(pixel) + "px";
    return pixel;
}

var color_class = new Array("block-blue",
                            "block-green",
                            "block-orange",
                            "block-steel",
                            "block-red",
                            "block-darkblue",
                            "block-yellow",
                            "block-violet",
                            "block-pink",
                            "block-turqoise")
function RandomColor() {
    var number = Math.random() * 9;
    number = Math.round(number);
    var color_block = color_class[number];
    return color_block;
}

function Adaptation (position) {
	if(position<0px) {
		position = position*(-1);
	}
	if(position>690px) {
		position = position-690px;
	}
	return position;
}
