// NAV SLIDE

function arrowUp(){
	$(".arrow").text("▲")
};

function arrowDown(){
	$(".arrow").text("▼")
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

$(".header").on("click", '.nav-show', function(){
	navSlideDown();
	$(this).removeClass();
	$(this).addClass("nav-hide");
	}).on("click", '.nav-hide', function(){
	navSlideUp();
	$(this).removeClass();
	$(this).addClass("nav-show");
});


// PAGE SLIDE


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

$("#back-to-top").click(function() {
	$('html,body').animate({
		scrollTop: 0}, 750);
});

