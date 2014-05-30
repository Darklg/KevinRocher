<?php
include dirname(__FILE__) . '/z-protect.php';
$is_confidential = $post->post_status == 'private';
$confidential_description = get_option('kr_confidential_description');
$work_type = wp_get_post_terms(get_the_ID(), 'work-type', array("fields" => "names"));

?>
<div class="loop-work <?php echo ($is_confidential ? 'is-confidential' : 'is-public'); ?>" style="background-image: url(<?php echo wputh_get_thumbnail_url('thumb-work'); ?>);">

<?php if ($is_confidential) { ?>

<h3><?php echo __( 'Confidential', 'wputh' ); ?></h3>
<p><?php echo $confidential_description; ?></p>
<a href="<?php echo get_page_link(CONTACT__PAGE_ID); ?>" class="cssc-button"><?php echo __( 'Contact me', 'wputh' ); ?></a>

<?php } else { ?>

<a href="<?php the_permalink(); ?>">
<h3><?php the_title(); ?></h3>
<?php if(!empty($work_type)): ?>
<div class="work-type-list">
    <span><?php echo implode('</span> <span>', $work_type); ?></span>
</div>
<?php endif; ?>
</a>

<?php } ?>
</div>
