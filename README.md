# next-hash
> Get object hash code for next.

## installation
```bash
npm install -S @feizheng/next-hash
```

## usage
```js
import '@feizheng/next-hash';

nx.hash({ name:'afei', github:'afeiship' }); // 4564597f67d8d0f181d4c4b149834a1994afc7e3
nx.hash({ github:'afeiship', name:'afei' }); // 4564597f67d8d0f181d4c4b149834a1994afc7e3
```
