/* CURRENTLY IN: javascript/main.js */


$(document).ready(function() {
	var animate = function(el) {
	    el.delay(100).animate({opacity:1, left:0},'slow'); 
	 
	    // $('.blogs').find('img').delay(2000).animate({
	    //         opacity: 1, 
	    //         right: 0
	    //     }, 'slow'
	    // );
	 
	    // $('.blogs').find('button').delay(2500).animate({
	    //         opacity: 1, 
	    //         bottom: 0
	    //     }, 'slow'
	    // );
	};
		var header = $('.header__title');
		/*
			a few notes;
				1. cache the window object! (var win = $(window) )
				2. cache the scrollTop obj ( var scrolLTop = win.scrollTop() )
				3. cache the window height ( var winHeight = win.height() )
		*/
   		$(window).scroll(function() {
   			// set the scrollTop variabl here
   		if ( $(window).scrollTop() <= $(window).height() ) {
   			header.css('opacity', 1 - $(window).scrollTop() / $(window).height() ); - 1.5
   		}
   		if ($(window).scrollTop() > 300) {
   			animate($('.portfolio__introduction').find('h3'));
   		}; 

   		if ($(window).scrollTop() > 500) {
   			animate($('.portfolio__introduction').find('p'));
   		}; 

   		if ($(window).scrollTop() > 700) {
   			animate($('.portfolio__title').find('h3'));
   		}; 

   		if ($(window).scrollTop() > 900) {
   			animate($('.portfolio__example--img1'));
   		};

   		if ($(window).scrollTop() > 1000) {
   			animate($('.portfolio__example--img1'));
   		};

   		if ($(window).scrollTop() > 1100) {
   			animate($('.portfolio__example--img2'));
   		};

   		if ($(window).scrollTop() > 1300) {
   			animate($('.portfolio__example--img3'));
   		};

   		if ($(window).scrollTop() > 1400) {
   			animate($('.portfolio__example--img4'));
   		};

   		if ($(window).scrollTop() > 1700) {
   			animate($('.footer__contact').find('h3'));
   		};

   		if ($(window).scrollTop() > 1800) {
   			animate($('.footer__contact').find('a'));
   		};

   		if ($(window).scrollTop() > 1900) {
   			animate($('.footer__social--links').find('li'));
   		};

		if ($(window).scrollTop() > 2000) {
   			animate($('.footer__social').find('p'));
   		};

   	});

});
