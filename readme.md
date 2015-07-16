# inch [![Build Status](https://travis-ci.org/gillstrom/inch.svg?branch=master)](https://travis-ci.org/gillstrom/inch)

> Convert inch to cm, ft and yd.


## Install

```
$ npm install --save inch
```


## Usage

```js
var inch = require('inch');

console.log(inch(5));
//=> {cm: 12.7, ft: 0.41666666650000006, yd: 0.13888888900000002}

console.log(inch(5).cm);
//=> 12.7
```


## Related

* [yard](https://github.com/gillstrom/yard) - Convert yard to cm, in and ft.
* [centimeter](https://github.com/gillstrom/centimeter) - Convert centimeter to yd, in and ft.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
