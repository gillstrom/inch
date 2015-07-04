'use strict';
module.exports = function (inch) {
	return {
		cm: inch * 2.54,
		ft: inch * 0.0833333333,
		yd: inch * 0.0277777778
	};
};
