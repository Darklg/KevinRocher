window.domReady(function() {
    document.body.setAttribute('data-nojs', '0');
    set_separators();
    set_mainmenu();
    set_scroll();
    var scrollItems = document.querySelectorAll('.section-header, .projects-list li, .skills-list li, .clients-list li, .cc-contact p, .hellomynameiskevin img, .about-content p, .social-networks li, .contact-avatar img, .footer q, .footer cite'),
        scrollAnim = new dkJSUScrollAnims(scrollItems, {
            offsetY: -50
        });

    for (var i = 0, len = scrollItems.length; i < len; i++) {
        if (scrollItems[i].className != 'has-scrollanim') {
            scrollItems[i].className += " has-scrollanim";
        }
    }

    var q = document.getElementById('footer-quote');
    if (q && document.addEventListener) {
        var tiptap = new dkJSUTipTapTip(q);
        q.addEventListener('activescrollanim', function launch_tiptap_q() {
            tiptap.launch();
        }, 1);
    }

});