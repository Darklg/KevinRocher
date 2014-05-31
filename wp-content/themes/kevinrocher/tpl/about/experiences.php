<?php

// Get experiences
$wpq_experiences = new WP_Query(array(
    'posts_per_page' => - 1,
    'post_type' => 'experiences'
));

if ($wpq_experiences->have_posts()) {
    echo '<h3>Experiences</h3>';
    echo '<ul>';
    while ($wpq_experiences->have_posts()) {
        $wpq_experiences->the_post();
        echo '<li>';
        echo '<h4>' . get_the_title() . '</h4>';
        // Experience type
        $exp_type = wp_get_post_terms(get_the_ID() , 'experience-type');
        foreach ($exp_type as $type) {
            echo __('Experience', 'wputh') . ' ' . $type->name;
        }
        echo '</li>';
    }
    echo '</ul>';
}
wp_reset_postdata();
