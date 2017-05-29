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
		'/category'() {
			t.pass();
		}
	};

	fn(routes, '/category');
});

test('can match url with params', t => {
	const routes = {
		'/category-{cat}/page-{page}-with-{component}'(params) {
			t.deepEqual(params, {
				cat: '1',
				page: '2',
				component: '3'
			});
		}
	};

	fn(routes, '/category-1/page-2-with-3');
});

test('can can trig more than one urls', t => {
	t.plan(2);
	const routes = {
		'/category-{cat}/page-{page}-with-{component}'(params) {
			t.deepEqual(params, {
				cat: '1',
				page: '2',
				component: '3'
			});
			t.pass();
		},
		'/category-123/page-456-with-769'() {
			t.pass();
		}
	};

	fn(routes, '/category-1/page-2-with-3');
});

// test('title', t => {
// 	const err = t.throws(() => fn(123), TypeError);
// 	t.is(err.message, 'Expected a string, got number');

// 	t.is(fn('unicorns'), 'unicorns & rainbows');
// });
