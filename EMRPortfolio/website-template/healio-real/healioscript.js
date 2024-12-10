$(document).ready(function(){

	var winHeight = $(window).height(); 
	var winWidth = $(window).width();
	
	$("#homebottles").css("margin-left", (winWidth / 6) + "px");
	$("#pjphoto").css("padding-left", ((winWidth / 2) - 98) + "px");
	
	$("#memoryLight").css("left", ((winWidth / 2) - 250) + "px");
	
	$("#myBottle").css("left", ((winWidth / 2) - 15) + "px");
	
	var ass = "butt";
	
	$("#myBottle").click(function(){
	
		$("#myBottle").css("display", "none");
	
		$("#yourBottle").css("display", "inline");
	
		$("#memoryLight").css("display", "none");
		
		$("body").css("background-image", "linear-gradient(to right, rgba(0,0,0, 1) 0 100%), url(images/virusBackground1.gif)");
		$("body").css("background-repeat", "no-repeat");
		$("body").css("background-size", "100% 100%");
		
		$("body").css("animation-name", "fadeIn");
		$("body").css("animation-duration", "10s");
		$("body").css("animation-direction", "alternate");
		$("body").css("animation-iteration-count", "infinite");
		
		$("#TheVirus").css("display", "inline");
		
		
	});
	
	
		
	$("#TheVirus").mouseenter(function(){
			
		
			
	});
	
});

$(window).resize(function() {
	
	var winHeight = $(window).height(); 
	var winWidth = $(window).width();
	
	$("#homebottles").css("margin-left", (winWidth / 6) + "px");
	
	$("#pjphoto").css("padding-left", ((winWidth / 2) - 98) + "px");
	
	$("#memoryLight").css("left", ((winWidth / 2) - 250) + "px");
	
	$("#myBottle").css("left", ((winWidth / 2) - 15) + "px");
});

$(document).mousemove(function(e){
    $("#yourBottle").css({left:e.pageX - 25, top:e.pageY - 50});
});

function showSignUp() {
	
	$("#subDetails").css("display", "block");
	$("#mascot").css("display", "none");
}