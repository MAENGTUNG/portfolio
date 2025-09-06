(function($) {

	// 개인정보처리방침 스크롤바
	$('.tab-content-list-wrap.policy > li').mCustomScrollbar({
		theme:"minimal-dark"
	});

	// 상단으로 이동
	$(".information-advice > a").on("click", function(){
		$("body, html").animate({scrollTop:0}, 400);
	});

	asImage();
	informationScrollFixed();

})(jQuery);

$(window).resize(function() {
	
	asImage();

});


// 제조사 무상AS를 뛰어넘는 보장범위 pc, mobile 이미지 변경
function asImage() {
	var windowWidth = $( window ).width();
	if(windowWidth <= 999) {
		//창 가로 크기가 999이하 일 경우

		$('.as-img > img').attr('src', $('.as-img > img').attr('src').replace('pc','mobile'));

	} else {
		//창 가로 크기가 999보다 클 경우

		$('.as-img > img').attr('src', $('.as-img > img').attr('src').replace('mobile','pc'));

	}
}


// 중고차 수리보상 프로그램 통합 센터 스크롤 
function informationScrollFixed() {
	var scTop = $(window).scrollTop();
	var winHeight = $(window).height();
	var docHeight = $(document).height();
	var headerHeight = 10;

	if(scTop > headerHeight){
		$(".information-wrap").stop().show();
	} else {
		$(".information-wrap").stop().hide();
	}

	$(window).scroll(function(){
		var scTop = $(window).scrollTop();
		var winHeight = $(window).height();
		var docHeight = $(document).height();

		if(scTop > headerHeight){
			$(".information-wrap").stop().show();

			if(scTop == docHeight - winHeight){
				$(".information-wrap").stop().hide();
			}

		} else {
			$(".information-wrap").stop().hide();
		}
	});
}


// 모달팝업
function modal_open(_target) {

	if (arguments.length == 0) return;

	var $ui = $(_target);
	var $h5 = $ui.find("h5");
	var $content = $ui.find(".modal-content");
	$ui.show().closest(".modal").show();
	//page_overflow("hidden");

	function modal_resize() {

		if (!$ui.is(":visible")) return;
		$content.css({ height:"" });
		if ($content.outerHeight() > $ui.height() - $h5.height()) $content.outerHeight($ui.height() - $h5.height());
		$ui.css({ marginTop:-$ui.height() / 2 });

	}
	modal_resize();

	//EventManager.save($ui, WINDOW_RESIZE, modal_resize);

}

function modal_close(_target) {

	if (arguments.length == 0) return;

	var $ui = $(_target);
	$ui.hide().closest(".modal").hide();
	//page_overflow("auto");

	//EventManager.remove($ui, WINDOW_RESIZE);

}