$(function(){

	// 스크롤시 메뉴 상단 고정
	var menupos = $(".header_bottom").offset().top; 
    $(window).scroll(function(){ 
	   if($(window).scrollTop() >= menupos) { 
			$(".header_bottom").css({"position":"fixed","top":"-1px","z-index":"1000"});
		} else { 
			$(".header_bottom").css({"position":"relative","top":""});
		} 
	});
	
	// 메뉴 부분
	$(".menu_list>li>ul").hide();
	$(".nav_2depth_bg").hide();
	$(".menu_list>li").mouseenter(function(){
		$(".menu_list>li>ul").show();
		$(".nav_2depth_bg").show();
	})
	$(".header_bottom").mouseleave(function(){
		$(".menu_list>li>ul").hide();
		$(".nav_2depth_bg").hide();
	})
	//$(document).not(".menu_list").css("cursor","none")

	
	//menu_all 부분
	var winHeight = $(window).height();
	var winHeight2 = winHeight;
	var docHeight = $(document).height();
	var lnbT = false;

	$(".wrap_dim").height(winHeight-137).css("opacity","0.7").fadeIn(400).hide();
	$("#menu_all_box").height(winHeight-137);
	$(".menu_all>a").click(function(){
		if(lnbT == false){
			$("#wrap").height(winHeight).css("overflow","hidden");
			$(".wrap_dim").height(winHeight-137).css("opacity","0.7").fadeIn(400);
			$("#menu_all_box").height(winHeight-138).stop().animate({"left":"0"},400);
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("all.png","all_close.png"));

			lnbT = true;

			$(window).resize(function() {
				if(this.resizeTO) {
					clearTimeout(this.resizeTO);
				}
				this.resizeTO = setTimeout(function() {
					$(this).trigger('resizeEnd');
				}, 100);
			});


			$(window).on('resizeEnd', function() {
				// 실행 코드 들어가는 곳
				//var win_Height = $(window).height() - 0.01;
				//$("#wrap").height(win_Height).css("overflow","hidden");
				//$("#content").height(win_Height).css("overflow","hidden");
				//$(".wrap_dim").height(win_Height-137).css("opacity","0.7").fadeIn(400);
				//$("#menu_all_box").height(win_Height-137);
				//$(".all_tab_lnb_box>div").height(win_Height-217);
				winHeight2 = $(window).height() - 0.01;
				//alert(winHeight+"/"+winHeight2);
				if(winHeight > winHeight2){
					$("#wrap").height(winHeight).css("overflow","hidden");
					$("#content").height(winHeight).css("overflow","hidden");
					$(".wrap_dim").height(winHeight-137).css("opacity","0.7").fadeIn(400);
					$("#menu_all_box").height(winHeight-137);
					$(".all_tab_lnb_box>div").height(winHeight-217);
				}else{
					$("#wrap").height(winHeight2).css("overflow","hidden");
					$("#content").height(winHeight2).css("overflow","hidden");
					$(".wrap_dim").height(winHeight2-137).css("opacity","0.7").fadeIn(400);
					$("#menu_all_box").height(winHeight2-137);
					$(".all_tab_lnb_box>div").height(winHeight2-217);
				}
			});


		}else{
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("all_close.png","all.png"));
			$("#menu_all_box").height(winHeight-138).stop().animate({"left":"-300px"},400).delay(400,function(){
				$(".wrap_dim").fadeOut(400);
				$("#wrap").height(docHeight).css("overflow","hidden");
			})

			lnbT = false;
		}
	})

		
	


	//menu_all_tab 부분
	var tabN = 0;
	var tabLnb = "", tabImg = "", tabTit = "";
	$(".all_tab_lnb_box").height(winHeight-218);
	$(".all_tab_lnb_box>div").height(winHeight-218);
	$(".all_tab_lnb_box>div").hide();
	$(".all_tab_lnb_box>div").first().show();
	$(".menu_all_tab_list>li>a").click(function(){

		tabN = $(this).parent().index();
		tabLnb = $(".all_tab_lnb_box>div").eq(tabN);
		tabImg = $(".menu_all_tab_list>li:eq("+tabN+")>a>span> img");
		tabTit = $(".menu_all_tab_list>li>a").eq(tabN);

		$(".menu_all_tab_list>li").each(function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("on","off"));
		});
		$(tabImg).attr("src",$(tabImg).attr("src").replace("off","on"));

		$(".menu_all_tab_list>li>a").addClass("on");
		$(".all_tab_lnb_box>div").eq(tabN).show();
		$(".menu_all_tab_list>li>a").not(tabTit).removeClass("on");
		$(".all_tab_lnb_box>div").not(tabLnb).hide();
	})

	//menu_all 1depth 부분
	var depth1N = 0;
	var depth1Img = "";
	var depth2P = ["0", "-179", "-430", "-717", "-932"];
	$(".all_menu_1depth>li>a").click(function(){

		depth1N = $(this).parent().index();
		depth1Img = $(".all_menu_1depth>li:eq("+depth1N+")>a>span> img");

		$(this).addClass("on");
		$(".all_menu_1depth>li>a").not(this).removeClass("on");
		
		$(".all_menu_1depth>li>a").each(function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("on","off"));
		});
		$(depth1Img).attr("src",$(depth1Img).attr("src").replace("off","on"));

		$(".all_menu_2depth_box").stop().animate({"margin-top":depth2P[depth1N]},300,"easeInQuad");
	});
	
			
	//비주얼 롤링 부분
	var num1 = 0 , timerID = 0 , delay = 4000;
	$(".main_visual_box>div").hide();
	$(".main_visual_box>div").first().show();

	timerID = setInterval(rollingV1,delay);
	
	function rollingV1(){
		num1++;
		if(num1>3){
			num1 = 0;
		}
		rollingV2();
	}

	function rollingV2(){
		$(".main_visual_box>div").fadeOut();
		$(".main_visual_box>div").eq(num1).fadeIn();
		$(".visual_rolling_btn>li>a").removeClass("on");
		$(".visual_rolling_btn>li>a").eq(num1).addClass("on");
	}

	var btnPlay = false;
	$(".visual_rolling_btn>li>a").click(function(){
		num1 = $(this).parent().index();
		rollingV2();
		clearInterval(timerID);
		timerID = setInterval(rollingV1,delay);
		$(".visual_rolling_btn>li>span").removeClass("on");
		btnPlay = false;
		return false;
	})
	
	// 비주얼 롤링 일시정지 부분
	$(".visual_rolling_btn>li>span").click(function(){

		$(this).toggleClass("on");

		if(btnPlay == false){
			clearInterval(timerID);
			//$(this).addClass("on")
			btnPlay = true;
		}else{
			timerID = setInterval(rollingV1,delay);
			btnPlay = false;
			//$(this).removeClass("on")
		}
	});
	
	// 스크롤 배너 부분
	var posX = [0,0,-318,-636];
	var posXbar = [0,0,305,610];
	var cnt = 1;
	var n = posX.length;
	$(".scroll_banner_bar>div").text("P."+cnt);
	$(".banner_next>a").click(function(){
		cnt++;
		$(".scroll_banner").stop().animate({left:posX[cnt]},300,"easeInOutQuad");
		$(".scroll_banner_bar>div").stop().animate({left:posXbar[cnt]},300,"easeInOutQuad");
		$(".scroll_banner_bar>div").text("P."+cnt);
		if(cnt == 4){
			cnt = 1;
			$(".scroll_banner").stop().animate({left:posX[0]},300,"easeInOutQuad");
			$(".scroll_banner_bar>div").stop().animate({left:posXbar[0]},300,"easeInOutQuad");
			$(".scroll_banner_bar>div").text("P."+cnt);
		}
		return false;
	})
	
	$(".banner_prev>a").click(function(){
		cnt--;
		$(".scroll_banner").stop().animate({left:posX[cnt]},300,"easeInOutQuad");
		$(".scroll_banner_bar>div").stop().animate({left:posXbar[cnt]},300,"easeInOutQuad");
		$(".scroll_banner_bar>div").text("P."+cnt);
		if(cnt < 1){
			cnt = 3;
			$(".scroll_banner").stop().animate({left:posX[3]},300,"easeInOutQuad");
			$(".scroll_banner_bar>div").stop().animate({left:posXbar[3]},300,"easeInOutQuad");
			$(".scroll_banner_bar>div").text("P."+cnt);
		}
		return false;
	})

	//달력 부분
	var numC = 2 // 달력 갯수가 늘어나면 여기 수정해주면 됨
	$(".calendar_month_list>li").hide();
	$(".calendar_month_list>li").eq(numC).show();
	$(".calendar_date").hide();
	$(".calendar_date").eq(numC).show();
	$(".c_next_btn>a").click(function(){

		numC++;
		rollingC();
		
		if(numC == 4){ // 달력 갯수가 늘어나면 여기 수정해주면 됨
			numC = 0;
			rollingC();
		}
		return false;

	})
	$(".c_prev_btn>a").click(function(){

		numC--;
		rollingC();

		if(numC < 0){
			numC = 3; // 달력 갯수가 늘어나면 여기 수정해주면 됨
			rollingC();
		}
		return false;

	})
	
	function rollingC(){
		$(".calendar_month_list>li").hide();
		$(".calendar_month_list>li").eq(numC).show();
		$(".calendar_date").hide();
		$(".calendar_date").eq(numC).show();
	}

	$(".calendar_txt>p").hide();
	$(".calendar_date td>a").hover(function(){
		$(".calendar_txt>p").show();
	},function(){
		$(".calendar_txt>p").hide();
	})

	//공지사항 부분
	var numN = 0;
	$(".main_notice>dl").hide();
	$(".main_notice>dl").first().show();
	$(".notice_next").click(function(){
		numN++;
		$(".main_notice>dl").hide();
		$(".main_notice>dl").eq(numN).show();
		if(numN == 5){
			numN = 0;
			$(".main_notice>dl").hide();
			$(".main_notice>dl").eq(numN).show();
		}
		return false;
	})
	$(".notice_prev").click(function(){
		numN--;
		$(".main_notice>dl").hide();
		$(".main_notice>dl").eq(numN).show();
		if(numN < 0){
			numN = 4;
			$(".main_notice>dl").hide();
			$(".main_notice>dl").eq(numN).show();
		}
		return false;
	})

	//롤링 배너 부분
	var num2 = 0 , bannerT = 0 , delayB = 4000;
	$(".rolling_banner>li").hide();
	$(".rolling_banner>li").first().show();

	bannerT = setInterval(rollingB1,delayB);

	function rollingB1(){
		num2++;
		if(num2>4){
			num2 = 0;
		}
		$(".rolling_banner>li").fadeOut();
		$(".rolling_banner>li").eq(num2).fadeIn();
	}

	//하단메뉴 부분
	var numF = 0
	$(".footer_menu>li>a").click(function(){
		numF = $(this).parent().index();
		var toggleI = $(this);
		var toggleT = $("#footer>div").eq(numF);
		toggleI.toggleClass("on");
		$(".footer_menu>li>a").not(toggleI).removeClass("on");
		toggleT.toggleClass("on");
		$("#footer>div").not(toggleT).removeClass("on");
		var docHeight2 = $(document).height();
		//$("#wrap").height(docHeight2).css("overflow","hidden")
		alert(docHeight2);
	});
	
})
