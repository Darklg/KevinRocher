<?php
include dirname( __FILE__ ) . '/../z-protect.php';

// Get datas
$wpq_home_content = new WP_Query( array(
    'posts_per_page' => -1,
    'post_type' => 'page',
    'p' => HOME__PAGE_ID
) );

get_header();

if ( $wpq_home_content->have_posts() ) {
    $wpq_home_content->the_post();
    the_content();
}
wp_reset_postdata();

get_footer();