/*ARRAY*/
(function(){
    'use strict';
    /**
    * @syntax shuffle()
    * @returns {self}
    */
    Array.prototype.shuffle=function(){
        for (var i = this.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = this[i];
            this[i] = this[j];
            this[j] = t;
        }
        return this;
    };

    /**
     * @syntax limit(maxLenght,isShift)
     * @param {Number} maxLenght as n
     * @param {Boolean (optional)shift|pop} isShift as shift
     * @returns {Boolean}
     */
    Array.prototype.limit = function(n,shift){
                if(typeof(shift)==="undefined") shift=false;
                if(this.length>n){
                     shift?   this.splice(n,this.length-n) :this.splice(0,this.length-n); 
                     return true;
                }; 
                return false;
     };
})();

        