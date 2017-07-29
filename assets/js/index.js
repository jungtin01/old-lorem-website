$(document).ready(function(){
	$("#leftContent .row:first").css('margin-top','30px');
	$("#day").on('click',function(){
		$('#rankingDay').fadeIn();
		$('#rankingMonth').fadeOut();
		$('#rankingYear').fadeOut();
	});
	$("#month").on('click',function(){
		$('#rankingDay').fadeOut();
		$('#rankingMonth').fadeIn();
		$('#rankingYear').fadeOut();
	});
	$("#year").on('click',function(){
		$('#rankingDay').fadeOut();
		$('#rankingMonth').fadeOut();
		$('#rankingYear').fadeIn();
	});
	// ControllerNavSearchToggle
	$(".controllerNavSearch").click(function(){
		$(".searchToggle").toggle('swing');
	});
});