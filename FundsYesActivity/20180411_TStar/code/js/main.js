'use strict';

//Initial testimonial slider
$('#testimonials').bxSlider({
	mode: 'fade',
	auto: true,
	autoControls: true,
	controls: false
});

//carusel for clients
$('.client-slider').bxSlider({
	pager: false,
	minSlides: 1,
	maxSlides: 6,
	moveSlides: 2,
	slideWidth: 130,
	slideMargin: 25,
	prevSelector: $('#client-prev'),
	nextSelector: $('#client-next'),
	prevText: '<i class="fa fa-angle-double-left"></i>',
	nextText: '<i class="fa fa-angle-double-right"></i>'
});

$('.text-slider').bxSlider({
	pager: false,
	prevText: '<i class="fa fa-angle-left fa-3x"></i>',
	nextText: '<i class="fa fa-angle-right fa-3x"></i>'
	
});

//Efext on labels on contact form
$("input.label_better, textarea.label_better").label_better({
	animationTime: 500,
	easing: "bounce",
	offset: 0,
	hidePlaceholderOnFocus: true
});

$("#Grid").mixitup({});




function homeFullScreen() {

	var homeSection = $('.home');
	var windowHeight = $(window).outerHeight();

	if (homeSection.hasClass('home-fullscreen')) {

		$('.home-fullscreen').css('height', windowHeight);
	}
}

function stickyMenu() {

	var scrollTop = $(window).scrollTop();
	var offset = 0;

	if (scrollTop > offset) {
		$('#navbar').addClass('navbar-small');
	} else {
		$('#navbar').removeClass('navbar-small');
	}
}


function inviewAnimation() {

	$('.skills').bind('inview', function () {

		$('.skill').easyPieChart({
			size: 140,
			animate: 2000,
			lineWidth: 6,
			lineCap: 'square',
			barColor: '#ffe600',
			trackColor: '#ffffff',
			scaleColor: false
		});
	})

	$('.numbers').one('inview', function (event, visible) {

		if (visible === true) {

			$('.numbers .number').each(function () {
				var element = $(this);
				var duration = element.attr('data-duration');
				var count = element.attr('data-count')
				var id = element.attr('id');
				var numAnim = new countUp(id, 0, count, 0, duration);
				numAnim.start();

			})
		}

	})
	
	$('.heading > h1').one('inview', function(event, visible){
		$(this).addClass('animate fadeInRight');
	});
	
	$('.heading > div').one('inview', function(event, visible){
		$(this).addClass('animate fadeInLeft');
	});
	
	$('.process-item').one('inview', function(event, visible){
		$(this).addClass('animate fadeInLeft');
	});
	
	$('.service-item').one('inview', function(event, visible){
		$(this).addClass('animate');
	})
	
	$('.adress-element').one('inview', function(event, visible){
		$(this).addClass('animate fadeInUp');
	})
	
	$('.about-item').one('inview', function(event, visible){
		$(this).addClass('animate fadeInUp');
	})
}

function filterPath(string) {
	return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
}

function singlePageNav() {
	
	var lastId,
        topMenu = $(".navbar"),
        topMenuHeight = topMenu.outerHeight(),
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

	$('a[href*=#]').each(function () {
		if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
			var $targetId = $(this.hash),
				$targetAnchor = $('[name=' + this.hash.slice(1) + ']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;

			if ($target) {

				$(this).click(function () {

					//Hack collapse top navigation after clicking
					topMenu.parent().attr('style', 'height:0px').removeClass('in'); //Close navigation
					$('.navbar .btn-navbar').addClass('collapsed');

					var targetOffset = $target.offset().top - 52;
					$('html, body').animate({
						scrollTop: targetOffset
					}, 800);
					return false;
				});
			}
		}
	});
	
	// Bind to scroll
    $(window).scroll(function () {

        //Display or hide scroll to top button 
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
		
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight + 10;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#" + id + "]").parent().addClass("active");
        }
    });
}

function openProject() {

	var portfolioItem = $('.portfolio-item > a');
	var singleProject = $('#single-project');
	var loader = "<div class=\"project-loader\"><div class=\"bubblingG\"><span id=\"bubblingG_1\"></span><span id=\"bubblingG_2\"></span><span id=\"bubblingG_3\"></span></div>Loading...</div>";

	portfolioItem.click(function () {

		var link = $(this).attr('href');
		$('html, body').animate({
			scrollTop: singleProject.offset().top - 90
		}, 500);
		singleProject.slideUp(500).addClass("project");

		singleProject.after(loader);
		singleProject.empty();

		setTimeout(function () {
			singleProject.load(link, function (response, status) {
				if (status === "error") {
					alert("An error");
				} else {
					singleProject.slideDown(500);

					var closeProject = $('#close-project');
					closeProject.on('click', function () {
						singleProject.slideUp(500);
						setTimeout(function () {

							singleProject.empty();
						}, 500);
					});
				}
				$('.project-loader').remove();
			});
		}, 500);
		return false;
	});
}

//Initialization
openProject();
homeFullScreen();
inviewAnimation();
singlePageNav();


window.onload = function() {
	$('#wrapper').removeClass('loading');
	$('.loader').addClass('removing');
	setTimeout(function(){
		$('.loader').remove();
	}, 2000)

	dlInvestReport(); 
};
//What happen on window resize
$(window).resize(function () {
	homeFullScreen();
});

//What happen on window scroll	
$(window).on("scroll", function (e) {
	setTimeout(function () {
		stickyMenu();
	}, 300)
});


/**
 * 2018.04.11 kevin
 */
var isVaildEmail = false;
var isJob = false;
var isAgree = false;

function fundAnimation(e) {
	if (window.innerWidth >= "767") {
		$(".fund-block").css("padding-top", "80px");
		$(".fund-block img").css("width", "240px");
		$("#" + e.id + " img").css("width", "320px");
		$("#" + e.id).css("padding-top", "0px").css("z-index", "1500");
		$("#fund-4").css("padding-left", "3%");
		$("#fund-5").css("padding-left", "4%");
	}
	else {
		$("#" + e.id + " img").css("width", "70%");
	}
}

function normalImg() {
	if (window.innerWidth >= "767") {
		$(".fund-block:nth-child(1), .fund-block:nth-child(5)").css("padding-top", "100px").css("z-index", "100");
		$(".fund-block:nth-child(2), .fund-block:nth-child(4)").css("padding-top", "60px").css("z-index", "500");
		$(".fund-block:nth-child(3)").css("padding-top", "20px").css("z-index", "1000").css("margin-left", "20px");

		$(".fund-block:nth-child(1) img, .fund-block:nth-child(5) img").css("width", "220px");
		$(".fund-block:nth-child(2) img, .fund-block:nth-child(4) img").css("width", "260px");
		$(".fund-block:nth-child(3) img").css("width", "300px");
		$("#fund-4").css("padding-left", "6%");
		$("#fund-5").css("padding-left", "8%");
	}
	else {
		$(".fund-block img").css("width", "60%");
	}
}

function dlInvestReport() {
	isVaildEmail = !validateEmail($("#dl_email").val());
	isJob = !($("#dl_job").val() != 0 ? true : false);
	isAgree = !$("#dl_agree").is(':checked');

	if (isVaildEmail || isJob || isAgree) {
		$("#GetPersonData").show();
		$("#GetFile").hide();
	}
	else {
		$("#GetPersonData").hide();
		$("#GetFile").show();
	}
	return;

	$.ajax({
		url: 'http://192.168.5.1/launch/TStar/test.pdf',
		method: 'GET',
		xhrFields: {
			responseType: 'blob'
		},
		success: function (data) {
			var a = document.createElement('a');
			var url = window.URL.createObjectURL(data);
			a.href = url;
			a.download = 'test.pdf';
			a.click();
			window.URL.revokeObjectURL(url);
		},
		failure: function(e) {
			console.log(e);
		}
	});
}

function checkData() {
	if (isJob) {
		alert("請選擇職業");
		return;
	}
	if (isVaildEmail) {
		alert("請填寫正確的 E-mail 格式");
		return;
	}
	if (isAgree) {
		alert('請勾選 "我已詳細閱讀並同意接受鉅亨網投顧個人資料行銷暨告知同意規範"');
		return;
	}
}

function sendData() {

	var jsonData = {
		ActionNo: "tstar888",
		Email: $("#dl_email").val(),
		Ext1: $("#dl_job").val()
	}

	$.ajax({
		type: 'post',
		contentType: "application/json; charset=utf-8",
		url: "/PubAjaxFunc.aspx/AddActiveCustInfo",
		data: "{'jdata': '" + JSON.stringify(jsonData) + "'}",
		dataType: "json",
		success: function (Result) {
			// $("#<%=lblMsg.ClientID%>").text(Result.d);
			//alert("謝謝申請開戶，您的資料我們已收到，客服人員將儘速與您聯絡！若有任何問題，請來電: (02)27208126");
			//ResetData();
		},
		error: function (Result) {
			// $("#<%=lblMsg.ClientID%>").text(Result.d);
		}
	});
}

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}
	

