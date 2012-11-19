/*!
 * tea-extend
 * Copyright(c) 2012 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/**
 * ### extend (destination, source, ...)
 *
 * For each source, shallow merge its key/values to the
 * destinatino. Sources are read in order, meaning the same
 * key in a later source will overwrite the key's value earlier
 * set.
 *
 * ```js
 * var extend = require('tea-extend');
 *
 * // sample objects
 * var a = { hello: 'world' }
 *   , b = { speak: 'loudly' };
 *
 * // change a
 * extend(a, b);
 *
 * // shallow clone to c
 * var c = extend({}, a);
 * ```
 *
 * @param {Object} destination
 * @param {Object} sources ...
 * @return {Object} destination extended
 * @api public
 */

module.exports = function () {
  var args = [].slice.call(arguments, 0)
    , res = args[0];

  for (var i = 1; i < args.length; i++) {
    extend(res, args[i]);
  }

  return res;
};

/*!
 * Actually extend
 */

function extend (a, b) {
  if (a && b) {
    for (var key in b) {
      a[key] = b[key];
    }
  }
  return a;
};
