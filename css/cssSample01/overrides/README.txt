Placing styles in this folder will allow the theme to override them based on the
file name. This can be used to override module styles, library styles or any
other style defined before this theme.

All that's needed is a `.scss` file with the same file name located within
this overrides directory. As long as the sass files are compiled properly, they
will be included while blocking the original css file. Note that if the Sass
file is a partial, it will still block the original file but it will not be
complied into a separate file. It will be included in the `global.css` file
automatically. There are pros and cons to both approaches so choose one
appropriately.

Using separate files are good for styles that are not included in every page
while compiling many files together has the advantage of enabling features
specific to Sass like the `@extend` directive and the inheritance of `@import`.

  http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials
  http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#extend
  http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#import

Please note that if the style being overridden uses `basename`, the override
must use the alternate name, not the actual style name. This is not a common
practice but it is something to be aware of.

See description for drupal_add_css() - $options['basename']

  http://api.drupal.org/api/drupal/includes%21common.inc/function/drupal_add_css/7

