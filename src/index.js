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
