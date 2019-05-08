$(function() {
	var count = 0;
	$(".pp-banner li").eq(count).fadeIn();
	function lunbo(){
		count++;
		if(count == $(".pp-banner li").length) {
			count = 0;
		}
		$(".pp-banner li").eq(count).fadeIn().siblings().fadeOut();
	}
	var timer = setInterval(function() {
		lunbo();
	}, 3000)
	$(".pp-banner li").mouseover(function (){
		clearInterval(timer);
	})
	$(".pp-banner li").mouseout(function (){
		setInterval(function() {
			lunbo();
		}, 3000)
	})
})