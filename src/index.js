'use strict';

function inViewport(element, offset = 0) {
	if (!element) {
		return false;
	}

	let { top, right, bottom, left, width, height } = element.getBoundingClientRect();
	if (width === 0 && height === 0) {
		return false;
	}

	let myTop = (window.innerHeight || document.documentElement.clientHeight) - offset,
		myBottom = offset;

	let myVisible = top <= myTop && bottom >= myBottom;

	return myVisible;
};
