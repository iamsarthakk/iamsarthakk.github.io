$( window ).scroll(function() {
	if($(window).scrollTop()>500){
  	$( ".my-navbar-light" ).css( "position", "fixed" );
		$( ".my-navbar-light" ).css( "background", "rgba(255,255,255)" );
		$( ".my-navbar-light" ).css( "box-shadow", "0 0 10px 0 rgb(0, 0, 0,0.1)" );
	}
	else{
		$( ".my-navbar-light" ).css( "position", "absolute" );
		$( ".my-navbar-light" ).css( "box-shadow", "0 0 10px 0 rgb(255, 255,255,0)" );
		$( ".my-navbar-light" ).css( "background", "transparent" );
	}
});



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

	$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
	});
});
