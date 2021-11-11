
/* ----------------------------------------------------------
  Add a nice effect on the separators on mouseover
---------------------------------------------------------- */

var set_separators = function() {
    if (is_touch_device()) {
        return false;
    }
    var separators = document.querySelectorAll(".main-sep");
    for (var i = 0; i < separators.length; i++) {
        separators[i].addEventListener('mouseover', function() {
            Element.toggleClass(this, 'is-active');
        }, false);
        separators[i].addEventListener('click', function() {
            alert('Oh you !');
        }, false);
    }
};
