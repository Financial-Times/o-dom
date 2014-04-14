function getClosestMatch(el, selector) {
    "use strict";
    while (el) {
        if (el.matches(selector)) {
            return el;
        } else {
            el = el.parentElement;
        }
    }
    return false;
}

exports.getClosestMatch = getClosestMatch;