window.addEventListener("DOMContentLoaded", function() {

   document.body.setAttribute('data-nojs', '0');

   set_separators();
   set_mainmenu();
   set_scroll();

   var scrollItems = document.querySelectorAll('.section-header, .projects-list, .skills-list, .clients-list, .cc-contact p, .hellomynameiskevin img, .about-content p, .social-networks, .contact-avatar img, .footer q, .footer cite, .main-title .icons'),
       scrollAnim = new dkJSUScrollAnims(scrollItems, {
           offsetY: -50
       });

   var q = document.getElementById('footer-quote');
   if (q && document.addEventListener) {
      var tiptap = new dkJSUTipTapTip(q);
      q.addEventListener('activescrollanim', tiptap.launch, 1);
   }

   /* Correct date in copyright */
   (function() {
      var d = new Date();
      document.getElementById('current-year').innerHTML = d.getFullYear();
   }());
});
