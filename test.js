'use strict';
var test = require('ava');
var isOctalDigit = require('./');

test(function (t) {
	[0, 1, 2, 3, 4, 5, 6, 7, '1'].forEach(function (digit) {
		t.assert(isOctalDigit(digit));
	});

	t.assert(!isOctalDigit('01'));
	t.assert(!isOctalDigit('10'));
	t.assert(!isOctalDigit(8));
	t.assert(!isOctalDigit('foo'));

	try {
		isOctalDigit({});
		t.assert(false);
	} catch (error) {
		t.assert(true);
	}
});
