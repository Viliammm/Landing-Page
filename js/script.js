// NAV SLIDE

function arrowDown(){
	$(".arrow").text("▼")
};

function arrowUp(){
	$(".arrow").text("▲")
};

function navSlideDown(){
	$("#nav-who-am-i").slideDown("200");
	setTimeout(function(){$("#nav-my-work").slideDown("200")},200);
	setTimeout(function(){$("#nav-contact").slideDown("200", arrowUp()
		)}, 400);	
};

function navSlideUp(){
	$("#nav-contact").slideUp("200");
	setTimeout(function(){$("#nav-my-work").slideUp("200")}, 200);
	setTimeout(function(){$("#nav-who-am-i").slideUp("200", arrowDown()
		)}, 400);
};

function navSlide(){
	$(".header").on("click", '.nav-show', function(){
		navSlideDown();
		$(this).removeClass();
		$(this).addClass("nav-hide");
		}).on("click", '.nav-hide', function(){
		navSlideUp();
		$(this).removeClass();
		$(this).addClass("nav-show");
	});
};

navSlide();

// PAGE SLIDE

function scrollDown(){
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
};

function scrollUp(){
	$("#back-to-top").click(function() {
		$('html,body').animate({
			scrollTop: 0}, 750);
	});
};

scrollDown();
scrollUp();

// STARS FADEIN

function starsFadeIn(){
	$(".background").fadeIn(5000);
};

starsFadeIn();

//BTN ACTIVITY

// $(".btn").on("mouseenter",function(){
// 	$(this).addClass("btn-active");
// })

// $(".btn").on("mouseout",function(){
// 	$(this).removeClass("btn-active");
// })

$(".btn").bind("touchstart",function(){
	$(this).css("background-color","red");
	setTimeout(function(){
		$(this).css("background-color", "green")},
		1000);

})


alert("fuck");







