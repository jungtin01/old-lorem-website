$(document).ready(function(){
    $("#confessionContent").hide();
    $(".confActing").parent().hide();

    $('.post').click(function(){
        $("#confessionContent").hide();
        $(".confActing").parent().hide();
        $("#postContent").fadeIn();
        $(".postAction").fadeIn();
    });
    $('.confession').click(function(){
        $("#confessionContent").fadeIn();
        $(".confActing").parent().fadeIn();
        $("#postContent").hide();
        $(".postAction").hide();
    });
});