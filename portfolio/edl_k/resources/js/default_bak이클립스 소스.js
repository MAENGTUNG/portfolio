var windowWidth; // 20200113 수정

(function($) {

	// 스크롤시 Header fixed
	$(window).scroll(function() {

		var scrollTop = $(window).scrollTop();
		var headerHeight = 10;

		if (scrollTop > headerHeight) {
			$(".header").addClass("scroll");
		} else {
			$(".header").removeClass("scroll");
		}

	});

	// pg-top 상단으로 이동
	$(".pg-top a").on("click", function() {
		$("body, html").animate({
			scrollTop : 0
		}, 400);
	});

	$('.mobile-menu .menu').on('click', function() {
		gnb();
	});
	
	gnb();
	mobileMenuScrollbar(); // 20200113 추가
	pgTop();

})(jQuery);

$(window).resize(function() {
	gnb();
	mobileMenuScrollbar(); // 20200113 추가
	pgTop();
});

// gnb
function gnb() {
	windowWidth = $(window).width(); // 20200113 수정
	if (windowWidth < 1200) {

		// 창 가로 크기가 1200 미만일 경우
		$('.header').removeClass('active');
		$('.gnb-list > li').on('mouseleave', function() {

			$('.gnb-list > li').parents('.header').removeClass('active');
			$(".gnb-list > li").children("ul").removeClass("on");

		});

		$('.mobile-menu .menu').on('click', function() {
			$('.header').addClass('mobile-active');
		});

		$('.gnb-wrap .mobile-menu-close').on('click', function() {
			$('.header').removeClass('mobile-active');
			$('.gnb-list > li > ul').slideUp();
			$('.gnb-list > li').removeClass('on');
		});

		$('.gnb-list > li').on('click', function() {
			$(this).addClass('on');
			$(this).children('ul').slideDown();
			
			$('.gnb-list > li').not($(this)).removeClass('on');
			$('.gnb-list > li > ul').not($(this).children('ul')).slideUp(); /* 20200129 수정 */
		});

		// main 1depth 메뉴 링크
		$('.header > .gnb-wrap > .gnb-list > li:eq(1) > a').attr("href", "#none"); /* 20200213 수정 */
		$('.header > .gnb-wrap > .gnb-list > li:eq(4) > a').attr("href", "#none"); /* 20200213 수정 */

	} else {

		// 창 가로 크기가 1200보다 클 경우/* header */
		$('.header').removeClass('mobile-active');

		$('.gnb-list > li').on('mouseenter', function() {

			$(this).parents('.header').addClass('active');
			$(this).children("ul").addClass("on");

		});
		$('.gnb-list > li').on('mouseleave', function() {

			$('.gnb-list > li').parents('.header').removeClass('active');
			$(".gnb-list > li").children("ul").removeClass("on");

		});

		// main 1depth 메뉴 링크
		$('.header > .gnb-wrap > .gnb-list > li:eq(1) > a').attr("href", "/contentPopular"); /* 20200213 수정 */
		$('.header > .gnb-wrap > .gnb-list > li:eq(4) > a').attr("href", "/noticeList"); /* 20200213 수정 */

	}
}

/* 20200113 추가 시작 */
// 모바일 메뉴 스크롤바
function mobileMenuScrollbar() {
	windowWidth = $(window).width();
	if (windowWidth < 1200) {
		$('.gnb-wrap').mCustomScrollbar({
			theme : "minimal"
		});
	} else {
		$('.gnb-wrap').mCustomScrollbar('destroy');
	}
}
/* 20200113 추가 끝 */

// pg-top 상단으로 이동
function pgTop() {
	windowWidth = $(window).width(); // 20200113 수정
	var scTop = $(window).scrollTop();
	var contHeight = $(document).height() - $(window).height() - $(".footer").height();

	sizeChk(scTop, contHeight);// 기본

	$(window).scroll(function() {// 스크롤할때
		scTop = $(window).scrollTop();
		contHeight = $(document).height() - $(window).height() - $(".footer").height();

		sizeChk(scTop, contHeight);

		pgTopScroll();
	});

	function sizeChk(scTop, contHeight) {
		if (scTop > contHeight) {
			Move();
		} else if (scTop <= contHeight) {
			Fix();
		}
	}

	function Move() {
		if (windowWidth < 1000) {
			$(".pg-top").css({
				"bottom" : scTop - contHeight + 30
			});
		} else {
			$(".pg-top").css({
				"bottom" : scTop - contHeight + 60
			});
		}
	}

	function Fix() {
		if (windowWidth < 1000) {
			$(".pg-top").css({
				"bottom" : 30
			});
		} else {
			$(".pg-top").css({
				"bottom" : 60
			});
		}
	}
}

// 스크롤시 상단으로 이동 버튼 on/off
function pgTopScroll() {

	if ($(this).scrollTop() > 100) {
		$(".pg-top").stop().fadeIn(300);
	} else {
		$(".pg-top").stop().fadeOut(300);
	}

}
