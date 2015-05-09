$(document).ready(function() {

	// Фон страницы подстраивается на весь экран под ширину
	function wResize(){
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function(){
		wResize()
	});

});