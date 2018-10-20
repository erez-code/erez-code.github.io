window.addEventListener("load", startup, false);

function startup() {

$(".stars").hover(function() {
  $(this).css('margin-left', function (index, curValue) {
    if (parseInt(curValue, 10) < $("body").width() - 100) {
    console.log($(this).attr('id'), "is at", parseInt(curValue, 10) +"px")
    return parseInt(curValue, 10) + 50 + 'px';}
    else {
		return "10px";}
});

});
}