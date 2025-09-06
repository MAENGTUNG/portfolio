$(function(){
	var toggle = false
	$("#sub_cont_click>a").click(function(){
		if(toggle == false){
			$("#sub_cont_lnb").css("display","none")
			$("#sub_cont").css("width","952px")
			toggle = true
		}else{
			$("#sub_cont_lnb").css("display","block")
			$("#sub_cont").css("width","733px")
			toggle= false
		}
	})
	$(".sub_lnb>ul>li").click(function(){
		$(this).addClass("on")
		$(".sub_lnb>ul>li").not(this).removeClass("on")
	})

	$("#nav_ov").hide()
	$("#nav>li>a").next().hide()
	var gnbA = $("#nav>li>a")
	var sub = $("#nav>li>ul")
	gnbA.mouseenter(function(){
		sub.hide()
		$(this).next().show()
		$("#nav_ov").show()
	})
	$("#nav").mouseleave(function(){
		sub.hide()
		$("#nav_ov").hide()
	})
})