# url-checker [![Build Status](https://travis-ci.org/jt3k/url-checker.svg?branch=master)](https://travis-ci.org/jt3k/url-checker)

> Tiny, light-weight JavaScript routing with zero dependencies.


## Usage

```js
const urlChecker = require('url-checker'); // not now in npm, but u cat copy code from index.js is very-lightweight!

urlChecker(
	{
		'/a/b-{c}-d-{e}':  vars => console.log(vars),
		'/about':          vars => console.log(vars),
	},
	'/a/b-lalala-d-lololo'
);

//=> {c: 'lalala', e: 'lololo'}
```


## API

### urlChecker(routes, url)

#### routes

Type: `object`

```js
{
	'/category': variablesFromUrl => {},
	'/category/page': variablesFromUrl => {},
	'/category/page-{pageNumber}': variablesFromUrl => { /* here variablesFromUrl.pageNumber is 31337 */ },
}
```

#### url

Type: `string`

```
/category/page-31337
```

## License

MIT © [Andrey Gurtovoy](https://github.com/jt3k)
