
/* ----------------------------------------------------------
  Toggle main menu
---------------------------------------------------------- */

var set_mainmenu = function() {
    document.getElementById('toggle-menu').addEventListener('click', function() {
        Element.toggleClass(document.body, 'has-main-menu-open');
    }, false);
    var menuLinks = document.querySelectorAll(".main-links a");
    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function(e) {
            Element.removeClass(document.body, 'has-main-menu-open');
            window.eventPreventDefault(e);
            smoothScrollTo(this.getAttribute('href').replace('\#', ''), {
                duration: 200,
                offset: 5
            });
        }, false);
    }
};
