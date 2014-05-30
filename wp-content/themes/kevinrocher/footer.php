<?php
include dirname( __FILE__ ) . '/z-protect.php';
if ( isset( $_GET['is_ajax'] ) ) return;

$wpu_opt_siret = trim(get_option('wpu_opt_siret'));

?>
</div></div>
<div class="main-footer centered-container">
    <footer class="contentinfo" role="contentinfo" id="contentinfo">
        <small class="main-footer--copyright">
        &copy; <?php echo date( 'Y' ); ?>
        - <?php bloginfo( 'name' ); ?>
        - <?php bloginfo( 'description' ); ?>
        <?php if (!empty($wpu_opt_siret)) echo ' - ' . sprintf(__('Siret: %s', 'wputh') , $wpu_opt_siret); ?>
        </small>
        <small class="main-footer--credits"><?php
        echo sprintf( __( 'A %s site using %s', 'wputh' ),
            '<a href="https://wordpress.org" target="_blank">WordPress</a>',
            '<a href="https://github.com/Darklg/WPUtilities" target="_blank">WPUtilities</a>' );
        ?></small>
    </footer>
</div>
<?php wp_footer(); ?>
</body>
</html>
