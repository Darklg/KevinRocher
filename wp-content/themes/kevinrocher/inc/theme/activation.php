<?php

/**
 * Configuration after Theme activation
 *
 * @package default
 */

// Options
$wputh_setup_options = array(
    'date_format' => 'j F Y',
    'permalink_structure' => '/%postname%/',
    'timezone_string' => 'Europe/Paris',
    'time_format' => 'H:i',
    // Default values to avoid unnecessary queries
    'widget_calendar' => '',
    'widget_nav_menu' => '',
    'widget_pages' => '',
    'widget_post_categories' => '',
    'widget_tag_cloud' => '',
    'wpu_home_meta_description' => '',
);

$wputh_setup_pages = array(
    'home__page_id' => array(
        'post_title' => 'Accueil',
        'post_content' => '<p>Bienvenue sur ce site.</p>'
    ) ,
    'contact__page_id' => array(
        'post_title' => 'Contact',
        '_wp_page_template' => 'page-templates/page-contact.php',
        'post_content' => '<p>Je suis disponible à partir de Fin Juin. Et si on travaillait ensemble ?</p>'
    ) ,
    'about__page_id' => array(
        'post_title' => 'A Propos',
        '_wp_page_template' => 'page-templates/page-about.php',
        'post_content' => '<p>A Propos de ce site.</p>',
    )
);

// Old way for activation hook
if (is_admin() && isset($_GET['activated']) && $pagenow == "themes.php") {

    $activation__home__page_id = '';

    // Setting options
    foreach ($wputh_setup_options as $name => $value) {
        update_option($name, $value);
    }

    // Creating pages
    foreach ($wputh_setup_pages as $id => $page) {
        $option = get_option($id);

        // If page doesn't exists
        if (!is_numeric($option)) {

            if (!isset($page['post_status'])) {
                $page['post_status'] = 'publish';
            }
            if (!isset($page['post_type'])) {
                $page['post_type'] = 'page';
            }

            // Create page
            $option_page = wp_insert_post($page);
            if (is_numeric($option_page)) {
                update_option($id, $option_page);
            }
        }
    }

    // Updating permalinks
    global $wp_rewrite;
    $wp_rewrite->flush_rules();
}
