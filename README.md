![logo][logo-image]

[![build status][build-image]][build-url]
[![coverage status][codecov-image]][codecov-url]
[![npm version][npm-image]][npm-url]
![language][lang-image]

rangr is a tool to manage ranges and sets. It's inspired from the LeetCode's [Merge Interval][leetcode-problem-url] problem.

⚠️ NOT ready for production use.

## Usage

```typescript
import Rangr from 'rangr';

const range: Rangr = new Rangr([ [1,3], [2,6], [8,10], [15,18] ]);
console.log(range.toString());
// [1,6],[8,10],[15,18]

range.add([ [ 10, 11 ], [11, 20] ]);
console.log(range.toString());
// [1,6],[8,20]
```

## Features

### Array output
To get ranges as an array, use `.toArray()` method provided.

Example:
```typescript
const range: Rangr = new Rangr([ [1,3], [2,6] ]);
const arr = range.toArray(); // [ [ 1, 6 ] ]
```

### Iterable output
To get ranges as an [iterable][iterable-doc-link], use `.toIterable()` method provided.

Example:
```typescript
const range: Rangr = new Rangr([ [1,3], [2,6] ]);
const rangeIterator = range.toIterable();

rangeIterator.next(); // { value: [ 1, 6 ], done: false }
rangeIterator.next(); // { value: undefined, done: true }
```

### Support for ESM and CommonJS

rangr supports both ECMAScript Modules and CommonJS using [Conditional Exports][conditional-exports-doc-link] provided by Node.js.

#### CommonJS
```javascript
const Rangr = require('rangr');
```

#### ESM
```javascript
import Rangr from 'rangr';
```

## Contributions
The package is not very performant in managing th ranges and lacks a rich API. Contributions in the form of issues and PRs are welcome! 🙌🏽

## Install
```bash
npm i rangr
```

## Test
```bash
npm test
```

## License
[MIT License](https://choosealicense.com/licenses/mit/)



[logo-image]: https://res.cloudinary.com/tbking/image/upload/c_scale,w_600/v1593635483/rangr/logo.png
[build-image]:https://img.shields.io/github/workflow/status/tarunbatra/rangr/CI?label=CI&logo=github&style=flat-square
[build-url]:https://github.com/tarunbatra/rangr/actions?query=workflow%3ACI
[codecov-url]: https://codecov.io/gh/tarunbatra/rangr
[codecov-image]: https://img.shields.io/codecov/c/gh/tarunbatra/rangr?logo=codecov&style=flat-square
[npm-image]: https://img.shields.io/npm/v/rangr.svg?style=flat-square&color=magenta
[npm-url]: https://www.npmjs.com/package/rangr
[lang-image]: https://img.shields.io/github/languages/top/tarunbatra/rangr?style=flat-square

[leetcode-problem-url]: https://leetcode.com/problems/merge-intervals/
[iterable-doc-link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol
[conditional-exports-doc-link]: https://nodejs.org/api/esm.html#esm_conditional_exports