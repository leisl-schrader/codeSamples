$(document).ready(function() {
	
	// equalize height of primary nav/secondary nav/content columns, and home page columns
	
	setEqualHeight($("#container > div > header, nav#products, nav#shopOnline, #content"));
						   
	setEqualHeight($("#contentTop section"));
	
	setEqualHeight($("#contentBtm section"));
	
	// Add text-shadow rollover for nav, CTAs on browsers that lack native support
	
	if (!Modernizr.textshadow) {
		
		$('nav#primary ul li a, a.cta-block, a.cta-inline').not('.active').hover(
			function () {
				$(this).textshadow('1px 1px 8px rgba(255, 255, 255, 1)');
			}, 
			function () {
				$(this).textshadow('0 0 0 rgba(255, 255, 255, 0)');
			}
		);
	}
	
	// show-hide product nav on rollover
	
		$('#primaryNav-01').hover(
			function () {
				
				$('nav#products').show("slide", { direction: "left" }, 500);
				
			}, 
			function () {
				
				setTimeout( function() {
					if (!$('nav#products').isHovered()) {
						$('nav#products').hide("slide", { direction: "left" }, 250);
					}
				}, 10 );
				
			}
		);
		
		$('nav#products').mouseout(function() {
			if (!$('nav#products').isHovered()) {
					$(this).hide("slide", { direction: "left" }, 250);
				}
		});
		
		// show-hide shop online callout on rollover
	
		$('#primaryNav-04').hover(
			function () {
				
				$('nav#shopOnline').fadeIn(500);
				$('#shopOnline_content').show("slide", { direction: "left" }, 500);
				
			}, 
			function () {
				
				setTimeout( function() {
					if (!$('nav#shopOnline').isHovered()) {
						$('nav#shopOnline').fadeOut(250);
						$('#shopOnline_content').hide("slide", { direction: "left" }, 250);
					}
				}, 10 );
				
			}
		);
		
		$('nav#shopOnline').mouseout(function() {
			if (!$('nav#shopOnline').isHovered()) {
					$('nav#shopOnline').fadeOut(250);
					$('#shopOnline_content').hide("slide", { direction: "left" }, 250);
				}
		});
		
});

function setEqualHeight(columns) {
	
	 var tallestcolumn = 0;
	 
	 columns.each(function() {
						   
		 currentHeight = $(this).height();
		 
		 if(currentHeight > tallestcolumn) {
			 
			tallestcolumn  = currentHeight;
		 }
	 });
	 
	 columns.height(tallestcolumn);
 
}