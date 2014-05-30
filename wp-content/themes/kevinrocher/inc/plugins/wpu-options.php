<?php

include dirname( __FILE__ ) . '/../../z-protect.php';

/* ----------------------------------------------------------
   Options for the plugin "WPU Options"
   ------------------------------------------------------- */

add_filter( 'wpu_options_boxes', 'set_wpu_options_boxes', 10, 3 );

function set_wpu_options_boxes( $boxes ) {
    $boxes['theme_options'] = array( 'name' => 'Theme Options' );
    $boxes['virtual_contacts'] = array( 'name' => 'Virtual contacts' );
    $boxes['social_networks'] = array( 'name' => 'Réseaux sociaux' );
    $boxes['pages_id'] = array( 'name' => 'Pages IDs' );
    return $boxes;
}

add_filter( 'wpu_options_fields', 'set_wputh_options_fields', 10, 3 );

function set_wputh_options_fields( $options ) {

    // Theme options
    $options['kr_confidential_description'] = array( 'label' => __( 'Confidential description', 'wputh' ), 'box' => 'theme_options' );

    // Virtual contacts
    $options['wpu_opt_email'] = array( 'label' => __( 'Email address', 'wputh' ), 'box' => 'virtual_contacts', 'type' => 'email', 'test' => 'email' );
    $options['wpu_opt_tel'] = array( 'label' => __( 'Phone number', 'wputh' ), 'box' => 'virtual_contacts' );
    $options['wpu_opt_siret'] = array( 'label' => __( 'Siret number', 'wputh' ), 'box' => 'virtual_contacts' );

    // Social networks
    $social_networks = unserialize(SOCIAL_NETWORKS);
    foreach($social_networks as $network){
        $options['social_'.$network.'_url'] = array( 'label' => ucfirst($network) . ' URL', 'box' => 'social_networks' );
    }

    // Pages IDs
    $options['about__page_id'] = array( 'label' => __( 'About', 'wputh' ), 'box' => 'pages_id', 'type' => 'page' );
    $options['home__page_id'] = array( 'label' => __( 'Home page', 'wputh' ), 'box' => 'pages_id', 'type' => 'page' );
    return $options;
}
