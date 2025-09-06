$(function(){
	//이용안내 ERP매뉴얼
	$(".guide_scroll_expend>a").click(function(){
		$("#cont_box03").animate({"width":"1141px","padding":"0"},300,"easeInOutQuad")
		$(".guide_right").animate({"width":"373px"},300,"easeInOutQuad")
		$(".guide_left_top>dl.erp_notice03").animate({"left":"0"},300,"easeInOutQuad")
		$(".guide_left_top>dl.faq03").animate({"left":"378px"},300,"easeInOutQuad")
		$(".guide_right_manual").animate({"width":"295px"},300,"easeInOutQuad")
		$(".guide_scroll_expend").css("display","none")
		$(".guide_scroll_close").css("display","block")
	})

	$(".guide_scroll_close>a").click(function(){
		$("#cont_box03").animate({"width":"940px","padding":"0 100px 0 101px"},300,"easeInOutQuad")
		$(".guide_right").animate({"width":"184px"},300,"easeInOutQuad")
		$(".guide_left_top>dl.erp_notice03").animate({"left":"101px"},300,"easeInOutQuad")
		$(".guide_left_top>dl.faq03").animate({"left":"479px"},300,"easeInOutQuad")
		$(".guide_right_manual").animate({"width":"106px"},300,"easeInOutQuad")
		$(".guide_scroll_expend").css("display","block")
		$(".guide_scroll_close").css("display","none")
	})

	//메시지함 ERP공지사항
	$(".erp_notice01>.scroll01 .advice>a").click(function(){
		$(".erp_notice01").animate({"height":"361px"},300,"easeInOutQuad")	
		$(".erp_notice01>.scroll01").animate({"height":"373px"},300,"easeInOutQuad")
		$(".txt_list>ul.txt_list01>li").eq(2).removeClass("border_none")
		$("dl dd.scroll01 ul li.advice").hide()
		$("dl dd.scroll01 ul li.top01").hide()
		$("dl dd.scroll01 ul li.bottom01").hide()
		$("dl dd.scroll01 ul li.close01").show()
		$(".txt_list>ul.txt_list01").animate({"top":posY[0]},300)
		$(".txt_list").animate({"height":"309px"},300)
	})

	$(".erp_notice01>.scroll01 .close01>a").click(function(){
		$(".erp_notice01").animate({"height":"172px"},300)
		$(".erp_notice01>.scroll01").animate({"height":"184px"},300)
		$(".txt_list>ul.txt_list01>li").eq(2).addClass("border_none")
		$("dl dd.scroll01 ul li.advice").show()
		$("dl dd.scroll01 ul li.top01").show()
		$("dl dd.scroll01 ul li.bottom01").show()
		$("dl dd.scroll01 ul li.close01").hide()
	})

	var posY = [0,-45,-90,-135,-180]
	var cnt = 0
	$(".erp_notice01>.scroll01 .top01>a").click(function(){
		if(cnt > 0){
			cnt--
		}else{
			cnt = 4
		}
		$(".txt_list>ul.txt_list01").stop().animate({"top":posY[cnt]},300)
		$(".txt_list>ul.txt_list01>li").eq(2).removeClass("border_none")
	})

	$(".erp_notice01>.scroll01 .bottom01>a").click(function(){
		if(cnt < 4){
			cnt++	
		}else{
			cnt = 0
		}
		$(".txt_list>ul.txt_list01").stop().animate({"top":posY[cnt]},300)
		$(".txt_list>ul.txt_list01>li").eq(2).removeClass("border_none")
	})

	//메시지함 헬프데스크 FAQ
	$(".faq01>.scroll02 .advice>a").click(function(){
		$(".faq01").animate({"height":"361px"},300,"easeInOutQuad")	
		$(".faq01>.scroll02").animate({"height":"373px"},300,"easeInOutQuad")
		$(".txt_list>ul.txt_list02>li").eq(2).removeClass("border_none")
		$("dl dd.scroll02 ul li.advice").hide()
		$("dl dd.scroll02 ul li.top01").hide()
		$("dl dd.scroll02 ul li.bottom01").hide()
		$("dl dd.scroll02 ul li.close01").show()
		$(".txt_list>ul.txt_list02").animate({"top":posY[0]},300)
		$(".txt_list").animate({"height":"309px"},300)
	})

	$(".faq01>.scroll02 .close01>a").click(function(){
		$(".faq01").animate({"height":"172px"},300,"easeInOutQuad")	
		$(".faq01>.scroll02").animate({"height":"184px"},300,"easeInOutQuad")
		$(".txt_list>ul.txt_list02>li").eq(2).addClass("border_none")
		$("dl dd.scroll02 ul li.advice").show()
		$("dl dd.scroll02 ul li.top01").show()
		$("dl dd.scroll02 ul li.bottom01").show()
		$("dl dd.scroll02 ul li.close01").hide()
	})
	
	$(".faq01>.scroll02 .top01>a").click(function(){
		if(cnt > 0){
			cnt--
		}else{
			cnt = 4
		}
		$(".txt_list>ul.txt_list02").stop().animate({"top":posY[cnt]},300)
		$(".txt_list>ul.txt_list02>li").eq(2).removeClass("border_none")
	})

	$(".faq01>.scroll02 .bottom01>a").click(function(){
		if(cnt < 4){
			cnt++	
		}else{
			cnt = 0
		}
		$(".txt_list>ul.txt_list02").stop().animate({"top":posY[cnt]},300)
		$(".txt_list>ul.txt_list02>li").eq(2).removeClass("border_none")
	})

	//이용안내 Best Practice
	$(".erp_notice03>.scroll01 .advice>a").click(function(){
		$(".erp_notice03").animate({"height":"361px"},300,"easeInOutQuad")
		$(".erp_notice03>.scroll01").animate({"height":"373px"},300,"easeInOutQuad")
		$(".txt_list>ul.txt_list03>li").eq(2).removeClass("border_none")
		$("dl dd.scroll01 ul li.advice").hide()
		$("dl dd.scroll01 ul li.top01").hide()
		$("dl dd.scroll01 ul li.bottom01").hide()
		$("dl dd.scroll01 ul li.close01").show()
		$(".txt_list>ul.txt_list03").animate({"top":posY[0]},300)
		$(".txt_list").animate({"height":"309px"},300)
	})

	$(".erp_notice03>.scroll01 .close01>a").click(function(){
		$(".erp_notice03").animate({"height":"172px"},300,"easeInOutQuad")
		$(".erp_notice03>.scroll01").animate({"height":"184px"},300,"easeInOutQuad")
		$(".txt_list>ul.txt_list03>li").eq(2).addClass("border_none")
		$("dl dd.scroll01 ul li.advice").show()
		$("dl dd.scroll01 ul li.top01").show()
		$("dl dd.scroll01 ul li.bottom01").show()
		$("dl dd.scroll01 ul li.close01").hide()
	})
	
	$(".erp_notice03>.scroll01 .top01>a").click(function(){
		if(cnt > 0){
			cnt--
		}else{
			cnt = 4
		}
		$(".txt_list>ul.txt_list03").stop().animate({"top":posY[cnt]},300)
		$(".txt_list>ul.txt_list03>li").eq(2).removeClass("border_none")
	})

	$(".erp_notice03>.scroll01 .bottom01>a").click(function(){
		if(cnt < 4){
			cnt++	
		}else{
			cnt = 0
		}
		$(".txt_list>ul.txt_list03").stop().animate({"top":posY[cnt]},300)
		$(".txt_list>ul.txt_list03>li").eq(2).removeClass("border_none")
	})

	//헬프데스크 매뉴얼
	$(".faq03>.scroll03 .advice>a").click(function(){
		$(".faq03").animate({"height":"361px"},300,"easeInOutQuad")
		$(".faq03>.scroll03").animate({"height":"373px"},300,"easeInOutQuad")
		$(".txt_list>ul.txt_list04>li").eq(2).removeClass("border_none")
		$("dl dd.scroll03 ul li.advice").hide()
		$("dl dd.scroll03 ul li.top01").hide()
		$("dl dd.scroll03 ul li.bottom01").hide()
		$("dl dd.scroll03 ul li.close01").show()
		$(".txt_list>ul.txt_list04").animate({"top":posY[0]},300)
		$(".txt_list").animate({"height":"309px"},300)
	})

	$(".faq03>.scroll03 .close01>a").click(function(){
		$(".faq03").animate({"height":"172px"},300,"easeInOutQuad")
		$(".faq03>.scroll03").animate({"height":"184px"},300,"easeInOutQuad")
		$(".txt_list>ul.txt_list04>li").eq(2).addClass("border_none")
		$("dl dd.scroll03 ul li.advice").show()
		$("dl dd.scroll03 ul li.top01").show()
		$("dl dd.scroll03 ul li.bottom01").show()
		$("dl dd.scroll03 ul li.close01").hide()
	})
	
	$(".faq03>.scroll03 .top01>a").click(function(){
		if(cnt > 0){
			cnt--
		}else{
			cnt = 4
		}
		$(".txt_list>ul.txt_list04").stop().animate({"top":posY[cnt]},300)
		$(".txt_list>ul.txt_list04>li").eq(2).removeClass("border_none")
	})

	$(".faq03>.scroll03 .bottom01>a").click(function(){
		if(cnt < 4){
			cnt++	
		}else{
			cnt = 0
		}
		$(".txt_list>ul.txt_list04").stop().animate({"top":posY[cnt]},300)
		$(".txt_list>ul.txt_list04>li").eq(2).removeClass("border_none")
	})

	//메시지함 my help desk
	$(".txt04>a").click(function(){
		$(".mypage_hidden").animate({"width":"378px"},300,"easeInOutQuad")
		$("p.title01").show()
		$("p.close01").show()
		$(".mypage_hidden>p.btn01").show()
		$(".mypage_hidden>p.btn02").show()
		$(".mypage_hidden table").show()
	})

	$(".close01>a").click(function(){
		$(".mypage_hidden").animate({"width":"0"},300,"easeInOutQuad")
		$("p.title01").hide()
		$("p.close01").hide()
		$(".mypage_hidden>p.btn01").hide()
		$(".mypage_hidden>p.btn02").hide()
		$(".mypage_hidden table").hide()
	})

	//메시지함 패스워드 초기화
	$(".password_img>a").click(function(){
		$(".password_hidden").animate({"width":"378px"},300,"easeInOutQuad")
		$("p.title02").show()
		$("p.close02").show()
		$(".password_hidden>p.btn01").show()
		$(".password_hidden>p.btn02").show()
		$(".password_hidden table").show()
	})

	$(".close02>a").click(function(){
		$(".password_hidden").animate({"width":"0"},300,"easeInOutQuad")
		$("p.title02").hide()
		$("p.close02").hide()
		$(".password_hidden>p.btn01").hide()
		$(".password_hidden>p.btn02").hide()
		$(".password_hidden table").hide()
	})

	//메시지함 ERP권한신청
	$(".authority_img>a").click(function(){
		$(".authority_hidden").animate({"width":"567px"},300,"easeInOutQuad")
		$("p.title03").show()
		$("p.close03").show()
		$(".authority_hidden>table").show()
	})

	$(".close03>a").click(function(){
		$(".authority_hidden").animate({"width":"0"},300,"easeInOutQuad")
		$("p.title03").hide()
		$("p.close03").hide()
		$(".authority_hidden>table").hide()
	})
	
	
	var posX = [0,-1141,-2282]
	var num = 0

	//메인페이지 메뉴 클릭시 이동
	$("#cont_slide").css("width","3423px")
	$("#content").css("overflow","hidden")

	$("#h_box ul li>a").click(function(){
		num = $(this).parent().index()
		$("#cont_slide").stop().animate({left:posX[num]},400,"easeInOutQuad")
		$("#h_box ul li>a").removeClass("on")
		$(this).addClass("on")
		$(".paging_box>ul>li>a").removeClass("on")
		$(".paging_box>ul>li").eq(num).find("a").addClass("on")
	})
	//paging_box 클릭시 이동
	$(".paging_box>ul>li>a").click(function(){
		num = $(this).parent().index()
		$("#cont_slide").stop().animate({left:posX[num]},400,"easeInOutQuad")
		$("#h_box ul li>a").removeClass("on")
		$("#h_box ul li").eq(num).find("a").addClass("on")
		$(".paging_box>ul>li>a").removeClass("on")
		$(this).addClass("on")
	})
})
