window.domReady(function() {
    document.body.setAttribute('data-nojs', '0');

    set_separators();
    set_mainmenu();
    set_scroll();

    var scrollItems = document.querySelectorAll('.section-header, .projects-list li, .skills-list, .clients-list, .cc-contact p, .hellomynameiskevin img, .about-content p, .social-networks li, .contact-avatar img, .footer q, .footer cite'),
        scrollAnim = new dkJSUScrollAnims(scrollItems, {
            offsetY: -50
        });

    var q = document.getElementById('footer-quote');
    if (q && document.addEventListener) {
        var tiptap = new dkJSUTipTapTip(q);
        q.addEventListener('activescrollanim', tiptap.launch, 1);
    }

});