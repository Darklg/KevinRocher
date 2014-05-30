<?php
/* Template Name: About */

include dirname( __FILE__ ) . '/../z-protect.php';

get_header();
the_post();
?>
<div class="main-content">
<article <?php post_class(); ?>>
    <h1><?php the_title(); ?></h1>
    <div class="cssc-content cssc-block">
        <?php the_content(); ?>
    </div>
</article>
</div>
<?php
get_footer();
