/*!
 * name: @jswork/next-hash
 * description: Get object hash code for next.
 * homepage: https://github.com/afeiship/next-hash
 * version: 1.0.0
 * date: 2020-11-22 13:55:33
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var objHash = global.objectHash || require('object-hash');

  nx.hash = function (inTarget) {
    return objHash(inTarget);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.hash;
  }
})();
