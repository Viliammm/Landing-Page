/* --- Language Selection Hiding --- */
// $(".lang").on("mouseenter", function(){
// 	$(".lang-hidden").removeClass("hide")
// });

// $(".lang").on("mouseleave", function(){
// 	$(".lang-hidden").addClass("hide")
// });

//  --- Navbar Selection Hiding --- 

// $(".nav").on("mouseenter", function(){
// 	$(".nav-hidden").removeClass("hide")
// });

// $(".nav").on("mouseleave", function(){
// 	$(".nav-hidden").addClass("hide")
// });




// $("body").on("click", function(){
// 	$(".lang-hidden").addClass("hide")
// });

$(".lang").on("mouseenter", function(){
	$(".lang-hidden").removeClass("hide")
});

$("body").on("mouseenter", function(){
	$(".lang-hidden").addClass("hide")
});


$(".nav").on("mouseenter", function(){
 	$(".nav-hidden").removeClass("hide")
});
