<?php
/**
 * @file
 * Zen theme's implementation to display a single Drupal page.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $secondary_menu_heading: The title of the menu used by the secondary links.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['header']: Items for the header region.
 * - $page['navigation']: Items for the navigation region, below the main menu (if any).
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['footer']: Items for the footer region.
 * - $page['bottom']: Items to appear at the bottom of the page below the footer.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see zen_preprocess_page()
 * @see template_process()
 */
?>

<div id="page">
	
  <?php print $messages; ?>
  <?php print render($tabs); ?>
  <?php print render($page['help']); ?>
  <?php if ($action_links): ?>
    <ul class="action-links"><?php print render($action_links); ?></ul>
  <?php endif; ?>

  <header id="header" class="l-wrapper-reponsive l-color-invert" role="banner">
      
      <h1 id="site-name">
         <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="remove-link-style">Remix Design</a>
      </h1>
      
	  <?php print render($page['header']); ?>
	
      <?php print render($page['navigation']); ?>

  </header>
	
	<!-- region__header -->
  
  <div id="main">
  	
  	<div id="home_hero">
	
		<?php
		
			function showAllImages($imgDir, $imgExtn, $imgClass) {
	
				if ($handle = opendir($imgDir)) {
				    
				    while (false !== ($entry = readdir($handle))) {
					    
					  $pos = strpos($entry, $imgExtn);
					  
					  if ($pos !== false) {
						  
						 //echo '<img src="' . $base_path . $imgDir . $entry . '" class="' . $imgClass . '">';
						 echo '<img src="' . $imgDir . $entry . '" class="' . $imgClass . '">'; 
					  } 
					  
				    }
				
				    closedir($handle);
				}
			}
		
			showAllImages('/home4/remixph1/public_html/remixdesign/_img/home/slideshow/small/', '.jpg', 'slideshow-sm');
			
			showAllImages('/home4/remixph1/public_html/remixdesign/_img/home/slideshow/large/', '.jpg', null);
		
		?>
		
		<button>
			pause
		</button>
		
		<h3>
			Remix Design is an independent graphic design firm serving small and mid-size businesses in the New York metro area.
		</h3>
	
	</div>
	
	<h2>featured <strong>works</strong></h2>
	
	<h2>from the <strong>blog</strong></h2>

    <div id="content" class="column" role="main">
      <?php print render($page['highlighted']); ?>
      
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </div><!-- /#content -->

  </div><!-- /#main -->

  <footer id="footer" class="l-color-invert clearfix <?php print $classes; ?>">	    
	    
	    <?php print render($page['footer']); ?>
	    
	    <p class="l-small-print">&copy; Remix Creative Media LLC. All rights reserved.</p>
    
  </footer><!-- region__footer -->

</div><!-- /#page -->

<?php print render($page['bottom']); ?>
