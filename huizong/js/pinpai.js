$(function() {
	var count = 0;
	var timer;
	$(".pp-banner li").eq(0).fadeIn();

	function lunbo(obj) {
		count++;
		if(count == $(obj).length) {
			count = 0;
		}
		$(obj).eq(count).fadeIn().siblings().fadeOut();
	}
	timer = setInterval(function() {
		lunbo(".pp-banner li");
	}, 3000)
	$(".pp-banner li").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			lunbo(".pp-banner li");
		}, 3000)
	})
	var num = 0;
	$(".top-main1").eq(0).show();
	$(".bj-top-nav li").eq(num).addClass("top-navhover")

	function toplunbo() {
		num++;
		if(num == $(".top-main1").length) {
			num = 0;
		}
		$(".top-main1").eq(num).show().siblings().hide();
		$(".bj-top-nav li").eq(num).addClass("top-navhover")
			.siblings().removeClass("top-navhover");
	}
	var timertop;
	timertop = setInterval(function() {
		toplunbo();
	}, 3000);
	$(".bj-top-nav li").each(function() {
		$(this).hover(() => {
			clearInterval(timertop);
			$(this).addClass("top-navhover")
				.siblings().removeClass("top-navhover");
			num = $(this).index();
			$(".top-main1").eq($(this).index()).show().siblings().hide();
		}, () => {
			timertop = setInterval(function() {
				toplunbo();
			}, 3000)
		});
	})
})