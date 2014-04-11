/* This document shows a multi-level flyout navigation menu */

$(document).ready(function() {
	
		// disable anchors with no path in href
		
		$('a[href="#"]').bind('click', function(event){
		
			event.preventDefault();
		});
	
		// show-hide secondary nav on rollover
	
		$('nav#primary .hasSecondaryNav').hover(
			function () {
				
				var navName = $(this).attr("id");
				navName = navName.substring(navName.lastIndexOf("-") + 1);
				
				$('nav.secondary#' + navName).show("slide", { direction: "left" }, 500);
				
				// some of the menus don't have an overlay
				
				if (navName != "products" && navName != "find") {
					
					$('#overlay').fadeIn(500);
				}
				
			}, 
			function () {
				
				var _self = $(this);
				var navName = $(this).attr("id");
				navName = navName.substring(navName.lastIndexOf("-") + 1);
				
				setTimeout( function() {
					
					if ($('nav.secondary#' + navName).isHovered()) {
						_self.addClass('active');
					}
					// not necessary if adjacent menus don't have an overlay
					/*else if ($('nav#primary .hasSecondaryNav').isHovered()) {
						$('nav.secondary#' + navName).hide("slide", { direction: "left" }, 250);
					}*/
					else {
						$('nav.secondary#' + navName).hide("slide", { direction: "left" }, 250);
						$('#overlay').fadeOut(250);
					}
				}, 1 );
				
			}
		);
		
		$('nav.secondary').mouseout(function() {
			if (!$('nav.secondary').isHovered()) {
					$('nav.secondary').hide("slide", { direction: "left" }, 250);
					$('nav#primary .hasSecondaryNav').removeClass('active');
					$('.external_cta').hide();
					$('#overlay').fadeOut(250);
				}
		});
		
		// show Visit the site button next to outside links
		
		$('nav a.external').hover(
			function () {
				
				// hide any residual links
				
				$('.external_cta').hide();
				
				// position it directly to the right of the link
				var offset = $(this).offset();
				var position = $(this).position();
				var width = $(this).outerWidth();
				
				$(this).next('.external_cta').css({
						'left' : width + "px",
						'top' : position.top + "px"
						}
				).show("slide", { direction: "left" }, 500);
						
			}, 
			function () {
				
				//$(this).next('.external_cta').hide("slide", { direction: "left" }, 250);
			}
		);
		
		// show tertiary sliding up-down menu
		
		$('nav.secondary#find > ul > li > a').click(function(event) {
			
			event.preventDefault();
			$('nav.secondary#find ul ul').slideUp();
			$('nav.secondary#find > ul > li > a').removeClass();
			$(this).addClass('active').next('ul').slideDown();
			
		});
		
		// equalize height of primary nav/secondary nav/content columns, and home page columns
	
		setEqualHeight($("nav#primary, nav#products, nav#find, #bodyContent"));
		
});