$(document).ready(function () {
	$('.nav-small').click(function(){
		// alert("khalid");
		$(".nav-small-show-container").show("slow");
		$(this).hide();
	});
	$('.nav-small-show').click(function(){
		// alert("khalid");
		$(".nav-small-show-container").hide("slow");
		$('.nav-small').show();
	});
	// $(".nav-small-show-container").mouseover(function(){
	// 	$(this).addClass("btn-outline-primary");
	// });
});


function resizeEvent(){
	if(window.outerWidth<900){
		$("nav-small").show();
		$("nav").hide();
		$(".home-banner").css("margin-top","0px");
		$(".home-banner").css("height","450px");
	}else{
		$("nav").show();
		$("nav-small").hide();
		$(".nav-small-show-container").hide();
		$(".home-banner").css("margin-top","70px");
		$(".home-banner").css("height","550px");
	}






}
