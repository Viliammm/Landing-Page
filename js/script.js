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


$(".nav-btn").on("click", function(){
 	$("#nav-who-am-i").slideDown("333");
 	setTimeout(function(){$("#nav-my-work").slideDown("333")},333);
 	setTimeout(function(){$("#nav-contact").slideDown("333", function(){
 		$(".arrow").text("▲")
 		})},666);
});

$(".nav-btn").on("click", function(){
	$("#nav-contact").slideUp("333");
	setTimeout(function(){$("#nav-my-work").slideUp("333")}, 333);
	setTimeout(function(){$("#nav-who-am-i").slideUp("333")}, 666);
})

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

