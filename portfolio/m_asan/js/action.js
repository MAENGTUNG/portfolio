$(function(){

	// gnb 메뉴 슬라이드
	var docHeight = $(document).height();
	var winHeight = $(window).height();
	var gnbT = false;

	$(".m_wrap_dim").height(winHeight);
	$("#gnb_box").height(winHeight);
	//$("#m_wrap_box").height(winHeight);
	//$("#m_wrap").height(winHeight);

	$(".m_wrap_dim").hide();
	$("#gnb_box").hide();

	fn_resize02();

	// resizeEnd trigger 연결
	$(window).resize(function() {
		if(this.resizeTO) {
			clearTimeout(this.resizeTO);
		}
		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		}, 100);
	});

	function fn_resize(){
		$(window).on('resizeEnd', function() {
			// 실행 코드 들어가는 곳
			if(gnbT == true){
				winHeight = $(window).height() - 0.01;
				$("#m_wrap_box").height(winHeight).css("overflow","hidden");
				//$(".flex_wrap>#m_wrap_box").height(winHeight).css("overflow","hidden")
				$(".m_wrap_dim").height(winHeight).css("opacity","0.7").fadeIn(400);

				//left menu
				$("#gnb_box").height(winHeight).css("overflow","hidden");
			}
		});
	}

	function fn_resize02(){
		$(window).on('resizeEnd', function() {
			// 실행 코드 들어가는 곳
			if(gnbT == false){
				winHeight = $(window).height() - 0.01;
				$(".flex_wrap>#m_wrap_box").height(winHeight).css("overflow","hidden")

				//left menu
				$("#gnb_box").height(winHeight).css("overflow","hidden");
			}
		});
	}

	

	$(".lnb_menu>a").click(function(){
		if(gnbT == false){

			fn_resize02();

			$("#m_wrap_box").height(winHeight).css("overflow","hidden");
			//$(".flex_wrap>#m_wrap_box").height(winHeight).css("overflow","hidden")
			$(".m_wrap_dim").height(winHeight).css("opacity","0.7").fadeIn(450);

			$("#gnb_box").show().stop().animate({"left":"0"},450,"easeOutQuad");
			$("#m_wrap").stop().animate({"left":"274px"},450,"easeOutQuad");
			$(".lnb_menu>a>img").attr("src",$(".lnb_menu>a>img").attr("src").replace("off","on"));

			gnbT = true;

		}else{
			$("#m_wrap_box").height(docHeight).css("overflow","hidden")
			$(".flex_wrap>#m_wrap_box").height(winHeight).css("overflow","hidden")
			$("#gnb_box").stop().animate({"left":"-274px"},450,"easeOutQuad").delay(450,function(){
				$(this).hide()
				$(".m_wrap_dim").fadeOut(450)
				$(".lnb_menu>a>img").attr("src",$(".lnb_menu>a>img").attr("src").replace("on","off"))
			})
			$("#m_wrap").stop().animate({"left":"0"},450,"easeOutQuad")
			

			gnbT = false;

		}

		fn_resize();
		
	})

	// gnb메뉴 클릭시 on 이미지로 교체
	var numG = 0, gnbImg = ""
	$(".gnb_list>li>a").click(function(){
		numG = $(this).parent().index()
		gnbImg = $(".gnb_list>li:eq("+numG+")>a> img")
		//gnbImg = ".gnb_list>li:eq("+numG+")>a> img"  - 위에꺼랑 똑같음
		$(".gnb_list>li").each(function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("on","off"))
		})
		$(gnbImg).attr("src",$(gnbImg).attr("src").replace("off","on"))
	})

	//이미지를 백그라운드로 넣었을때 (addClass)
	/*$(".gnb_list>li>a").click(function(){
		$(this).addClass("on")
		$(".gnb_list>li>a").not(this).removeClass("on")
	})*/


	//이미지를 백그라운드로 넣었을때 (toggleClass)
	/*$(".gnb_list>li>a").click(function(){
		$(this).toggleClass("on")
		$(".gnb_list>li>a").not(this).removeClass("on")
	})*/

})
