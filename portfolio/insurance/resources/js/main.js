(function($) {

	// 스크롤시 퀵 메뉴 fixed
	$(window).scroll(function(){

		var scrollTop = $(window).scrollTop();
		var headerHeight = 10;

		if(scrollTop > headerHeight){
			$(".quick-menu").addClass("scroll");
		}else {
			$(".quick-menu").removeClass("scroll");
		}
		
	});

	visualMenuHeight();

})(jQuery);

$(window).resize(function() {

	visualMenuHeight();

});

// 메인 비쥬얼 btn 높이
function visualMenuHeight() {
	var visualMenuWidth = $('.visual-menu-list > li > a').width();
	$('.visual-menu-list > li > a').css({'height' : visualMenuWidth});
}