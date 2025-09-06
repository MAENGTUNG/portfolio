(function($) {
	// 게시판 최신순, 조회순 select
	$('.info-hits > dt > a').on('click', function(){
		$('.info-hits > dt > a').toggleClass('on');
		$('.info-hits > dd').slideToggle();
	});

	$('.info-hits > dd a').on('click', function(){
		var infoText = $(this).html();
		$('.info-hits > dt > a').html(infoText);
		$('.info-hits > dt > a').removeClass('on');
		$('.info-hits > dd').slideUp();
	});

	//인기컨텐츠, 최신컨텐츠
	var contentPagination = $('.content-visual-box li').length;
	for(var i=0; i<contentPagination; i++) {
	    $('.content-visual-wrap .pagination').append('<li></li>');
	}

	$('.content-visual-wrap .pagination > li').first().addClass('on');
	$('.content-visual-box li').hide();
	$('.content-visual-box li').first().show();

	$('.total-content-list > li > a').on('click', function(e){

		e.preventDefault();

		var contentListIndex = $(this).parent().index();
		$('.content-visual-wrap .pagination > li').removeClass('on');
		$('.content-visual-wrap .pagination > li').eq(contentListIndex).addClass('on');
		$('.content-visual-box li').fadeOut();
		$('.content-visual-box li').eq(contentListIndex).fadeIn("slow");

	});

	// total contents 필터
	$('.filter').on('click', function(){
		$(this).next('div').fadeIn();
	});

	$('.filter-close').on('click', function(){
		$('.filter-list-wrap').fadeOut();
	});

	$('.filter-list-box .filter-list > li > a').on('click', function(){
		$(this).toggleClass('on');
	});

	mediaThumbHeight(); // 미디어 & 마케팅 썸네일 높이 // 20200211 수정
	subAosInit(); // 스크롤 애니메이션 // 20200211 추가

})(jQuery);


$(window).resize(function() {

	mediaThumbHeight(); // 미디어 & 마케팅 썸네일 높이 // 20200211 수정
	subAosInit(); // 스크롤 애니메이션 // 20200211 추가

});

	
// 미디어 & 마케팅 썸네일 높이
function mediaThumbHeight() {
	var thumbHeight = $('.gallery-list li .thumb_box img').height();
	$('.gallery-list li .thumb_box.video .dim').height(thumbHeight);
}


/* 20200211 추가 시작 */
// 스크롤 애니메이션
function subAosInit() {

	AOS.init({
		duration: 1000,
		//easing: 'ease-in-sine',
	});
}
/* 20200211 추가 끝 */


// 모달팝업
function modal_open(_target) {
	
	if (arguments.length == 0) return;

	var $ui = $(_target);
	var $h4 = $ui.find('h4');
	var $content = $ui.find('.modal-content');
	$ui.show().closest('.modal').show();
	//page_overflow("hidden");

	function modal_resize() {

		// 매장 사진 슬라이드	
		var storeSwiper = new Swiper('.swiper-container.store', {
			slidesPerView: 'auto',
			spaceBetween: 20,
	        nextButton: '.swiper-button-next.store',
	        prevButton: '.swiper-button-prev.store',
			breakpoints: {
		        999: {
		          spaceBetween: 12,
		        }
		    }
		});

		if (!$ui.is(':visible')) return;
		$content.css({ height:'' });
		if ($content.outerHeight() > $ui.height() - $h4.height()) $content.outerHeight($ui.height() - $h4.height());
		$ui.css({ marginTop:-$ui.height() / 2 });

	}
	modal_resize();

	//EventManager.save($ui, WINDOW_RESIZE, modal_resize);

}

function modal_close(_target) {

	if (arguments.length == 0) return;

	var $ui = $(_target);
	$ui.hide().closest('.modal').hide();
	//page_overflow("auto");

	//EventManager.remove($ui, WINDOW_RESIZE);

}
