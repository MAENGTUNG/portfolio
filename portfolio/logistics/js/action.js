$(function(){
	$(".logistics_list>dl>dd").click(function(){
		$(this).addClass("on")
		$(".logistics_list>dl>dd").not(this).removeClass("on")
	})


	var num = 0;
	$(".logistics_list>dl>dd").click(function(){
		num=$(this).index()
	})

	// 타이틀에대한 for문
	for(var i=1; i<=6; i++){
		// "#tab_title0"+i번째 이름의 클릭 이벤트
		$("#tab_title0"+i).click(function(){
			// num(클릭인덱스)와 클릭컨텐츠 인덱스 구분위한 for문
			for(var j=1; j<=6; j++){
				if(j==num){
					$("#tab_cont0"+j).css("display","block")
				}else{
					$("#tab_cont0"+j).css("display","none")
				}
			}
		})
	}

	$(".logistics_list>dl>dd").index()

	$("#nav>ul>li>a").next().hide()
	var gnbA = $("#nav>ul>li>a")
	var sub = $("#nav>ul>li>ul")
	gnbA.mouseenter(function(){
		sub.hide()
		$(this).next().show()
	})
	$("#nav").mouseleave(function(){
		sub.hide()
	})
	$("#nav>ul>li>ul>li>ul>li").hover(function(){
		$(this).addClass("on")
	},function(){
		$(this).removeClass("on")
	})

	$(".sub_table .table dd").hide()
	$(".sub_table .table dd.down").show()
	$(".sub_table .table dd").first().show()
	$(".sub_table .table dt a").click(function(){
		$(".table dt a").removeClass("on")
		$(".sub_table .table dd").hide()
		$(".sub_table .table dd.down").show()
		
		$(this).addClass("on").parent().next().show()
	})

	$(".sub_lnb>ul>li ul").hide()
	$(".sub_lnb>ul>li").first().find("ul").show()
	$(".sub_lnb>ul>li>a").click(function(){
		$(".sub_lnb>ul>li").find("ul").hide()
		
		$(this).parent().find("ul").show()
	})
})
