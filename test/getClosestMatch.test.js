/*global describe,beforeEach,afterEach,it,expect*/

const sandbox = require('./helpers/sandbox');
const dom = require('./../main');
let node1;
let node2;
let node4;

describe("getClosestMatch()", function() {

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
		expect(dom.getClosestMatch).toBeDefined();
	});

	it("is passed no element", function() {
		expect(dom.getClosestMatch(null, null)).toEqual(false);
	});

	it("is passed no selector", function() {
		expect(dom.getClosestMatch(node1, null)).toEqual(false);
	});

	it("finds no match", function() {
		expect(dom.getClosestMatch(node1, '.myNonExistentClass')).toEqual(false);
		expect(dom.getClosestMatch(node1, '#nonExistentID')).toEqual(false);
	});

	it("passed element is closest - element", function() {
		expect(dom.getClosestMatch(node1, 'div')).toEqual(node1);
		expect(dom.getClosestMatch(node2, 'ul')).toEqual(node2);
	});

	it("passed element is closest - id", function() {
		expect(dom.getClosestMatch(node1, '#node1')).toEqual(node1);
	});

	it("passed element is closest - class", function() {
		expect(dom.getClosestMatch(node1, '.myClass')).toEqual(node1);
		expect(dom.getClosestMatch(node1, '.myClass.anotherClass')).toEqual(node1);
	});

	it("passed element is closest - attribute", function() {
		expect(dom.getClosestMatch(node1, '[data-myattribute]')).toEqual(node1);
		expect(dom.getClosestMatch(node1, '[data-myattribute=myValue]')).toEqual(node1);
	});

	it("passed element is closest - combination", function() {
		expect(dom.getClosestMatch(node1, '#node1[data-myattribute]')).toEqual(node1);
		expect(dom.getClosestMatch(node1, '#node1.myClass')).toEqual(node1);
		expect(dom.getClosestMatch(node1, '.myClass[data-myattribute]')).toEqual(node1);
	});

	it("parent element is closest - element", function() {
		expect(dom.getClosestMatch(node2, 'div')).toEqual(node1);
	});

	it("parent element is closest - id", function() {
		expect(dom.getClosestMatch(node2, '#node1')).toEqual(node1);
	});

	it("parent element is closest - class", function() {
		expect(dom.getClosestMatch(node2, '.myClass')).toEqual(node1);
	});

	it("parent element is closest - attribute", function() {
		expect(dom.getClosestMatch(node2, '[data-myattribute]')).toEqual(node1);
	});

	it("ancestor element is closest - element", function() {
		expect(dom.getClosestMatch(node4, 'ul')).toEqual(node2);
	});

	it("ancestor element is closest - id", function() {
		expect(dom.getClosestMatch(node4, '#node2')).toEqual(node2);
	});

	it("ancestor element is closest - class", function() {
		expect(dom.getClosestMatch(node4, '.myList')).toEqual(node2);
	});

	it("ancestor element is closest - attribute", function() {
		expect(dom.getClosestMatch(node4, '[role]')).toEqual(node2);
	});

});
