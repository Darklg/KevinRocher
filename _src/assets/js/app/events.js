window.domReady(function() {

    set_separators();
    set_mainmenu();
    set_scroll();
    var scrollItems = document.querySelectorAll('.section-header, .projects-list li, .skills-list li, .clients-list li, .cc-contact p, .hellomynameiskevin img, .about-content p, .social-networks li'),
        scrollAnim = new dkJSUScrollAnims(scrollItems, {
            offsetY: -50
        });

    for (var i = 0, len = scrollItems.length; i < len; i++) {
        if (scrollItems[i].className != 'has-scrollanim') {
            scrollItems[i].className += " has-scrollanim";
        }
    }

});