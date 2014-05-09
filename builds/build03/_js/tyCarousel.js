//var totalItems = $(".jcarousel-control a").length;
var totalItems = 5;
var actindex;

function mycarousel_initCallback(carousel) {
	
    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
    
    jQuery('.jcarousel-control').hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
	
    jQuery('.jcarousel-control a').bind('click', function() {
		
		var newSlideNum = jQuery.jcarousel.intval(jQuery(this).index() + 1);  // + 1 because slides do not use 0 index
        carousel.scroll(newSlideNum);
		/*setShareText(newSlideNum);*/
        return false;
    });

    jQuery('.tyCarousel-next').bind('click', function(event) {
									
		event.preventDefault();
        carousel.next();
        return false;
    });
    
	jQuery('.carousel_slide01_body_button').each(function(index) {
		
		$(this).bind('click', function() {
		
			carousel.scroll(index + 2); // + 2 slides do not use 0 index
			return false;
		});
		
	 });
	
	jQuery('.carousel_header_logo').bind('click', function(event) {
									
		event.preventDefault();
        carousel.scroll(1);
        return false;
    });

};

function highlight(carousel,objectli,liindex,listate){
	  actindex = liindex % totalItems; // calculate which item this corresponds to after first scroll
	  if (actindex == 0) {
		  
		actindex = totalItems;
	  }
	  jQuery('.jcarousel-control a').removeClass("active");
	  jQuery('.jcarousel-control a#link'+ actindex).addClass("active");
};
function removehighlight(carousel,objectli,liindex,listate){
	  actindex = liindex % totalItems; // calculate which item this corresponds to after first scroll
	  if (actindex == 0) {
		  
		actindex = totalItems;
	  }
	jQuery('.jcarousel-control a#link'+ actindex).removeClass("active");
};


// Ride the carousel...
jQuery(document).ready(function() {
					  
    	jQuery("#tyCarousel").jcarousel({
        scroll: 1,
	  	wrap: 'circular',
        size: totalItems,
	  	auto: 0,
        initCallback: mycarousel_initCallback,                            
        itemVisibleInCallback:  highlight,
        itemVisibleOutCallback: removehighlight,
	  	// This tells jCarousel NOT to autobuild prev/next buttons
        buttonNextHTML: null,
        buttonPrevHTML: null

    });
});

