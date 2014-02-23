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
});

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
    //  $("#gamearea").html(text);
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