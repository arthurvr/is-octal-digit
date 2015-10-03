import test from 'ava';
import isOctalDigit from './';

test(t => {
	[0, 1, 2, 3, 4, 5, 6, 7, '1'].forEach(digit => {
		t.true(isOctalDigit(digit));
	});

	t.false(isOctalDigit('01'));
	t.false(isOctalDigit('10'));
	t.false(isOctalDigit(8));
	t.false(isOctalDigit('foo'));

	t.throws(() => {
		isOctalDigit({});
	});

	t.end();
});
