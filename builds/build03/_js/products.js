$(document).ready(function() {
		
		
		// create tabs on products pages
		
		$(function() {
			$('#productsTabs').tabs();
		}); 
		
		// show product nav
		
		$('nav#products').addClass('active');
		
		// disable products nav show/hide
		
		$('#primaryNav-01, nav#products').unbind('hover mouseover mouseout');
		
		// Find a Store form - please uncomment or modify as necessary
		
		$('#findStore_cta').click(function(event) {
			
			event.preventDefault();
			$('#findStore_inline').show();
		});
		
		$('#findStore_search').click(function() {
			
			// DoSearch();
		});
 
});