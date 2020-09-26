 // $.Scrollax();

var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

// var imgHeight = 360;
// var imgwidth = 192, imgheight=144;
// var numImgs = 7;
// var i=0,j=0;
// var cont = 0;
// var img = $('#container').find('img');
//
// var animation = setInterval( moveSprite,100);

// function moveSprite(){
//     // img.css('margin-top', -1 * (cont*imgHeight));
//     if(j%3){
//       img.css('margin-left', -1 * (i*imgwdth));
//       j=0;
//       i=i+1;
//     }
//     else {
//       img.css('margin-top', -1 * (j*imgheight));
//       j=j+1;
//       i=i+1;
//     }
//     if(i == numImgs){
//         i=0;
//         j=0;
//     }
// }
