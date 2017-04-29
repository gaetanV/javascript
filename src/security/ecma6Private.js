/**
 * private_class.js
 *
 * (c) Gaetan Vigneron <gaetan@webworkshops.fr>
 *  V 0.3.2
 *  12/02/2017
 *  
 **/



'use strict'
export const ecma6Private = (function () {
    let instance = 0;
    let space$ = [];
    let space$extend = [];
    return class {
        constructor(public_class) {
            this._ = public_class;
            this.self = {};
            this._.static = function (index) {
                return this.self[index];
            }.bind(this);
            this.$ = class {
            };
        }
        super(call) {
            if (call instanceof this._ == true) {
                if (call["export"]) {
                    let t = call["export"];
                    delete call["export"];
                    let b = function (call) {
                        return t;
                    };
                    return b;
                }
            } else {
                throw "don't try to hack"
            }
        }
        private(call, c) {
            if (call instanceof this._ == true && !call.instance) {
                Object.defineProperty(call, 'instance', {value: instance++, writable: false, enumerable: false, configurable: false});
                let a = c ? new c(call) : new this.$();
                Object.defineProperty(a, 'instance', {value: call.instance, writable: false, enumerable: false, configurable: false});
                space$ [call.instance] = a;
                let b = function (call) {
                    return space$ [call.instance];
                }.bind(this);
                b.extend = function (ext) {
                    Object.defineProperty(call, "export", {value: a, writable: false, enumerable: false, configurable: true});
                }
                return  b;
            } else {
                throw "don't try to hack"
            }
        }    
        static(){
            return this.self;
        } 
        privateExtend(call, c) {
            (call["export"]) && delete call["export"];    
            if (call instanceof this._ == true) {
                let a = c ? new c(call) : new this.$();
                Object.defineProperty(a, 'instance', {value: call.instance, writable: false, enumerable: false, configurable: false});
               space$extend[call.instance] = a;
                let b = function (call) {
                    return space$extend[call.instance];
                }.bind(this);
                return  b;
            } else {
                throw "don't try to hack"
            }
        }
    }
})()
