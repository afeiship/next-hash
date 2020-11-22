# next-hash
> Get object hash code for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-hash
```

## usage
```js
import '@jswork/next-hash';

nx.hash({ name:'afei', github:'afeiship' }); // 4564597f67d8d0f181d4c4b149834a1994afc7e3
nx.hash({ github:'afeiship', name:'afei' }); // 4564597f67d8d0f181d4c4b149834a1994afc7e3
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-hash/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-hash
[version-url]: https://npmjs.org/package/@jswork/next-hash

[license-image]: https://img.shields.io/npm/l/@jswork/next-hash
[license-url]: https://github.com/afeiship/next-hash/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-hash
[size-url]: https://github.com/afeiship/next-hash/blob/master/dist/next-hash.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-hash
[download-url]: https://www.npmjs.com/package/@jswork/next-hash
