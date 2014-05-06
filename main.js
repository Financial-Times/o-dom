/*global require, exports*/
'use strict';

var prefixer = require('o-useragent').prefixer,
    matchesMethod = prefixer.dom(Element.prototype, 'matches') || prefixer.dom(Element.prototype, 'matchesSelector');

function matches (el, selector) {
    return el[matchesMethod](selector);
}

function getClosestMatch (el, selector) {

    while (el) {
        if (matches(el, selector)) {
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


function attrToData (name) {
    return name.replace(/^data\-/, '').replace(/\-\w/g, function ($0) {
        return $0.charAt(1).toUpperCase();
    });
}

function dataset (el) {
    if (el.dataset) return el.dataset;
    
    var data = {};

    Array.prototype.forEach.call(el.attributes, function (attr) {
        if (attr.name.indexOf('data-') === 0) {
            data[attrToData(attr.name)] = attr.value; // need to do some type-coercion here
        }
    });

    return data;
}

exports.getClosestMatch = getClosestMatch;
exports.getIndex = getIndex;
exports.matches = matches;
exports.dataset = dataset;