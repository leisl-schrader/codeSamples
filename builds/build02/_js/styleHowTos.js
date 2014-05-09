$(document).ready(function() {
		
		// hide all panels, show default panels
		
		$('.styleContainer').hide();
		
		$('#style_01').show();
		
		$('#thumb_01').addClass('active');
		
		// re-equalize heights
		
		$("#container > div > header, nav#products, nav#shopOnline, #content").removeAttr("style");

		setEqualHeight($("#container > div > header, nav#products, nav#shopOnline, #content"));
		
		// event handlers for style nav
		
		$('nav#styles div').click(function() {
			
			// active style in nav
			
			$('nav#styles div').removeClass();
			$(this).addClass('active');
			
			// show active panel
			
			$('.styleContainer').hide();
			var newPanel = $(this).attr('id').replace('thumb_', 'style_');
			$('#' + newPanel).fadeIn();
			
			// re-equalize heights again
			
			$("#container > div > header, nav#products, nav#shopOnline, #content").removeAttr("style");
			setEqualHeight($("#container > div > header, nav#products, nav#shopOnline, #content"));
		});
 
});