$(document).ready(function(){

	/**▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣**/
	/**
	 * @Document     : pg_top
	**/
	/**▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣**/
	$(document).scroll(function(){
		if ( $(document).scrollTop() > $('#nav').scrollTop() ){		
			$('.pg_top').css('display','block');				
		}
		else{	
			$('.pg_top').css('display','none');	
		}
	});	

	$(".pg_top > a").on("click", function(){

		$("body, html").stop().animate({scrollTop:0},400);

	});

});

/**▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣**/
/**
 * @Document     : 
**/
/**▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣**/
function fnMove(seq) {
	var offset = $("#PCSV_" + seq ).offset();
	$('html, body').animate({scrollTop : offset.top}, 400);

	$("#PCSV_"+seq ).find("ul > li:first > .info_box > a:first").focus();
}