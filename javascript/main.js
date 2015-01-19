/* CURRENTLY IN: javascript/main.js */


$(document).ready(function() {
	var animate = function(el) {
	    el.delay(200).animate({opacity:1, left:0},'slow'); 
	 
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
   			animate($('.wrapper').find('p'));
   		}
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
