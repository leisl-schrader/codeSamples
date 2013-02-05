// variables

var popupEnabled = false;

/*var fbTitleTag = $('meta[property="og:title"]');
var fbDescriptionTag = $('meta[property="og:description"]');*/

// functions

/*function setShareText(slideNum) {
	
	fbTitleTag.attr('content', 'Text for number ' + slideNum );
	fbDescriptionTag.attr('content', 'Text for number ' + slideNum );
}*/
	
function loadPopup(popupId){
	
	if (!popupEnabled) {
			
			$("#popup_bg").fadeIn("fast");
			$(popupId).fadeIn("fast");
			popupEnabled = true;
		}
}

function disablePopup(popupId){
	
	if (popupEnabled) {
		
			$("#popup_bg").fadeOut("fast");
			$(popupId).fadeOut("fast");
			popupEnabled = false;
		}
}

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

$(document).ready(function() {
				   
	// startup actions
	
	$("#tyCarousel, .column, .carousel_slide01_body_button, .carousel_body_feature, #popup_howTyWorks, #popup_featuredEvent, #popup_latestOffers, #popup_bg").corner("10px");
	
	$(".global_cta").corner("7px");
	
	$(".carousel_cta, .column_cta").corner("7px left");
	
	$(".carousel_body, #popup_latestOffers_results").corner("10px bottom");
						   
	setEqualHeight($(".column_wrapper > div").not(".clear"));
	
	$("#popup_bg").css("opacity", "0.7");
	
	$(".popup_latestOffers_past").css("opacity", "0.2");
	
	$('a[href^="http://"], a[href^="https://"]').attr({
								 
		target: "_blank", 
		title: "Opens in a new window"
	});
	
	// last thing to be loaded... but very important!
	
	$('body').css('visibility', 'visible');
	
	// event handlers
	
	// rollovers
	
	$(".global_cta, .carousel_slide01_body_button, .carousel_cta, .column_cta").hover(
						
	 function(){
	  $(this).css("background-position","left bottom");
	 },
	 function(){
	  $(this).css("background-position","");
	 }
	 
	);
	
	// popups
 			   
	$(".popup_howTyWorks_open").click(function(event){
										
		event.preventDefault();
        loadPopup("#popup_howTyWorks");
		$('.column').first().css('opacity', '0.5');
		//$("#popup_howTyWorks").corner("10px");
	 });
						   
	$("#popup_howTyWorks_close").click(function(event){
										
		event.preventDefault();
		disablePopup("#popup_howTyWorks");
		$('.column').first().css('opacity', '1');
	 });
	 
	 $("#popup_featuredEvent_open").click(function(event){
										
		event.preventDefault();
        loadPopup("#popup_featuredEvent");
	 });
	 
	 					   
	$("#popup_featuredEvent_close").click(function(event){
										
		event.preventDefault();
		disablePopup("#popup_featuredEvent");
	 });
	 
	 
	 $("#popup_latestOffers_open").click(function(event){
										
		event.preventDefault();
        loadPopup("#popup_latestOffers");
	 });
	 
	 $("#popup_latestOffers_close").click(function(event){
										
		event.preventDefault();
		disablePopup("#popup_latestOffers");
	 });
	 
});
 