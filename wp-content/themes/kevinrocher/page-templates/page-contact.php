<?php
/* Template Name: Contact */
include dirname( __FILE__ ) . '/../z-protect.php';
get_header();
the_post();

$wpu_opt_email = trim(get_option('wpu_opt_email'));
$wpu_opt_tel = trim(get_option('wpu_opt_tel'));

?>
<div class="main-content">
    <h1><?php the_title(); ?></h1>
    <div class="cssc-content cssc-block">
        <?php the_content(); ?>
    </div>
    <h3><?php echo __( 'Call me maybe', 'wputh' ); ?></h3>
    <ul>
        <?php if(!empty($wpu_opt_tel)): ?>
        <li><strong>T.</strong> <a href="tel:<?php echo $wpu_opt_tel; ?>"><?php echo $wpu_opt_tel; ?></a></li>
        <?php endif; ?>
        <?php if(!empty($wpu_opt_email)): ?>
        <li><strong>E.</strong> <a href="mailto:<?php echo $wpu_opt_email; ?>"><?php echo $wpu_opt_email; ?></a></li>
        <?php endif; ?>
    </ul>
    <h3><?php echo __( 'Social networks', 'wputh' ); ?></h3>
    <ul>
    <?php
    $social_networks = unserialize(SOCIAL_NETWORKS);
    foreach($social_networks as $network){
        $option = trim(get_option('social_'.$network.'_url'));
        if(!empty($option)){
            echo '<li><a target="_blank" href="'.$option.'" class="'.$network.'">'.ucfirst($network).'</a></li>';
        }
    }
    ?>
    </ul>
</div>
<?php
get_footer();
