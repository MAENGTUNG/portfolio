var popularSwiper = null;

(function($) {

	// 메인 비주얼 슬라이드
	$('.visual-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: false,
		autoplay: true,
		speed: 1000,
		infinite:true,
		autoplaySpeed: 4000,
		easing: 'easeInOutQuint',
		pauseOnHover:false
	});


    // 인기 컨텐츠
	/*$('.popular-list > li').each(function(index){ 
	    var popularListHeight = $(".popular-wrap > .popular-list > li").eq(index).height();
	    $(".popular-wrap > .popular-list > li").eq(index).height(popularListHeight);
	});*/


	checkedWidth();

	$(window).resize(function() {

		checkedWidth();
		
	});


})(jQuery);

// 인기 컨텐츠 swiper 클래스 추가 / 삭제
function popularAdd() {
	if(!$('.popular-list-wrap').hasClass('swiper-container')){
		$('.popular-list-wrap').addClass('swiper-container');
	}
	if(!$('.popular-list-wrap .popular-list').hasClass('swiper-wrapper')){
		$('.popular-list-wrap .popular-list').addClass('swiper-wrapper');
	}
	if(!$('.popular-list-wrap .popular-list li').hasClass('swiper-slide')){
		$('.popular-list-wrap .popular-list li').addClass('swiper-slide');
	}
}
function popularRemove() {

	if($('.popular-list-wrap').hasClass('swiper-container')){
		$('.popular-list-wrap').removeClass('swiper-container');
	}
	if($('.popular-list-wrap .popular-list').hasClass('swiper-wrapper')){
		$('.popular-list-wrap .popular-list').removeClass('swiper-wrapper');
	}
	if($('.popular-list-wrap .popular-list li').hasClass('swiper-slide')){
		$('.popular-list-wrap .popular-list li').removeClass('swiper-slide');
	}
}

function checkedWidth() {
	var windowWidth = $( window ).width();
	if(windowWidth <= 999) {
		//창 가로 크기가 999이하 일 경우

		// 인기 컨텐츠
		popularAdd();
		init();

		// 인기 컨텐츠 스크롤시 모션 추가/삭제
		$('.popular-list-wrap > .popular-list > li').removeAttr('data-aos');

	} else {
		//창 가로 크기가 999보다 클 경우

		// 인기 컨텐츠
		popularSwiperDestroy();
		popularRemove();

		// 인기 컨텐츠 스크롤시 모션 추가/삭제
		$('.popular-list-wrap > .popular-list > li').attr('data-aos', 'fade-up');
		/* 20200211 수정 시작 */
		/*AOS.init({
			duration: 1000,
			//easing: 'ease-in-sine',
		});*/
		/* 20200211 수정 끝 */

	}
}

function init() {
	// 인기 컨텐츠
	popularSwiper = new Swiper('.swiper-container.popular', {
		breakpoints: {
	        999: {
			slidesPerView: 'auto',
			spaceBetween: 12,
			freeMode: true,
			roundLengths: true
	        }
	    }
	});
}
function popularSwiperDestroy(){
	if(popularSwiper != null) popularSwiper.destroy(true,true);
}

// 최신 컨텐츠
var trendSwiper = new Swiper('.swiper-container.trend', {
	slidesPerView: 'auto',
	spaceBetween: 40,
	freeMode: true,
	roundLengths: true,
    nextButton: '.swiper-button-next.trend',
    prevButton: '.swiper-button-prev.trend',
    pagination:  '.swiper-pagination',
	breakpoints: {
        999: {
	      	spaceBetween: 12,
		    nextButton: '.swiper-button-hidden',
		    prevButton: '.swiper-button-hidden',
        }
    }
});

// 뉴스
var newsSwiper = new Swiper('.swiper-container.news', {
	slidesPerView: '3',
	spaceBetween: 40,
	roundLengths: true,
    nextButton: '.swiper-button-next.news',
    prevButton: '.swiper-button-prev.news',
});
