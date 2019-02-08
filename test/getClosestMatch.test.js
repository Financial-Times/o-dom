/* eslint-env mocha, proclaim */

import proclaim from 'proclaim';

import sandbox from './helpers/sandbox';
import dom from './../main';

describe("getClosestMatch()", function() {

	let node1;
	let node2;
	let node4;

	beforeEach(function(){
		sandbox.init();
		sandbox.setContents('<div id="node1" class="myClass anotherClass" data-myattribute="myValue"><ul id="node2" class="myList" role="tablist"><li id="node3"><a href="#" id="node4">Link 1</a></li></ul></div>');
		node1 = document.getElementById('node1');
		node2 = document.getElementById('node2');
		node4 = document.getElementById('node4');
	});

	afterEach(function() {
		sandbox.reset();
	});

	it("is defined", function() {
		proclaim.isDefined(dom.getClosestMatch);
	});

	it("is passed no element", function() {
		proclaim.isFalse(dom.getClosestMatch(null, null));
	});

	it("is passed no selector", function() {
		proclaim.isFalse(dom.getClosestMatch(node1, null));
	});

	it("finds no match", function() {
		proclaim.isFalse(dom.getClosestMatch(node1, '.myNonExistentClass'));
		proclaim.isFalse(dom.getClosestMatch(node1, '#nonExistentID'));
	});

	it("passed element is closest - element", function() {
		proclaim.deepEqual(dom.getClosestMatch(node1, 'div'), node1);
		proclaim.deepEqual(dom.getClosestMatch(node2, 'ul'), node2);
	});

	it("passed element is closest - id", function() {
		proclaim.deepEqual(dom.getClosestMatch(node1, '#node1'), node1);
	});

	it("passed element is closest - class", function() {
		proclaim.deepEqual(dom.getClosestMatch(node1, '.myClass'), node1);
		proclaim.deepEqual(dom.getClosestMatch(node1, '.myClass.anotherClass'), node1);
	});

	it("passed element is closest - attribute", function() {
		proclaim.deepEqual(dom.getClosestMatch(node1, '[data-myattribute]'), node1);
		proclaim.deepEqual(dom.getClosestMatch(node1, '[data-myattribute=myValue]'), node1);
	});

	it("passed element is closest - combination", function() {
		proclaim.deepEqual(dom.getClosestMatch(node1, '#node1[data-myattribute]'), node1);
		proclaim.deepEqual(dom.getClosestMatch(node1, '#node1.myClass'), node1);
		proclaim.deepEqual(dom.getClosestMatch(node1, '.myClass[data-myattribute]'), node1);
	});

	it("parent element is closest - element", function() {
		proclaim.deepEqual(dom.getClosestMatch(node2, 'div'), node1);
	});

	it("parent element is closest - id", function() {
		proclaim.deepEqual(dom.getClosestMatch(node2, '#node1'), node1);
	});

	it("parent element is closest - class", function() {
		proclaim.deepEqual(dom.getClosestMatch(node2, '.myClass'), node1);
	});

	it("parent element is closest - attribute", function() {
		proclaim.deepEqual(dom.getClosestMatch(node2, '[data-myattribute]'), node1);
	});

	it("ancestor element is closest - element", function() {
		proclaim.deepEqual(dom.getClosestMatch(node4, 'ul'), node2);
	});

	it("ancestor element is closest - id", function() {
		proclaim.deepEqual(dom.getClosestMatch(node4, '#node2'), node2);
	});

	it("ancestor element is closest - class", function() {
		proclaim.deepEqual(dom.getClosestMatch(node4, '.myList'), node2);
	});

	it("ancestor element is closest - attribute", function() {
		proclaim.deepEqual(dom.getClosestMatch(node4, '[role]'), node2);
	});

});
