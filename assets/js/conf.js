$(document).ready(function(){
    $(".commentSocialMediaControl").click(function(){
        $("#myModal").modal('show');
    });
    $(".searchIcon").on('click',function(){
    	$(".confessionSearch").toggle('swing');
    });
});