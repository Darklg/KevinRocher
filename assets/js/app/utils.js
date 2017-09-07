/* ----------------------------------------------------------
  Get class names
---------------------------------------------------------- */

Element.getClassNames = function(element) {
    var classNames = [],
        elementClassName = element.className;
    if (elementClassName !== '') {
        elementClassName = elementClassName.replace(/\s+/g, ' ');
        classNames = elementClassName.split(' ');
    }
    return classNames;
};

if (!Element.prototype.getClassNames) {
    Element.prototype.getClassNames = function() {
        return Element.getClassNames(this);
    };
}

/* ----------------------------------------------------------
  Test if element has a class
---------------------------------------------------------- */

Element.hasClass = function(element, className) {
    if (element.classList) {
        return element.classList.contains(className);
    }
    return Array.contains(className, Element.getClassNames(element));
};

if (!Element.prototype.hasClass) {
    Element.prototype.hasClass = function(className) {
        return Element.hasClass(this, className);
    };
}

/* ----------------------------------------------------------
  Add a class
---------------------------------------------------------- */

Element.addClass = function(element, className) {
    if (element.classList) {
        element.classList.add(className);
        return;
    }
    if (!Element.hasClass(element, className)) {
        var elementClasses = Element.getClassNames(element);
        elementClasses.push(className);
        element.className = elementClasses.join(' ');
    }
};

if (!Element.prototype.addClass) {
    Element.prototype.addClass = function(className) {
        Element.addClass(this, className);
        return this;
    };
}

/* ----------------------------------------------------------
  Remove a class
---------------------------------------------------------- */

Element.removeClass = function(element, className) {
    if (element.classList) {
        element.classList.remove(className);
        return;
    }
    var elementClasses = Element.getClassNames(element);
    var newElementClasses = [];
    var i = 0,
        arLength = elementClasses.length;
    for (; i < arLength; i++) {
        if (elementClasses[i] !== className) {
            newElementClasses.push(elementClasses[i]);
        }
    }
    element.className = newElementClasses.join(' ');
};

if (!Element.prototype.removeClass) {
    Element.prototype.removeClass = function(className) {
        Element.removeClass(this, className);
        return this;
    };
}

/* ----------------------------------------------------------
  Toggle a class
---------------------------------------------------------- */

Element.toggleClass = function(element, className, force) {
    var elHasClass = Element.hasClass(element, className);
    if (!elHasClass || force == 'add') {
        Element.addClass(element, className);
    }
    if (elHasClass || force == 'remove') {
        Element.removeClass(element, className);
    }
};

if (!Element.prototype.toggleClass) {
    Element.prototype.toggleClass = function(className, force) {
        Element.toggleClass(this, className, force);
        return this;
    };
}
/* ----------------------------------------------------------
  Domready
---------------------------------------------------------- */

/* From the amazing Dustin Diaz : http://www.dustindiaz.com/smallest-domready-ever */
// "!document.body" check ensures that IE fires domReady correctly
window.domReady = function(func) {
    if (/in/.test(document.readyState) || !document.body) {
        setTimeout(function() {
            window.domReady(func);
        }, 9);
    }
    else {
        func();
    }
};

/* ----------------------------------------------------------
  Get values
---------------------------------------------------------- */

/* Get Window dimensions
-------------------------- */

var getWindowInnerHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
};

var getWindowInnerWidth = function() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
};

/* Get BODY Scroll
-------------------------- */

var getBodyScrollTop = function() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

var getBodyScrollLeft = function() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

/* Get Element Offset
-------------------------- */

var getElementOffset = function(el) {
    var clientRect = el.getBoundingClientRect(),
        top = clientRect.top + getBodyScrollTop(),
        left = clientRect.left + getBodyScrollLeft(),
        right = clientRect.width + left,
        bottom = clientRect.height + top,
        width = right - left,
        height = bottom - top;

    return {
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        width: width,
        height: height
    };
};

/* ----------------------------------------------------------
  Prevent default
---------------------------------------------------------- */

window.eventPreventDefault = function(event) {
    return (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
};

/* ----------------------------------------------------------
  Smooth scroll to
---------------------------------------------------------- */

var smoothScrollToIsScroll = false;
var smoothScrollTo = function(id, options) {
    if (smoothScrollToIsScroll) {
        // Prevent double launch
        return false;
    }

    var pas = 3,
        duration = options.duration || 300,
        offset = options.offset || 0,
        interval = false,
        stepsNb = duration / pas,
        scrollTop = getBodyScrollTop(),
        distance = scrollTop,
        bounds = getElementOffset(document.getElementById(id)),
        targetScroll = bounds.top + offset,
        diff = targetScroll - scrollTop,
        stepScroll = diff / stepsNb;

    /* Launch scroll */
    interval = setInterval(scrollFunction, pas);

    smoothScrollToIsScroll = true;

    function scrollFunction() {
        distance += stepScroll;
        window.scrollTo(0, distance);
        var stopScroll = (stepScroll > 0 && distance >= targetScroll) || (stepScroll <= 0 && distance <= targetScroll);
        if (distance < 0 || stopScroll) {
            window.scrollTo(0, targetScroll);
            clearInterval(interval);
            smoothScrollToIsScroll = false;
        }
    }

};