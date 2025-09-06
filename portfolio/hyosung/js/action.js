$(function(){
	//메인 메뉴
	var num= 0
	$("#nav>li>ul").hide()
	$("#nav>li").hover(function(){
		num = $(this).index() 
		$("#nav>li>ul").eq(num).show()
		$("#nav>li>ul>li>a").hover(function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("out","ov"))
		},function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("ov","out"))
		})
	},function(){
		$("#nav>li>ul").eq(num).hide()
	})

	//공지사항, 최신글 tab
	function tabChange(n){
		var overImg = ".cont01_notice>dl>dt:eq(" + n +")>a>img";
		var overTxt = ".cont01_notice>dl>dd:eq(" + n +")";
		$(".cont01_notice>dl>dt>a>img").each(function(){
			$(this).attr('src',$(this).attr('src').replace('on','out'));
		});
		$(overImg).attr('src',$(overImg).attr('src').replace('out','on'));
		$(".cont01_notice>dl>dd").hide()
		$(overTxt).show();
	}
	$(".cont01_notice>dl>dt>a").each(function(index){
		$(this).bind('click',function(){
			tabChange(index);
		});
	});
	tabChange(0);

	//회사소식 이미지 롤링
	$(".cont01_news>p.arrow").css("opacity","0.25")
	$(".cont01_news>p.arrow").hover(function(){
		$(this).css("opacity","0.75")
	},function(){
		$(this).css("opacity","0.25")
	})
	
	var posX = [0,-251,-502,-753]
	var cnt = 0 , n = posX.length , first = "" , last = ""
	var isFinish = false;
	$(".cont01_news>p.next>a").click(function(){
		// 순서 중요!!!! 이 순서대로 해야지 막 안넘어감
		if(isFinish){
			return;
		}
		isFinish = true;
		$(".news_list>dl").stop().animate({"margin-left":"-251px"},400,"easeInOutQuad",function(){
			var first = $(".news_list>dl>dd").first();
			$(this).append(first).css("margin-left","0px");
			isFinish = false;
		});

		cnt++
		if(cnt == n){
			cnt = 0
		}

		make1();

		return false;

	})

	$(".cont01_news>p.prev>a").click(function(){
		// 순서 중요!!!! 이 순서대로 해야지 막 안넘어감
		if(isFinish){
			return;
		}
		isFinish = true;
		var last = $(".news_list>dl>dd").last();
		$(".news_list>dl").prepend(last).css("margin-left","-251px").stop().animate({"margin-left":"0px"},400,"easeInOutQuad",function(){
			isFinish = false;
		});

		cnt--
		if(cnt < 0){
			cnt = 3
		}

		make1();

		return false;

	})
	function make1() {
		//$(".news_list>dl").stop().animate({left:posX[cnt]},400)
		$(".cont01_news>ul>li").removeClass("on")
		$(".cont01_news>ul>li").eq(cnt).addClass("on")
	}






	//공지사항, 최신글 tab
	//var overImg = ".cont01_notice>dl>dt:eq(" + n +")>a>img";
	//$(".cont01_notice>dl>dd").hide()
	//$(".cont01_notice>dl>dd").first().show()
	//$(".cont01_notice>dl>dt>a").click(function(){
		//$(".cont01_notice>dl>dt>a>img").attr("src",$(".cont01_notice>dl>dt>a>img").attr("src").replace("out","on"))
		//$(overImg).attr('src',$(overImg).attr('src').replace('out','on.'))
		//$(this).find("img").attr('src',$(this).find("img").attr('src').replace('on','out'))
		//$(".cont01_notice>dl>dd").hide()
		//$(this).parent().next().show()
	//})
})
