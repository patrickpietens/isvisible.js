'use strict';

/**
 * Checks if a `Node` is visible in the viewport.
 * @param  {Node} element 	Node object representing the element which is checked
 * @param  {Number} offset  Number representing the offset which is used while checking. Default is `0`
 */
function isVisible(element, offset = 0) {
	// Do nothing when there is no element selected
	if (!element) {
		return false;
	}

	// Get element info
	const { top, right, bottom, left, width, height, } = element.getBoundingClientRect();

	// If no width or height is selected return false
	if (width === 0 || height === 0) {
		return false;
	}

	// Get viewport info
	let myTop = offset,
		myRight = (window.innerWidth || document.documentElement.clientWidth) - offset,
		myBottom = (window.innerHeight || document.documentElement.clientHeight) - offset,
		myLeft = offset;

	// Check if the element is visible in the viewport
	const isVisible =
		top >= myTop &&
		bottom <= myBottom &&
		right <= myRight &&
		left >= myLeft;

	return isVisible;
};
