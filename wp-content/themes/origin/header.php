<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <?php if(is_front_page()): ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/add/css/front.css">
  <?php elseif(is_page('')): ?>
  <?php endif; ?>
  <?php wp_head(); ?>
  <script>
  (function(d) {
    var config = {
      kitId: 'mrk0xbm',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>
</head>
<body>
  <header id="header">
    <div class="left_box">
      <div class="logo_img">
        Restaurant Searcher
      </div>
    </div>
    
  </header>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script type="text/javascript">
  (function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
  } )(jQuery);
  </script>
  <main>
