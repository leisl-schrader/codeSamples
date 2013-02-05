// variables

var showOverlayArrows = [];

// functions

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

function primaryContent_initCallback(carousel) {

	// external control
	$('.jcarousel-control>div').bind('click', function() {

        var newSlideNum = jQuery.jcarousel.intval(jQuery(this).index() + 1);  // + 1 because slides do not use 0 index
        carousel.scroll(newSlideNum);
		resetPanelHandler(newSlideNum);
		changePanelHandler(newSlideNum);

		$('#primaryPanel_' + carousel.first + '0-00').load('primaryPanel_' + carousel.first + '0-00.html');

        return false;

    });

	// deep linking based on hash

	if (location.hash) {

		//alert(location.hash.substr(-1));
		resetPanelHandler(location.hash.substr(-1));
		carousel.scroll(location.hash.substr(-1));
		changePanelHandler(location.hash.substr(-1));

	} else {

		resetPanelHandler(1);
		changePanelHandler(1);

	}
};

// actions associated with panel rotation

function primaryContent_itemVisibleInCallbackBeforeAnimation(carousel, item, idx, state) {
	resetPanelHandler(idx);
};

function primaryContent_itemVisibleInCallbackAfterAnimation(carousel, item, idx, state) {
	changePanelHandler(idx);
};

function resetPanelHandler(panelNum) {

	// restore opacity on nav

	makeLinkInactive($('.jcarousel-control>div'));


	$('.jcarousel-control>div').bind({
	  mouseover: function() {
		makeLinkActive($(this));
	  },
	  mouseout: function() {
		makeLinkInactive($(this));
	  }
	});

	// reset animated bar

	$('#primaryPanel_' + panelNum + '0-00 .animatedBar').css('width', '');
}

function changePanelHandler(panelNum) {

	panelNumZeroIndex = panelNum - 1;

	// swap main body bg image

	$('body').css('background-image', "url(_img/primary-content/bg/bg_" + panelNum + "0-00.jpg)");

	// nav image opacity

	makeLinkActive($('.jcarousel-control>div').eq(panelNumZeroIndex));

	($('.jcarousel-control>div').eq(panelNumZeroIndex)).unbind({
	  mouseover: function() {
		makeLinkActive;
	  },
	  mouseout: function() {
		makeLinkInactive;
	  }
	});

	// reset secondary panels

	$('#secondaryContent>div').hide();

	// show/hide secondary panels

	switch(panelNum){

	case 1:
	  $('#secondaryPanel01').show();
	  $('#secondaryPanel02').show();
	  break;

	case 2:
	  $('#secondaryPanel03').show();
	  $('#secondaryPanel04').show();
	  break;

	case 3:
	  $('#secondaryPanel05').show();
	  $('#secondaryPanel06').show();
	  break;

	case 4:
	  $('#secondaryPanel07').show();
	  $('#secondaryPanel08').show();
	  break;

	case 5:
	  $('#secondaryPanel02').show();
	  $('#secondaryPanel03').show();
	  break;

	case 6:
	  $('#secondaryPanel04').show();
	  $('#secondaryPanel05').show();
	  break;

	case 7:
	  $('#secondaryPanel06').show();
	  $('#secondaryPanel07').show();
	  break;

	default:
	  $('#secondaryPanel01').show();
	  $('#secondaryPanel02').show();
	}

	// animated top bar

	 $('#primaryPanel_' + panelNum + '0-00 .animatedBar').animate({
		width: '100%'
	  }, 
	  2000);
}

function makeLinkActive (theLink) {

	theLink.css('opacity', '1');
	theLink.find('.animatedBar_inner').animate({
		width: '100%'
	  }, 
	  1000);

}

function makeLinkInactive (theLink) {
	theLink.css('opacity', '0.5');
	theLink.find('.animatedBar_inner').css('width', '1%');
}

$(document).ready(function() {

	// startup actions

	// activate carousel
	$('#primaryContent').jcarousel({
		auto: 0,
		scroll: 1,
		wrap: 'last',
		animation: 1,
		itemLoadCallback: itemLoadCallbackFunction,
		itemVisibleInCallback: {
			 onBeforeAnimation: primaryContent_itemVisibleInCallbackBeforeAnimation,
  			 onAfterAnimation:  primaryContent_itemVisibleInCallbackAfterAnimation
		},
		initCallback: primaryContent_initCallback
	});

	// rounded corners
	$('#primaryContent .contentText').corner("10px right");

	$('#primaryContent #primaryPanel_60-00 .showOverlayMenuTop, #primaryContent .overlayContent .overlayCTA, #secondaryContent #secondaryPanel07 .socialMedia-link').corner("5px");

	// nav tooltips
	$('.jcarousel-control>div').each(function() {
		  tooltipContent = $(this).children('span').text();
		  $(this).qtip(
		  {
			 content: tooltipContent,
			 position: {
				  corner: {
					 target: 'topMiddle',
					 tooltip: 'bottomMiddle'
				  },
				  adjust: { 
					x: 0, 
					y: -8 
				 }
		    },
			 style: { 
			  tip: 'bottomMiddle'
		    },
			show: { 
			 	delay: 0,
				effect: { 
					length: 2 
				}
			},
			 hide: {
				delay: 0,
				fixed: true
			 }
		  });
	   });

	// draw decorative arrows

	$(".showOverlayCTA").each(function (index, element) {

		showOverlayArrows[index] = Raphael($(".showOverlayCTA")[index], 100, 10);
		showOverlayArrows[index].path("M 0 0 L 0 10 L 10 5 L 0 0 z")
		.attr({fill: '#ffffff', 'stroke-width': 0});

    });


	// fix its position in IE the dirty way... this will match the CSS file

	$('#primaryContent .showOverlayCTA div').css({

			position: 'absolute',
			right: 0,
			left: '',
			top: '5px'
	});

	// event handlers

	// show and hide overlay (a.k.a. "rich experience")

	$('.showOverlayCTA').bind('click', function(event){

		event.preventDefault();

		$(this).parent().fadeOut('fast');

		$(this).parent().nextAll('.overlayContent').fadeIn('fast');

	 });

	 $('.overlayClose').bind('click', function(event){

		event.preventDefault();

		$(this).parent().fadeOut('fast');

		$(this).parent().prevAll('.contentText').fadeIn('fast');

	 });

	  // 60-00 drop down menu

	 $('.showOverlayMenuTop').toggle(function(event){

		event.preventDefault();

		$(this).next('.showOverlayMenu').slideDown('fast');

		$(this).css('background-image', function(index, value) {

		  return value.replace("_default","_active");

		});

	 }, function(event) {

	    event.preventDefault();

		$(this).next('.showOverlayMenu').slideUp('fast');

	  	$(this).css('background-image', function(index, value) {

		  return value.replace("_active","_default");

		});
	});

	 $('.showOverlayMenu li').bind('click', function(){

		$(this).parent().parent().parent().fadeOut('fast');

		$(this).parents('#primaryPanel_60-00').find('.overlayContent').eq($(this).index()).fadeIn('fast');
	 });

	 // 70-00 card switcher

	  $('#card-switcher_70-10').bind('click', function(event){

		event.preventDefault();

		$(this).parent().fadeOut('fast');

		$(this).parent().prevAll('.contentText').fadeIn('fast');

	 });

});

// ajax stuff
function itemLoadCallbackFunction(carousel, state) {
};