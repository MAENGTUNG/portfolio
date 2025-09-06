(function($) {

	$('.tab-content-list-wrap.sub > li').hide(); // 20200409 수정
	$('.tab-content-list-wrap.sub > li').first().show(); // 20200409 수정


	/* 20200409 추가 시작 */
	// 개인정보처리방침, 단체규약 Tab 메뉴
	$('.tab-content-list-wrap.policy > li').hide();
	$('.tab-content-list-wrap.policy > li').first().show();

	$('.tab-title-list-box.policy > li > a').on('click', function(){

		$('.tab-title-list-box.policy > li > a').not($(this).addClass('on')).removeClass('on');

		var tabIndex = $(this).parent('li').index();
		$('.tab-content-list-wrap.policy > li').hide();
		$('.tab-content-list-wrap.policy > li').eq(tabIndex).show();

	});

	// 개인정보처리방침, 단체규약 스크롤바
	$('.tab-content-list-wrap.policy > li').mCustomScrollbar({
		theme:"minimal-dark"
	});
	/* 20200409 추가 끝 */


	checkedTab();
	insurance05VisualHeight();

})(jQuery);

$(window).resize(function() {

	checkedTab();
	insurance05VisualHeight();

});

// 터미닉스 해충방제 높이
function insurance05VisualHeight() {
	var insurance05VisualWidth = $('.sub-visual-list-wrap.type04 > li').width();
	$('.sub-visual-list-wrap.type04 > li > dl').css({'height' : insurance05VisualWidth});
}

function checkedTab() {

	var windowWidth = $( window ).width();
	if(windowWidth <= 999) {
		//창 가로 크기가 999이하 일 경우

		$('.tab-title-list-box.pc li a').each(function(index, item){
			if($(this).hasClass('on') == true){
				$('.tab-title-list-box.mobile > dt > a').text($(this).html());
				
				var tabIndex = $(this).parent('li').index();
				$('.tab-content-list-wrap.sub > li').hide(); // 20200409 수정
				$('.tab-content-list-wrap.sub > li').eq(tabIndex).show(); // 20200409 수정
				
			}
		});

		// Tab Mobile 드롭다운 메뉴
		$('.tab-title-list-box.mobile > dd a').on('click', function(){
			var tabTitleText = $(this).html();
			$('.tab-title-list-box.mobile > dt > a').html(tabTitleText);
			$('.tab-title-list-box.mobile > dt > a').removeClass('on');
			$('.tab-title-list-box.mobile > dd').stop().slideUp();
		
			inverterMoreToggle = false;
		});

		$('.tab-title-list-box.mobile > dd a').on('click', function(){
			var tabIndex = $(this).parent('li').index();
			$('.tab-content-list-wrap.sub > li').hide(); // 20200409 수정
			$('.tab-content-list-wrap.sub > li').eq(tabIndex).show(); // 20200409 수정
		});

		var inverterMoreToggle = false;
		$('.tab-title-list-box.mobile > dt > a').on('click', function(){

			if(inverterMoreToggle == false){
				$(this).addClass('on');
				$('.tab-title-list-box.mobile > dd').stop().slideDown();

				inverterMoreToggle = true;
			}else{
				$(this).removeClass('on');
				$('.tab-title-list-box.mobile > dd').stop().slideUp();

				inverterMoreToggle = false;
			}

		});

	} else {
		//창 가로 크기가 999보다 클 경우

		$('.tab-title-list-box.pc > li > a').each(function(index, item){

			if($(this).html() == $('.tab-title-list-box.mobile > dt > a').html()){

				$('.tab-title-list-box.pc > li > a').removeClass('on');
				$(this).addClass('on');
				
				var tabIndex = $(this).parent('li').index();
				$('.tab-content-list-wrap.sub > li').hide(); // 20200409 수정
				$('.tab-content-list-wrap.sub > li').eq(tabIndex).show(); // 20200409 수정
				
			}
		});

		// Tab PC 메뉴
		$('.tab-title-list-box.pc > li > a').on('click', function(){

			$('.tab-title-list-box.pc > li > a').not($(this).addClass('on')).removeClass('on');

			var tabIndex = $(this).parent('li').index();
			$('.tab-content-list-wrap.sub > li').hide(); // 20200409 수정
			$('.tab-content-list-wrap.sub > li').eq(tabIndex).show(); // 20200409 수정

		});

	}
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