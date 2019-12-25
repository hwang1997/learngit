$(function(){
	initPage();
	$(window).resize(function(){
		initPage();
	})
	function initPage(){
		var width = window.screen.width;
        console.log("www="+width);
		// console.log("widht="+widht);
		w = width/750*100/16*100;

		console.log("w="+w);
		document.getElementsByTagName('html')[0].style.fontSize = w + "%";
	}
});