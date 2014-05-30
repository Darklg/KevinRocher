<?php
include dirname(__FILE__) . '/z-protect.php';
$args = array(
    'posts_per_page' => -1,
    'post_type' => 'works'
);
query_posts($args);
get_header();
echo '<div class="main-content">';
echo '<h1>Works</h1>';
while (have_posts()) {
    the_post();
    get_template_part('loop', 'works');
}
echo '</div>';
get_footer();
