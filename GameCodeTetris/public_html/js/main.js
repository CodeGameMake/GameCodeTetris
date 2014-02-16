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
            $("#html").attr('disabled');
        }
    });
});

function LeftRandom() {
    var pixel = Math.random() * 620;
    pixel = Math.round(pixel) + "px"
    return pixel;
}