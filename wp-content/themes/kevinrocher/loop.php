<?php
include dirname( __FILE__ ) . '/z-protect.php';
?><article>
    <h1><?php the_title(); ?></h1>
    <div class="cssc-content cssc-block"><?php the_content(); ?></div>
    <?php the_post_thumbnail('thumb-content'); ?>
</article>
