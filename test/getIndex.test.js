/* eslint-env mocha, proclaim */

import proclaim from 'proclaim';

import sandbox from './helpers/sandbox';
import dom from './../main';

describe("getIndex()", function() {

	beforeEach(function(){
		sandbox.init();
		sandbox.setContents('<ul><li id="node1"></li><li id="node2"></li><li id="node3"></li><li id="node4"></li></ul>');
	});

	afterEach(function() {
		sandbox.reset();
	});

	it("is defined", function() {
		proclaim.isDefined(dom.getIndex);
	});

	it("is passed no element", function() {
		proclaim.isUndefined(dom.getIndex());
	});

	it("gets correct index", function() {
		proclaim.equal(dom.getIndex(document.getElementById('node1')), 0);
		proclaim.equal(dom.getIndex(document.getElementById('node2')), 1);
		proclaim.equal(dom.getIndex(document.getElementById('node3')), 2);
		proclaim.equal(dom.getIndex(document.getElementById('node4')), 3);
	});
});
