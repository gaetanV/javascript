(function() {
    'use strict';
  /**
     * @syntax sign()
     * @returns {integer} 1|0|-1
     */
    Number.prototype.sign = function() {
        return this > 0 ? 1 : this < 0 ? -1 : 0;
    };
    })();
