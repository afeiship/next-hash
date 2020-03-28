const nx = require('@feizheng/next-js-core2');
require('../src/next-hash');

describe('api.basic test', () => {
  test('nx.hash should not equal', function () {
    const obj1 = { name: 'fei' };
    const obj2 = { name: 'fei', age: 100 };
    expect(nx.hash(obj1) === nx.hash(obj2)).toBe(false);
  });

  test('nx.hash should equal', function () {
    const obj1 = { age: 100, name: 'fei' };
    const obj2 = { name: 'fei', age: 100 };
    expect(nx.hash(obj1) === nx.hash(obj2)).toBe(true);
  });
});
