$(document).ready(function () {//This function catch keydown, create block and run fall of this block. Run all function when                                                                                                              page already upload.
	$("#html").focusin(function () {//Activate the textarea id = #html when mouse there
		$("#html").keydown(function (event) {// Catch keydown of key 13
			if (event.which == "13") {//Run event if keydown key 13
				var text = $("#html").val();//Takes #html value and give it to var text
				$('#html').attr('disabled', 'disabled');//Disable textarea id = #html
				CreateBlock(text);//Run function CreateBlock
				FallBlock(5000);//Run function FallBlock with speed = 5000
			}
		});
	});
	$("#js").focusin(function () {//Activate the textarea id = #js when mouse there
		$("#js").keydown(function (event) {//Catch keydown of key 13
			if (event.which == "13") {//Run event if keydown key 13
				var command = $("#js").val();//Takes #html value and give it to var command
				$('#js').attr('disabled', 'disabled');//Disable textarea id = #js
				Command[command]();//Run function Command
			}
		});
	});
});




var Command = Object();//Create var Command and say so it is object

Command.GoLeft = function () {//This function create var position and move .block for 50 px to left. Create function GoLeft.
	var position = $('.block').css('left');//Say that var position same as .block left value
	position = parseInt(position)+50+'px';//Add 50 px to position value
	$('.block').css('margin-left', position);//Give position value to .block margin-left
}

Command.GoRight = function () {//This function create var position and move .block for 50 px to right. Create function GoRight.
	var position = $('.block').css('left');//Say that var position same as .block left value
	position = parseInt(position)-50+'px';//Take 50 px from position value
	$('.block').css('left', position);//Give position value to .block left
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
