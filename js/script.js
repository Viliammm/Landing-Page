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


$("#nav-who-am-i").click(function() {
    $('html, body, .container').animate({ 
    	scrollTop: $("#who-am-i").offset().top
    }, 1000);
});

$("#nav-my-work").click(function() {
    $('html, body, .container').animate({ 
    	scrollTop: $("#my-work").offset().top
    }, 1000);
});

$("#nav-contact").click(function() {
    $('html, body, .container').animate({ 
    	scrollTop: $("#contact").offset().top
    }, 1000);
});

