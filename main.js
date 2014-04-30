/*global require, exports*/

var oUseragent = require('o-useragent'),
    matchesMethod = oUseragent.prefixer.dom(Element.prototype, 'matches') || oUseragent.prefixer.dom(Element.prototype, 'matchesSelector');

function matches(el, selector) {
    return el[matchesMethod](selector);
}

function getClosestMatch(el, selector) {
    "use strict";
    while (el) {
        if (matches(el, selector)) {
            return el;
        } else {
            el = el.parentElement;
        }
    }
    return false;
}

function getIndex(el) {
    "use strict";
    var i = 0;
    if (el && typeof el === 'object' && el.nodeType === 1) {
        while (el.previousSibling) {
            el = el.previousSibling;
            if (el.nodeType === 1) {
                ++i;
            }
        }
        return i;
    }
}

exports.getClosestMatch = getClosestMatch;
exports.getIndex = getIndex;
exports.matches = matches;