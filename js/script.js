$(".lang").on("mouseenter", function(){
	$(".lang-hidden").removeClass("hide")
});

$(".container").on("mouseenter", function(){
	$(".lang-hidden").addClass("hide")
});


$(".nav").on("mouseenter", function(){
 	$(".nav-hidden").removeClass("hide")
});

$(".container").on("mouseenter", function(){
	$(".nav-hidden").addClass("hide")
});






/* SLIDE */


$("#nav-contact").click(function() {
    $('html, body').animate({ 
    	scrollTop: $("#contact").offset().top
    }, 1000);
});
