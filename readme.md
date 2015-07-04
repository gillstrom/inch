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
//=> {cm: 12.7, yd: 0.13888888900000002, ft: 0.41666666650000006}

console.log(inch(5).cm);
//=> 12.7
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
