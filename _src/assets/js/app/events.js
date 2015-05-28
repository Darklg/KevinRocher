window.domReady(function() {

    set_separators();
    set_mainmenu();
    set_scroll();
    var scrollItems = document.querySelectorAll('.section-header, .projects-list li, .skills-list li, .clients-list li, .cc-contact p, .hellomynameiskevin img, .about-content p, .social-networks li'),
        scrollAnim = new dkJSUScrollAnims(scrollItems);

    for (var i = 0, len = scrollItems.length; i < len; i++) {
        scrollItems[i].className += " has-scrollanim";
    }

});