$(function(){
	var isPlay = false
	$("#content>.cont_btn>a").click(function(){
		if(isPlay == false){
			$(".cont_txt").css("display","block")
			$(this).find("img").attr("src","image/cont_btn_close.gif")
			isPlay = true
		}else{
			$(".cont_txt").css("display","none")
			$(this).find("img").attr("src","image/cont_btn_open.gif")
			isPlay = false
		}
	})
})