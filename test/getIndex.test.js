/*global require,describe,beforeEach,afterEach,it,expect*/

var sandbox = require('./helpers/sandbox'),
    dom = require('./../main');

describe("getIndex()", function() {
    "use strict";

    beforeEach(function(){
        sandbox.init();
        sandbox.setContents('<ul><li id="node1"></li><li id="node2"></li><li id="node3"></li><li id="node4"></li></ul>');
    });

    afterEach(function() {
        sandbox.reset();
    });

    it("is defined", function() {
        expect(dom.getIndex).toBeDefined();
    });

    it("is passed no element", function() {
        expect(dom.getIndex()).toEqual(undefined);
    });

    it("gets correct index", function() {
        expect(dom.getIndex(document.getElementById('node1'))).toEqual(0);
        expect(dom.getIndex(document.getElementById('node2'))).toEqual(1);
        expect(dom.getIndex(document.getElementById('node3'))).toEqual(2);
        expect(dom.getIndex(document.getElementById('node4'))).toEqual(3);
    });

});