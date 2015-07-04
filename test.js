'use strict';
var test = require('ava');
var inch = require('./');

test('inch', function (t) {
	t.plan(4);

	t.assert(typeof inch(1) === 'object');
	t.assert(inch(9).cm === 22.86);
	t.assert(inch(5).ft === 0.41666666650000006);
	t.assert(inch(7).yd === 0.1944444446);
});
