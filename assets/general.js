// JavaScript Document

jQuery( document ).ready(function( $ ) {
	
	var srcURL = 'https://www.harken.com/apps/tradeapp/';
	var pgFrame = '<iframe src="'+srcURL+'" frameborder="0"></iframe>';
	$('.page').html(pgFrame);
	
	function pageSize() {
		var pgWidth = $(window).width();
		var pgHeight = $(window).height();
		$('.page, .page iframe').css({'width':pgWidth+'px','height':pgHeight+'px'});
	}
	pageSize();
	var resizeId;
	$(window).resize(function() {
		clearTimeout(resizeId);
		resizeId = setTimeout(pageSize, 150);
	}); 
	
});