import test from 'ava';
import fn from '.';

// const TEST_DATA = [
// 	'/category',
// 	'/category/page',
// 	'/{cat}/b',
// 	'/{cat}/{page}',
// 	'/category{cat}/{page}',
// 	'/category-{cat}/{page}',
// 	'/category-{cat}/page{page}',
// 	'/category-{cat}/page-{page}',
// 	'/category-{cat}/page-{page}-with-comments',
// 	'/category-{cat}/page-{page}-with-{component}',
// 	'/category-{cat}/{page}-with-{component}',
// 	'/{cat}{page}{component}',
// 	'/{cat}/{page}{component}',
// 	'/{cat}/{page}/{component}',
// ];

test('can match url', t => {
	const routes = {
		'/category': opt => {
			t.pass(opt);
		}
	};

	fn(routes, '/category');
});

test('can match url /category/page', t => {
	const routes = {
		'/category/page1': opt => {
			t.pass(opt);
		}
	};

	fn(routes, '/category/page3');
});

// test('title', t => {
// 	const err = t.throws(() => fn(123), TypeError);
// 	t.is(err.message, 'Expected a string, got number');

// 	t.is(fn('unicorns'), 'unicorns & rainbows');
// });
