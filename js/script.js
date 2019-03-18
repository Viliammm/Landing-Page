// $(".lang").on("mouseenter", function(){
// 	$(".lang-hidden").removeClass("hide")
// });

// $("body").on("mouseenter", function(){
// 	$(".lang-hidden").addClass("hide")
// });


// $(".nav-btn").on("mouseenter", function(){
//  	$(".nav-hidden").removeClass("hide")
// });

// $("body").on("mouseenter", function(){
// 	$(".nav-hidden").addClass("hide")
// });


$(".nav-btn").on("mouseenter", function(){
 	$(".nav-hidden").toggleClass("hide")
});



/* SLIDE */


$("#nav-who-am-i").click(function() {
    $('html, body').animate({ 
    	scrollTop: $("#who-am-i").offset().top
    }, 1000);
});

$("#nav-my-work").click(function() {
    $('html, body').animate({ 
    	scrollTop: $("#my-work").offset().top
    }, 1000);
});

$("#nav-contact").click(function() {
    $('html, body').animate({ 
    	scrollTop: $("#contact").offset().top
    }, 1000);
});

