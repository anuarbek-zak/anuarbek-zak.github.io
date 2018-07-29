jQuery(function($) {'use strict',

	$('#year').text((new Date()).getFullYear());

	$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {
		
			$("#services").parallax("50%", 0.3);
			$("#promotion").parallax("50%", 0.3);
			$("#promotion-two").parallax("50%", 0.3);
			$("#testimonial").parallax("50%", 0.3);
		
	}	
	parallaxInit();	

	// Feature Tab Content
	$('.features-nav li').on('click',function(){'use strict',
		$('.features-nav li').removeClass('active');
		$(this).addClass('active');
	});
	$('#community-carousel ul.carousel-indicators li').on('click',function(){'use strict',
		$('.features-nav li').removeClass('active');
		var lists = $('.features-nav li');
		$(lists[$(this).index()]).addClass('active');
	});


	// Coummunity Carousel
	$('#community-carousel').carousel({
		interval: false
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});


	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a, .callback').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
		return false;
	});

});

//Preloder script
jQuery(window).load(function(){'use strict';
	$(".preloader").remove();

	// Slider Height
	var slideHeight = $(window).height();
	$('.image-slideshow, .image-slideshow li span').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('.image-slideshow, .image-slideshow li span').css('height',slideHeight);
	});
	
	var div 		= $('.image-slideshow li div'),
		divHeight 	= div.height(),
		winHeight 	= $(window).height(),
		divTop 		= (winHeight - divHeight)/2;
		div.css('top',divTop+'px');

});


// User define function
function Scroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.navbar-collapse').find('.scroll > a').each(function(){
		if($(this).attr('href').indexOf('tel')>-1) return;
		contentTop.push( $( $(this).attr('href') ).offset().top);
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop ){
			$('.navbar-collapse li.scroll')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	})

};

// Portfolio Single View

$('.price-list').click(function(){
	var selectedMetall = $(this).parent().prev().find('p').text().toLowerCase();
	$('#myModalLabel').text(selectedMetall)
	$('#myModal table tbody').hide().each(function(){
		if($(this).data('metall').toLowerCase()==selectedMetall) $(this).show();
	})
})

$('#portfolio').on('click','.folio-read-more',function(event){
	event.preventDefault();

	var link = $(this).data('single_url');
	var full_url = '#portfolio-single-wrap',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_top = $("#"+trgt).offset().top;

	$('html, body').animate({scrollTop:target_top}, 1200);
	$('#portfolio-single').slideUp(1000, function(){
		$(this).load(link,function(){
			$(this).slideDown(1000);
		});
	});
});

// Close Portfolio Single View
$('#portfolio-single-wrap').on('click','.close-folio-item',function(){
	var full_url = '#portfolio',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_offset = $("#"+trgt).offset(),
		target_top = target_offset.top;

	$('html, body').animate({scrollTop:target_top}, 1400);

	$("#portfolio-single").slideUp(1000);
});