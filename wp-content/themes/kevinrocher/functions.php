<?php
session_start();
include dirname(__FILE__) . '/z-protect.php';

/* Pages IDs
 -------------------------- */

$pages_ids = array(
    'ABOUT__PAGE_ID' => 'about__page_id',
    'CONTACT__PAGE_ID' => 'contact__page_id',
    'HOME__PAGE_ID' => 'home__page_id'
);

foreach ($pages_ids as $constant => $option) {
    define($constant, get_option($option));
}

/* Social networks
-------------------------- */

define('SOCIAL_NETWORKS', serialize(array('twitter','github','linkedin', 'viadeo')));

/* Redirs
 -------------------------- */

add_action('template_redirect', 'kr_redirections');
function kr_redirections() {
    if (is_page(HOME__PAGE_ID)) {
        wp_redirect(site_url() , 301);
    }
}

/* Globals
 -------------------------- */

define("THEME_URL", get_template_directory_uri());
define('PAGINATION_KIND', 'numbers');
 // load-more || numbers || default

/* Menus
 -------------------------- */

register_nav_menus(array(
    'main' => __('Main menu', 'wputh') ,
));

/* Post Types
 -------------------------- */

add_filter('wputh_get_posttypes', 'wputh_set_theme_posttypes');
function wputh_set_theme_posttypes($post_types) {
    $post_types = array(
        'works' => array(
            'menu_icon' => 'dashicons-portfolio',
            'name' => __('Work', 'wputh') ,
            'plural' => __('Works', 'wputh') ,
            'female' => 0
        )
    );
    return $post_types;
}

/* Taxonomies
 -------------------------- */

add_filter('wputh_get_taxonomies', 'wputh_set_theme_taxonomies');
function wputh_set_theme_taxonomies($taxonomies) {
    $taxonomies = array(
        'work-type' => array(
            'name' => __('Work type', 'wputh') ,
            'post_type' => 'works'
        ),
        'work-technology' => array(
            'name' => __('Work technology', 'wputh') ,
            'post_type' => 'works'
        )
    );
    return $taxonomies;
}

/* Thumbnails
 -------------------------- */

// Default thumbnail size
if (function_exists('set_post_thumbnail_size')) {
    set_post_thumbnail_size(1200, 1200);
}

if (function_exists('add_image_size')) {
    add_image_size('thumb-content', 940, 726, 1);
    add_image_size('thumb-work', 300, 232, 1);
}

/* ----------------------------------------------------------
  Includes
---------------------------------------------------------- */

/* Theme
 -------------------------- */

include get_template_directory() . '/inc/theme/params.php';
include get_template_directory() . '/inc/theme/utilities.php';
include get_template_directory() . '/inc/theme/shortcodes.php';
include get_template_directory() . '/inc/theme/activation.php';

if (!isset($content_width)) $content_width = 680;

/* Plugins Configuration
 -------------------------- */

include get_template_directory() . '/inc/plugins/wpu-options.php';
include get_template_directory() . '/inc/plugins/wpu-postmetas.php';

/* Assets
 -------------------------- */

include get_template_directory() . '/inc/assets/styles.php';
include get_template_directory() . '/inc/assets/scripts.php';

/* Langs
 -------------------------- */

add_action('after_setup_theme', 'wputh_setup');

function wputh_setup() {
    load_theme_textdomain('wputh', get_template_directory() . '/inc/lang');
}

/* Parameters
 -------------------------- */

// Disabling admin bar
add_filter('show_admin_bar', '__return_false');
