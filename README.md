# o-dom [![Build Status](https://travis-ci.org/Financial-Times/o-dom.png?branch=master)](https://travis-ci.org/Financial-Times/o-dom)

___
Origami DOM manipulation &amp; traversal helpers.
___


## Functions

### getClosestMatch

Get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.

__Arguments__

* `el` < DOMElement > The DOM element to start from.
* `selector` < String > The CSS selector to match.


Example:

```javascript
var dom = require('o-dom');
var closestListItem = dom.getClosestMatch(document.querySelector('li a'), 'li');
```