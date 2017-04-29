/**
 * interface.js
 *
 * (c) Gaetan Vigneron <gaetan@webworkshops.fr>
 *  V 0.3.2
 *  12/02/2017
 *  
 **/
'use strict'
export const ecma6Interface = class {
        constructor(mapping){
            this.mapping = mapping;
        }  
        check(that){
            for(var i in this.mapping){
                //TODO: Type + Args
                if( !Reflect.has(that, i)) throw "error";   
            }
            return true;
        }
}

