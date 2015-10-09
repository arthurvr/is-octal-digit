# is-octal-digit [![Build Status](https://travis-ci.org/arthurvr/is-octal-digit.svg?branch=master)](https://travis-ci.org/arthurvr/is-octal-digit)

> Check if a number or a string is a digit in the [octal numeral system](https://en.wikipedia.org/wiki/Octal) digit


## Install

```
$ npm install --save is-octal-digit
```


## Usage

```js
const isOctalDigit = require('is-octal-digit');

isOctalDigit(0);
//=> true

isOctalDigit('2');
//=> true

isOctalDigit('abc');
//=> false

isOctalDigit('9');
//=> false

isOctalDigit('01');
//=> false
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
