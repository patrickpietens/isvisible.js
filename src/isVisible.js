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
	const boundingBox = element.getBoundingClientRect();

	// If no width or height is selected return false
	if (boundingBox.width === 0 || boundingBox.height === 0) {
		return false;
	}

	// Get viewport info
	const viewport = {
		top: offset,
		right: (window.innerWidth || document.documentElement.clientWidth) - offset,
		bottom: (window.innerHeight || document.documentElement.clientHeight) - offset,
		left: offset,
	};

	// Check if the element is visible in the viewport
	const isVisible = !(
		boundingBox.top >= viewport.bottom ||
		boundingBox.bottom <= viewport.top ||
		boundingBox.left >= viewport.right ||
		boundingBox.right <= viewport.left
	);

	return isVisible;
};
