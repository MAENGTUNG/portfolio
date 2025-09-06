$(function(){
	//
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
	$("#nav>ul>li>ul>li").hover(function(){
		$(this).addClass("on")
		$("#nav>ul>li>ul>li.hover_none").removeClass("on")
	},function(){
		$(this).removeClass("on")
	})

	//
	$(".content_box01>.tab dd").hide()
	$(".content_box01>.tab dd.more").show()
	$(".content_box01>.tab dd").first().show()
	$(".content_box01>.tab dt a").click(function(){
		$(".tab dt a").removeClass("on")
		$(".content_box01>.tab dd").hide()
		$(".content_box01>.tab dd.more").show()
		
		$(this).addClass("on").parent().next().show()
	})
})