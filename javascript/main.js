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

   	$(window).scroll(function() {
   		if ($(window).scrollTop() > 400) {
   			animate($('.portfolio__introduction').find('p'));
   		}; 

   		if ($(window).scrollTop() > 500) {
   			animate($('.portfolio__title').find('h3'));
   		}; 

   		if ($(window).scrollTop() > 700) {
   			animate($('.portfolio__example--img1'));
   		};

   		if ($(window).scrollTop() > 800) {
   			animate($('.portfolio__example--img2'));
   		};

   		if ($(window).scrollTop() > 900) {
   			animate($('.portfolio__example--img3'));
   		};

   		if ($(window).scrollTop() > 1000) {
   			animate($('.portfolio__example--img4'));
   		};

   		if ($(window).scrollTop() > 1200) {
   			animate($('.footer__contact').find('h5'));
   		};

   	});




   	
	// if ($(window).width() <= 549) {
	//     if ($(window).scrollTop() > 3500) {
	//         thirdAnimation();
	//     }
	// } else if ($(window).width() > 549 && $(window).width() <= 991) {
	//     if ($(window).scrollTop() > 2200) {
	//         thirdAnimation();
	//     }
	// } else {
	//     if ($(window).scrollTop() > 1600) {
	//         thirdAnimation();
	//     }
	// }
   


});
