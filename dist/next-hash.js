/*!
 * name: @feizheng/next-hash
 * description: Get object hash code for next.
 * url: https://github.com/afeiship/next-hash
 * version: 1.0.0
 * date: 2020-03-28 13:02:35
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var objHash = global.objectHash || require('object-hash');

  nx.hash = function (inTarget) {
    return objHash(inTarget);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.hash;
  }
})();

//# sourceMappingURL=next-hash.js.map
