<?php
/**
 * @file
 * Zen theme's implementation to display a region.
 *
 * Available variables:
 * - $content: The content for this region, typically blocks.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the following:
 *   - region: The current template type, i.e., "theming hook".
 *   - region-[name]: The name of the region with underscores replaced with
 *     dashes. For example, the page_top region would have a region-page-top class.
 * - $region: The name of the region variable as defined in the theme's .info file.
 *
 * Helper variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $is_admin: Flags true when the current user is an administrator.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 *
 * @see template_preprocess()
 * @see template_preprocess_region()
 * @see zen_preprocess_region()
 * @see template_process()
 */
// Making these accessible in this region
 
$site_name = variable_get('site_name');
$front_page = variable_get('front_page');
$main_menu = variable_get('main_menu');
$secondary_menu = variable_get('secondary_menu');

?>
  <header id="header" role="banner">

    
      <hgroup id="name-and-slogan">
        <?php if ($site_name): ?>
          <h1 id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
          </h1>
        <?php endif; ?>

      </hgroup><!-- /#name-and-slogan -->
    
	  <?php if ($main_menu): ?>
	    <nav id="main-menu" role="navigation">
	      <?php
	      // This code snippet is hard to modify. We recommend turning off the
	      // "Main menu" on your sub-theme's settings form, deleting this PHP
	      // code block, and, instead, using the "Menu block" module.
	      // @see http://drupal.org/project/menu_block
	      print theme('links__system_main_menu', array(
	        'links' => $main_menu,
	        'attributes' => array(
	          'id' => 'main-menu', 
	          'class' => array('links', 'inline', 'clearfix'),
	        ),
	        'heading' => array(
	          'text' => t('Main menu'),
	          'level' => 'h2',
	          'class' => array('element-invisible'),
	        ),
	      )); ?>
	    </nav>
	  <?php endif; ?>

	  <?php if ($secondary_menu): ?>
	  <nav id="secondary-menu" role="navigation">
	    <?php print theme('links__system_secondary_menu', array(
	      'links' => $secondary_menu,
	      'attributes' => array(
	      	'id' => 'secondary-menu', 
	        'class' => array('links', 'inline', 'clearfix'),
	      ),
	      'heading' => array(
	        'text' => $secondary_menu_heading,
	        'level' => 'h2',
	        'class' => array('element-invisible'),
	      ),
	    )); ?>
	  </nav>
	  <?php endif; ?>
	    
	    
      <?php print render($page['navigation']); ?>
	  <!-- /#navigation -->

  </header>

<!-- region__header -->
