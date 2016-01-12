import test from 'ava';
import m from './';

test(t => {
	t.is(typeof m(1), 'object');
	t.is(m(9).cm, 22.86);
	t.is(m(5).ft, 0.41666666650000006);
	t.is(m(7).yd, 0.1944444446);
});
