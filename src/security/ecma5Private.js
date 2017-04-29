/**
 * classSpace.js
 *
 * (c) Gaetan Vigneron <gaetan@webworkshops.fr>
 *  V 1
 *  05/03/2016
 *  
**/

export var $;
export var ecma5Private;
(function () {
    'use strict';
    ecma5Private = function () {
        var statics = [];
        var classSpace = function (ref) {
            var privateSpaces = new Array, commonSpace = {instance: 0};
            statics[ref] = commonSpace;
            function privateSpace(call) {
                Object.defineProperty(this, 'instance', {value: call.instance, writable: false, enumerable: false, configurable: false});
            }
            return function (ref) {
                if (arguments.length < 1) {
                    return commonSpace;
                }
                return privateSpaces[ref.instance] ? privateSpaces[ref.instance] : privateSpaces[ref.instance] = new privateSpace(ref);
            }
        }
        classSpace.static = function (ref) {
            return statics[ref];
        };
        return classSpace;
    }();
    $ = function (ref) {
        return ecma5Private.static(ref);
    }
})();

    
    