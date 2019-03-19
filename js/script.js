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






$(document.body).on("mouseenter", '.nav-show', function(){
	$("#nav-who-am-i").slideDown("250");
 	setTimeout(function(){$("#nav-my-work").slideDown("250")},250);
 	setTimeout(function(){$("#nav-contact").slideDown("250", function(){
 		$(".arrow").text("▲")
 		})},500);
 	$(this).removeClass();
 	$(this).addClass("nav-hide");
}).on("mouseenter", '.nav-hide', function(){
	console.log("hide clicked")
	$("#nav-contact").slideUp("250");
	setTimeout(function(){$("#nav-my-work").slideUp("250")}, 250);
	setTimeout(function(){$("#nav-who-am-i").slideUp("250", function(){
		$(".arrow").text("▼")
	})}, 500);
	$(this).removeClass();
	$(this).addClass("nav-show");
});


/* SLIDE */


$("#nav-who-am-i").click(function() {
    $('html, body').animate({ 
    	scrollTop: $("#who-am-i").offset().top
    }, 750);
});

$("#nav-my-work").click(function() {
    $('html, body').animate({ 
    	scrollTop: $("#my-work").offset().top
    }, 750);
});

$("#nav-contact").click(function() {
    $('html, body').animate({ 
    	scrollTop: $("#contact").offset().top
    }, 750);
});

