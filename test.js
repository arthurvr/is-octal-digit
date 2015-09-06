'use strict';
var test = require('ava');
var isOctalDigit = require('./');

test(function (t) {
	[0, 1, 2, 3, 4, 5, 6, 7, '1'].forEach(function (digit) {
		t.true(isOctalDigit(digit));
	});

	t.false(isOctalDigit('01'));
	t.false(isOctalDigit('10'));
	t.false(isOctalDigit(8));
	t.false(isOctalDigit('foo'));

	t.throws(function () {
		isOctalDigit({});
	});

	t.end();
});
