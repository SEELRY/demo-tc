$(function() {

	$(".m6-container .dc-nav li").on("click", function() {
		if($(this).hasClass('active')) {
			return
		}
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.m6-container .dc-cnt li').eq(index).show().siblings().hide();
	})

})

