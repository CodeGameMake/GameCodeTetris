$(document).ready(function () { //This function catch keydown, create block and run fall of this block. Run all function when                                                                                                              page already upload.
	$("#html").focusin(function () { //Activate the textarea id = #html when mouse there
		$("#html").keydown(function (event) { // Catch keydown of key 13
			if (event.which == "13") { //Run event if keydown key 13
				var text = $("#html").val(); //Takes #html value and give it to var text
				$('#html').attr('disabled', 'disabled'); //Disable textarea id = #html
				CreateBlock(text); //Run function CreateBlock
				FallBlock(5000); //Run function FallBlock with speed = 5000
			}
		});
	});
	$("#js").focusin(function () { //Activate the textarea id = #js when mouse there
		$("#js").keydown(function (event) { //Catch keydown of key 13
			if (event.which == "13") { //Run event if keydown key 13
				var command = $("#js").val(); //Takes #html value and give it to var command
				$('#js').attr('disabled', 'disabled'); //Disable textarea id = #js
				Command[command](); //Run function Command
			}
		});
	});
});




var Command = Object(); //Create var Command and say so it is object

Command.GoLeft = function () { //This function create var position and move .block for 50 px to left. Create function GoLeft.
	var position = $('.block').css('left'); //Say that var position same as .block left value
	position = parseInt(position) + 50 + 'px'; //Add 50 px to position value
	$('.block').css('margin-left', position); //Give position value to .block margin-left
}

Command.GoRight = function () { //This function create var position and move .block for 50 px to right. Create function GoRight.
	var position = $('.block').css('left'); //Say that var position same as .block left value
	position = parseInt(position) - 50 + 'px'; //Take 50 px from position value
	$('.block').css('left', position); //Give position value to .block left
}

Command.GoBottom = function () { //This function create var position and move .block for 50 px to bottom. Create function                                                                                                                          GoRight.
	var position = $('.block').css('top'); //Say that var position same as .block top value
	position = parseInt(position) + 50 + 'px'; //Add 50 px to position value
	$('.block').css('top', position); //Give position value to .block top
}

function FallBlock(speed) { //This function do .block left = LeftRandom () function and run animate top for 720px
	$('.block').css('left', LeftRandom()); //This do .block left = LeftRandom () function
	$('.block').animate({ //This run animate for .block with top = 720px and undefiend speed
		top: '720px'
	}, speed);

}


function CreateBlock(text) { //This function creates block when user type in #gamearea '<div></div>' and add class = block to                                                this element and then add class = RandomColor () and run RandomColor () function.
	if (text == '<div></div>') { //This check what printed in #gamearea. If it is '<div></div>' will run the function below.
		$("#gamearea").html(text); //This will get context from #gamearea
		$('#gamearea div').addClass('block'); //This will add class = block to this element
		$('.block').addClass(RandomColor()); //This will add class = RandomColor () and run RandomColor () function
	}
}

function LeftRandom() { //This function generate random number from 0 to 620 and round it
	var pixel = Math.random() * 620; //This will generate random number from 0 to 620 and set it as value of var pixel
	pixel = Math.round(pixel) + "px"; //This will round generated number
	return pixel; //This will return var pixel
}

var color_class = new Array("block-blue", //This massive contains ten colors for function RandomColor ()
	"block-green",
	"block-orange",
	"block-steel",
	"block-red",
	"block-darkblue",
	"block-yellow",
	"block-violet",
	"block-pink",
	"block-turqoise")

	function RandomColor() { //This function will generate random number round it, and use it for make random color using massive                                                                                                                    'color_class'
		var number = Math.random() * 9; //This will generate random number from 0 to 9 and set it as value of var number
		number = Math.round(number); //This will round generated number
		var color_block = color_class[number]; //This will search element in massive 'color_class' by value of var number and set                                                                                          found color as value of var color_block
		return color_block; //This will return var color_block
	}

	function Adaptation(position) {//This function will stop block when it go to leave #gamearea
		if (position < '0px') {//Here if var position will be less then 0 pixels, var position will be multipluied by (-1)
			position = parseInt(position * (-1)) + 'px';//Here var position will be multipluied by (-1)
		}
		if (position > '690px') {//Here if var position will be more then 690 pixels, var position will substracted 690 from it
			position = parseInt(position - 690) + 'px';//Here var position will substracted 690 from it
		}
		return position;//This will return var position
	}