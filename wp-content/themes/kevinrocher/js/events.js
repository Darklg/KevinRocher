window.addEvent('domready', function() {
    $(document.body).removeClass('no-js');

    /* All */
    $$('[href^=#]').each(function(el) {
        new dkSmoothScroll(el);
    });

});