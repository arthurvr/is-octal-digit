'use strict';
var digits = ['0', '1', '2', '3', '4', '5', '6', '7'];

module.exports = function (digit) {
	if (typeof digit !== 'string' && typeof digit !== 'number') {
		throw new TypeError('Expected a string or a number');
	}

	return digits.indexOf(String(digit)) !== -1;
};
