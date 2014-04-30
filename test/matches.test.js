/*global require,describe,beforeEach,afterEach,it,expect*/

var sandbox = require('./helpers/sandbox'),
    dom = require('./../main');

describe("matches()", function() {
    "use strict";

    beforeEach(function(){
        sandbox.init();
        sandbox.setContents('<div id="node1" class="myClass anotherClass" data-myattribute="myValue"></div>');
        node1 = document.getElementById('node1');
    });

    afterEach(function() {
        sandbox.reset();
    });

    it("is defined", function() {
        expect(dom.matches).toBeDefined();
    });

    it("is passed no element", function() {
        expect(dom.matches(null, null)).toThrow();
    });

    it("is passed no selector", function() {
        expect(dom.matches(node1, null)).toThrow();
    });

    it("finds no match", function() {
        expect(dom.matches(node1, '.myNonExistentClass')).toEqual(false);
        expect(dom.matches(node1, '#nonExistentID')).toEqual(false);
    });

    it("matches variety of selectors", function() {
        expect(dom.matches(node1, 'div')).toEqual(false);
        expect(dom.matches(node1, '#node1')).toEqual(false);
        expect(dom.matches(node1, '.myClass')).toEqual(false);
        expect(dom.matches(node1, '.myClass.anotherClass')).toEqual(false);
        expect(dom.matches(node1, '[data-myattribute]')).toEqual(false);
        expect(dom.matches(node1, '[data-myattribute=myValue]')).toEqual(false);
        expect(dom.matches(node1, '#node1[data-myattribute]')).toEqual(false);
        expect(dom.matches(node1, '#node1.myClass')).toEqual(false);
        expect(dom.matches(node1, '.myClass[data-myattribute]')).toEqual(false);
    });
});