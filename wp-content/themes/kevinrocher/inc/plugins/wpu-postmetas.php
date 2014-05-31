<?php
include dirname( __FILE__ ) . '/../../z-protect.php';

/* ----------------------------------------------------------
  Options for the plugin "WPUTH Post Metas"
---------------------------------------------------------- */

/* Meta boxes
-------------------------- */


add_filter( 'wputh_post_metas_boxes', 'set_wputh_post_metas_boxes', 10, 3 );

function set_wputh_post_metas_boxes( $boxes ) {
    $boxes['box_about_services'] = array(
        'name' => 'Services',
        'page_template' => 'page-templates/page-about.php',
        'post_type' => array('page')
    );
    $boxes['box_experiences'] = array(
        'name' => 'Experiences',
        'post_type' => array('experiences')
    );
    return $boxes;
}

/* Meta fields
-------------------------- */

add_filter( 'wputh_post_metas_fields', 'set_wputh_post_metas_fields', 10, 3 );
function set_wputh_post_metas_fields( $fields ) {
    $fields['content_services'] = array(
        'box' => 'box_about_services',
        'name' => 'Contenu',
        'type' => 'editor',
    );
    $fields['experience_start'] = array( 'box' => 'box_experiences', 'name' => 'Start date', 'type' => 'date');
    $fields['experience_end'] = array( 'box' => 'box_experiences', 'name' => 'End date', 'type' => 'date');
    $fields['experience_job'] = array( 'box' => 'box_experiences', 'name' => 'Job name');
    return $fields;
}
