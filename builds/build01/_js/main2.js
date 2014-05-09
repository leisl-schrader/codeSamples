function setShareText() {
			 
	if (window.location.search) {
	
		shareLink = window.location.href.substring(0, window.location.href.lastIndexOf('?'));
	}
	
	else {
	 
		shareLink = window.location.href;
	}
	
	shareLink += '?shareText=' + encodeURI($('#phraseText').text());
	shareLink = shareLink.replace(/%20/g, '_');
	$('#share').attr('st_processed',null).attr("st_url", shareLink);
	stButtons.makeButtons();

}