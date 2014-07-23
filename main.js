/*global require, exports*/
'use strict';

function getClosestMatch (el, selector) {

    while (el) {
        if (el.matches(selector)) {
            return el;
        } else {
            el = el.parentElement;
        }
    }
    return false;
}

function getIndex (el) {

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