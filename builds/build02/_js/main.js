$(document).ready(function(){
	
	var randomPhraseNum;
	var totalPhrasesNum = 0;
	var phraseTextStr;
	var obscenities;
	var shareLink;
	var sharedText;
	
	// initiate mediaelement.js
	
	$('audio').mediaelementplayer({
    
		audioWidth: 51,
    features: ['playpause']
	});
	
	// preloading
	
	preloadImages($("#phraseCTA"), 'static', 'animated', 'bgImage');
	preloadImages($("button"), 'Default', 'Hover', 'borderImage');
	preloadImages($("button"), 'Default', 'Active', 'borderImage');
	
	
	 // load phrase data and add event handlers on success
	
   $.getJSON("_json/phrases.json", function(json) {
		 
		 // calculate total number of phrases
		 
		 for (property in json.phrases) {
			 
				 if (json.phrases.hasOwnProperty(property)) {
						totalPhrasesNum++;
				 }
			}
			
			console.log("The total number of phrases is " + totalPhrasesNum);
			
			
			// look for query string indicating user has come from a share link, and show shared text
			
			if (window.location.search) {
				
				sharedText = decodeURI(window.location.search);
				sharedText = sharedText.substring(sharedText.lastIndexOf('=') + 1);
				console.log(sharedText);
				sharedText = sharedText.replace(/_/g, ' ');
				console.log(sharedText);
				$('#phraseText').hide().text(sharedText).fadeIn('500');
				setShareText();
			}
			// if none, generate initial phrase text
			else {
				
		  	generateRandomPhrase();
			}
			
			// CTA animation and click action

			 animateCTA();
			 
			 $('#phraseCTA p').hover(
			 
					function () {
						
						$(this).parent().css('background-image', function(index, value){
							return value.replace('static', 'animated');
						});
						$(this).stop(true).fadeIn(1);
					}, 
					
					function () {
						
						 animateCTA();
						 $(this).parent().removeAttr("style");
						 
				}).click(function() {
		 
				 generateRandomPhrase();
				 
			});
			
			// activate text editing, plus truncation of size and word replacement
			
			$.getJSON("_json/obscenities.json", function(data) {
				
				obscenities = data.obscenities;
				
			});
			 
			$('#makeYourOwn').click(function() {
				
				 $(this).addClass('active');
		 
				 $('#phraseText').text("Type Here").attr("contenteditable", "true").on('click', function() {
					 
					 // empty text on first click, but don't do it again
					 
					 $(this).text('');
					 $(this).off("click");
					 
				 }).on('blur', function() {
					 
					  phraseTextStr = $(this).text();
					 
					 // replace words
					 
					 for (var i = 0; i < obscenities.length; i++) {
						 
						 if (phraseTextStr.search(obscenities[i].obscenity) != -1) {
							 console.log('obscenity detected! call the morals police!');
							 phraseTextStr = phraseTextStr.replace(obscenities[i].obscenity, obscenities[i].replacement);
						 }
					 }
					 
					 // truncate length
					 
					 phraseTextStr = phraseTextStr.substr(0,140);
					 
					 // remove underscores, now a reserved character
					 
					 phraseTextStr = phraseTextStr.replace(/_/g, ' ');
					 
					 // insert new string
					 
					 $(this).text(phraseTextStr);
					 
					 // push new text to share button
					 
					 setShareText();
				 });
				 
				 // show back button
				 
				 $('#makeYourOwnBack').show();
				 
			 });
			 
			 // de-activate text editing, go back to phrases from list
			 
				$('#makeYourOwnBack').click(function() {
					
					$('#makeYourOwn').removeClass('active');
					
					$('#phraseText').removeAttr("contenteditable");
					
					generateRandomPhrase();
				 
					$(this).hide();
				 
			 });
			 
			 // activate sharing
			 
			 /*$('#share').click(function() {
				 
				 
			 });*/
			 
			 
			 // general functions
			 
			 function generateRandomPhrase() {
		 
				randomPhraseNum = Math.floor((Math.random()*(totalPhrasesNum))); 
				
				console.log("You are viewing phrase number " + randomPhraseNum);
		
				$('#phraseText').hide().text(json.phrases[randomPhraseNum].text).fadeIn('500');
				
				setShareText();
			 }
		 
	 }).
	 error(function() { console.log("JSON error"); });
	 
	 
	 function animateCTA() {
      $('#phraseCTA p').fadeIn(1)
     		 .delay(500)
         .fadeOut(1)
				 .delay(500)
				 .fadeIn(1, animateCTA);
   }
	 
	 
	 
	 function preloadImages(selector, defaultStr, preloadStr, imageType) {
			
			var preloadSrc;
			
			var selectedImgsArray = jQuery.makeArray(selector);	
						
			for (var i=0; i < selectedImgsArray.length; i++) {
				
					if (imageType == 'imgTag') {
						preloadSrc = selectedImgsArray[i].src.replace(defaultStr,preloadStr);
					}
						
					else if (imageType == 'bgImage') {
						preloadSrc = $(selectedImgsArray[i]).css('background-image').replace(defaultStr,preloadStr);
						preloadSrc = preloadSrc.slice(preloadSrc.indexOf('"') + 1, preloadSrc.indexOf('")'));
					}
					
					else if (imageType == 'borderImage') {
						preloadSrc = $(selectedImgsArray[i]).css('borderImageSource').replace(defaultStr,preloadStr);
						preloadSrc = preloadSrc.slice(preloadSrc.indexOf('"') + 1, preloadSrc.indexOf('")'));
					}
					
					var newImg = new Image();
					newImg.src = preloadSrc;
			}	
	}
	
 });