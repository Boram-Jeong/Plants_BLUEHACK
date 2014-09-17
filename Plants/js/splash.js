jQuery(document).ready(function(){
	setTimeout(function(){
		 $("body").css("display", "none");
		 $("body").fadeIn(500);
		 $("body").fadeOut(500);
		window.location.href = "../index.html";
		//$("body").fadeOut(1000);
    }, 2000);  
});