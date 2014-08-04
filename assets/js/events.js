window.addEvent('domready', function() {

    // Smooth Scroll
    var offsetTop = 0 - $('header').getHeight();
    $$('[href^=#]').each(function(el) {
        new dkSmoothScroll(el, {
            offsetTop: offsetTop
        });
    });

    // About
    new dkJSUTabs({
        triggers: $$('.about-tabs > a'),
        targets: $$('.about-contents > div'),
    });
});