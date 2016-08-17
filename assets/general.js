jQuery( document ).ready(function( $ ) {
	
//	function loadFrame() {
		var iframe = document.getElementById("appframe");
		iframe.onload = function(){
			iframe.contentWindow.cordova = window.cordova;
		};
		iframe.src = 'https://www.harken.com/apps/tradeapp/';
//	}

	function pageSize() {
		var pgWidth = $(window).width();
		var pgHeight = $(window).height();
		$('.page').css({'width':pgWidth+'px','height':pgHeight+'px'});
		$('#appframe').css({'width':pgWidth+'px','height':pgHeight+'px'});
	}
	pageSize();

	function appSize() {
		var pgWidth = $(window).width();
		var pgHeight = $(window).height();
		$('#appframe').css({'width':pgWidth+'px','height':pgHeight+'px'});
//		loadFrame();
	}
//	setTimeout(appSize, 3000);

	var resizeId;
	$(window).resize(function() {
		clearTimeout(resizeId);
		resizeId = setTimeout(pageSize, 150);
		resizeId = setTimeout(appSize, 150);
	}); 
	
});
