/*
 * Copyright (c) 2015 Dickson Tam
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 */

(function(root) {

  function setEq(a, b) {


    if (a == b) return true;
    if (!a || !b) return false;

    if (!(a instanceof Set) || (!b instanceof Set))
      throw new Error('Set comparision attempted with a non-set');

    if(a.size !== b.size) return false;

    for (var e of a) {
      if (!b.has(e)) {
        return false;
      }
    }

    return true;
  }

  if (typeof(module) != 'undefined' && module && module.exports) {
    module.exports = setEq;
  } else if (typeof define === 'function' && define.amd) {
    define('es6-set-eq', [], function() {
      return setEq;
    });
  } else {
    root.setEq = setEq;
  }
})(this)
