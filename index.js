'use strict';

const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
const keys = Reflect.ownKeys;

if (!Object.values) {
	Object.values = function (O) {
		return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
	};
}

// ////////////////////

module.exports = (routes, url) => {
	const urls = Object.keys(routes);
	const handlers = Object.values(routes);

	urls.forEach((template, index) => {
		const r = template
			.split(/\{[^}]+}/g)
			.join('(.*)'); // заготовка матч-темплейта

		const rx = new RegExp(r, 'gm'); // матчер
		if (rx.test(url)) {
			let tePieces = template.match(r) || [];
			let urlPieces = url.match(r) || [];

			tePieces = tePieces.slice(1);
			urlPieces = urlPieces.slice(1);

			const data = tePieces.reduce((memo, item, index) => {
				const key = item.slice(1, -1);
				const value = urlPieces[index];
				memo[key] = value;

				return memo;
			}, {});

			handlers[index](data);
		}
	});
};
