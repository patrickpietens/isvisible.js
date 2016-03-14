'use strict';

/**
 * Checks if a `Node` is visible on screen.
 * @param  {Node} element 	Node object representing the element which is checked
 * @param  {Number} offset  Number representing the offset which is used while checking. Default is `0`
 */
function isVisible(element, offset = 0) {
	if (!element) {
		return false;
	}

	let {
		top,
		right,
		bottom,
		left,
		width,
		height,
	} = element.getBoundingClientRect();

	if (width === 0 && height === 0) {
		return false;
	}

	let myTop = (window.innerHeight || document.documentElement.clientHeight) - offset,
		myRight = (window.innerWidth || document.documentElement.clientWidth) - offset,
		myBottom = offset,
		myLeft = offset;

	let myVisible =
		top <= myTop &&
		bottom >= myBottom &&
		right <= myRight &&
		left >= myLeft;

	return myVisible;
};
