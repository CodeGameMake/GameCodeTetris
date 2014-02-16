$(document).ready(function () {
    $('.block').click(function () {
        $('.block').css('left', LeftRandom());
        $('.block').animate({
            top: '720px'
        }, 5000);
    });
});
$("#html").focusin(function () {
    $("#html").keydown(function (event) {
        if (event.which == "13") {
            var text =  $("#html").val();
            CreateBlock(text);
        }
    });
});

function CreateBlock(text) {
    if (text == '<div></div>') {
        $("#gamearea").html(text);
    }
    //  $("#gamearea").html(text);
}

function LeftRandom() {
    var pixel = Math.random() * 620;
    pixel = Math.round(pixel) + "px"
    return pixel;
}