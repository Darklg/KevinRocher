function is_touch_device() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

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

/* ----------------------------------------------------------
  Scroll effect for header
---------------------------------------------------------- */

var set_scroll = function() {
    var off = false,
        hiddenHeader = false,
        scroll = 0,
        scrollSteps = [],
        title = document.getElementById('main-header-title'),
        cover = document.getElementById('main-header-cover');

    /* Scroll event */
    window.addEventListener('scroll', scrollFun);
    window.addEventListener('resize', setScrollValues);

    setScrollValues();
    scrollFun();

    function setScrollValues() {
        var scrollTop = getBodyScrollTop(),
            steps = document.getElementById('main-links').childNodes,
            tmpTarget = false,
            tmpTargetDim = false,
            i;
        scrollSteps = [];

        for (i = 0; i < steps.length; ++i) {
            // Test if item is a link
            if (!steps[i].tagName || steps[i].tagName != 'A') {
                continue;
            }
            // Test target item
            tmpTarget = document.getElementById(steps[i].getAttribute('href').replace('#', ''));
            if (!tmpTarget) {
                continue;
            }
            tmpTargetDim = getElementOffset(tmpTarget);
            scrollSteps.push({
                el: steps[i],
                target: tmpTarget,
                isActive: false,
                top: tmpTargetDim.top
            });
        }
    }

    function setCurrentElement(minScroll, scroll) {
        var currentI = false;
        for (var i = 0, len = scrollSteps.length; i < len; i++) {
            scrollSteps[i].isActive = false;
            scrollSteps[i].el.setAttribute('data-current', '');
            if (scrollSteps[i].top <= scroll && scroll >= minScroll) {
                currentI = i;
            }
        }
        if (currentI !== false) {
            scrollSteps[currentI].isActive = true;
            scrollSteps[currentI].el.setAttribute('data-current', 'current');
        }
    }

    function scrollFun() {
        /* Get values */
        off = getElementOffset(cover);
        scroll = getBodyScrollTop();

        /* Set current menu element */
        setCurrentElement(off.height, scroll);

        /* Scroll after header */
        if (scroll > off.height) {

            /* Set hidden header */
            if (!hiddenHeader) {
                document.body.setAttribute('data-hiddenheader', '1');
                hiddenHeader = true;
            }

            return;
        }

        /* Unset hidden header */
        if (hiddenHeader) {
            document.body.setAttribute('data-hiddenheader', '');
            hiddenHeader = false;
        }

        cover.style.opacity = Math.min(1, 0.05 + scroll / off.height * 1.2);
        title.style["-webkit-transform"] = 'translate3d(0,' + Math.round(scroll / 2) + 'px,0)';
        title.style["-moz-transform"] = 'translate3d(0,' + Math.round(scroll / 2) + 'px,0)';
        title.style["transform"] = 'translate3d(0,' + Math.round(scroll / 2) + 'px,0)';
    }
};
