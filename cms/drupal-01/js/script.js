/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

    // replace blank email address fields
    
    //document.write('<' + 'a ' + 'href="mailto:' + 'mail' + '@' + 'remixdesign.ws' + '">' + 'mail' + '@' + 'remixdesign.ws' + '</' + 'a' + '>')
    
    // Google Analytics
    
    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
    
    try {
    var pageTracker = _gat._getTracker("UA-8681241-2");
    pageTracker._trackPageview();
    } 
    catch(err) {}


})(jQuery, Drupal, this, this.document);
