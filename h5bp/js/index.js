$(function(){
//	黑马下拉块
	$("#heiMa").mouseenter(function(){
		$("#heiMa_show").show();
		$("#heiMa_show").mouseenter(function(){
			$("#heiMa_show").show();
		})
	})
	$("#heiMa").mouseleave(function(){
		$("#heiMa_show").hide();
		$("#heiMa_show").mouseleave(function(){
			$("#heiMa_show").hide();
		})
	})
	
//============================================
//	查看更多
	$("#con_hide").hide();
	$("#look_more").click(function(){
		$("#con_hide").show();
	})

//=================================================================
    //轮播图
	$('.carousel').carousel({
	  interval: 2000
	})
	
//=======================================================
	//tab切换已落地城市
	$(".already_zi_hover>li").mouseenter(function(){
		$(this).addClass("already_selected").siblings("li").removeClass("already_selected");
		$(".already_img li").eq($(this).index()).addClass("already_img_show").siblings("li").removeClass("already_img_show");
	})
	
	//已落地城市蒙版
	$(".mengBan_row").find("div").css("opacity",0.7);
	$(".mengBan_row").find("div").mouseenter(function(){
		$(this).css("opacity",1).siblings("div").css("opacity",0.7);
	})
	$(".mengBan_row").mouseleave(function(){
		$(this).children("div").css("opacity",0.7);
	})
	
	//热点滚动的字
	$(document).ready(function(){
	     $("#scrollDiv").Scroll({line:1,speed:500,timer:2000});
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
