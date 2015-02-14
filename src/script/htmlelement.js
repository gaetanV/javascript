/*HTMLELEMENT*/
(function() {
    'use strict';

    /*********************
     CSS
     *********************/
   
    var toolsCss = function() {
        var toolsCss = {
            cssIsInteger: cssIsInteger,
            processInteger: processInteger,
            parseCss: parseCss
        }
        return toolsCss;
        
        /**
         * @syntax cssIsInteger(cssNames,operator)
         * @param {String} cssNames as p
         * @returns {Boolean}
         */
        function cssIsInteger(p) {
            return (
                    p === "height" || p === "width" ||
                    p === "left" || p === "right" || p === "top" || p === "bottom" ||
                    p === "padding-left" || p === "padding-right" || p === "padding-top" || p === "padding-bottom" ||
                    p === "margin-left" || p === "margin-right" || p === "margin-top" || p === "margin-bottom"
                    ) ? true : false;
        };
        
        
        /**
         * @syntax processInteger(sOldValue,sNewValue,process)
         * @param {String} sOldValue as sO
         * @param {String} sNewValue as sN
         * @param {String} process 
         * ("+="|"-="|"*="|"/=" )
         * @returns {Integer}
         */
        function processInteger(sO, sN, process) {
            var intO = parseInt(sO);
            var intN = parseInt(sN);
            var v;
            switch (process) {
                case "+=":
                    v = intO + intN;
                    break;
                case "-=":
                    v = intO - intN;
                    break;
                case "/=":
                    v = intO / intN;
                    break;
                case "*=":
                    v = intO * intN;
                    break;
            }
            return v;
        }
        
        /**
         * @syntax processInteger(fullValueCss)
         * @param {String} fullValueCss as str
         * @returns {Object}
         * full
         * process ("+=" | "-=" | "/=" | "*=" | false)
         * type ("px" | "%" | "en")
         * value ( full without  process and type);
         */
         function parseCss(str) {
            var css = {};
            css.full = str;

            var s = str.substring(0, 2);
            if (s === "+=" || s === "-=" || s === "/=" || s === "*=") {
                css.process = s;
                str = str.substring(2, str.length);
            } else {
                css.process = false;
            }

            if (isPx(str)) {
                css.value = (str.substring(0, str.length - 2));
                css.type = "px";
                return css;
            }
            if (isPourcent(str)) {
                css.value = (str.substring(0, str.length - 1));
                css.type = "%";
                return css;
            }
            if (isEm(str)) {
                css.value = (str.substring(0, str.length - 1));
                css.type = "en";
                return css;
            }

            css.value = (str);
            css.type = "";
            return css;

            function isPourcent(str) {
                return   str.substring(str.length - 1, str.length) == "%" ? true : false;
            }

            function isPx(str) {
                return   str.substring(str.length - 2, str.length) == "px" ? true : false;
            }

            function isEm(str) {
                return   str.substring(str.length - 2, str.length) == "em" ? true : false;
            }
        }
    }();

    /**
     * @syntax css(cssNames,operator)
     * @param {String} cssNames as p
     * @param {String} operator as v
     *  before operator optional("+="|"-="|"*="|"/=" )
     *  after operator optional("px")
     * @returns {Self}
     */
    HTMLElement.prototype.css = function(p, v) {
        if (typeof p === "string") {
            p = p.trim().toLowerCase();
            if (typeof (v) === "string") {
                var t = typeof (v);
                switch (t) {
                    case "string":
                        v = v.trim().toLowerCase();
                        if (toolsCss.cssIsInteger(p)) {
                            var O = toolsCss.parseCss(this.style[p]);
                            var N = toolsCss.parseCss(v);
                            if (N.process != false)
                                var v = toolsCss.processInteger(O.value, N.value, N.process);
                            else
                                var v = N.value;
                            N.type = N.type == "" ? O.type == "" ? "px" : O.type : N.type;
                            v += N.type
                        }
                        this.style[p] = v;
                        break;
                }
            }
            return this.style[p];
        } else
            return false;
    };


    /**
     * @syntax addClass(classNames)
     * @param {String} classNames as n
     * accept multi string as array with space character
     * @returns {Boolean}
     */
    HTMLElement.prototype.addClass = function(n) {
        if (typeof n === "string") {
            n = n.trim().toLowerCase();
            var $a, $b;
            if (this.className) {
                $a = this.className.split(" ");
            } else
                $a = [];
            $b = n.split(" ");
            for (var i = 0; i < $b.length; i++) {
                var nE = $b[i];
                if (($a).indexOf(nE) === -1) {
                    $a.push(nE);

                }
            }
            this.className = $a.join(" ");
            return true;
        } else
            return false;
    };


    /**
     * @syntax removeClass(classNames)
     * @param {String} classNames as n
     * accept multi string as array with space character
     * @returns {Boolean}
     */
    HTMLElement.prototype.removeClass = function(n) {
        if (typeof n === "string") {
            n = n.trim().toLowerCase();
            var $i, $a, $b;
            $b = n.split(" ");
            $a = this.className.split(" ");
            for (var i = 0; i < $b.length; i++) {
                var nE = $b[i];
                $i = ($a).indexOf(nE);
                if (($i) !== -1)
                    $a.splice($i, 1);
            }
            this.className = $a.join(" ");
            return true;
        } else
            return false;
    };


    /**************************
     DOM Insertion, Inside
    ************************** */
       
     /**
     * @syntax append(value)
     * @param {String | Object | Object Dom } value as d
     * @returns {Boolean}
     */
    HTMLElement.prototype.append = function(d) {
        if (typeof d === "string") {
            this.insertAdjacentHTML('beforeend', d);
            return true;
        } else {
            if (typeof d === "object") {
                if (Object.prototype.toString.call(d) === "[object Object]" || Object.prototype.toString.call(d) === "[object Array]") {
                    d = JSON.stringify(d);
                    this.insertAdjacentHTML('beforeend', d);
                }
                try {
                    this.appendChild(d);
                } catch (e) {
                    return false;
                }
                return true;
            }
        }
        return false;
    };
    
      /**
     * @syntax prepend(value)
     * @param {String | Object | Object Dom } value as d
     * @returns {Boolean}
     */
    HTMLElement.prototype.prepend = function(d) {
          if (typeof d === "string") {
            this.insertAdjacentHTML('afterbegin', d);
            return true;
        } else {
              if (Object.prototype.toString.call(d) === "[object Object]" || Object.prototype.toString.call(d) === "[object Array]") {
                    d = JSON.stringify(d);
                    this.insertAdjacentHTML('afterbegin', d);
                }
                try {
                    this.insertBefore(d,this.firstChild);
                } catch (e) {
                    return false;
                }
                return true;
        }
        return false;
    };
    
     /**************************
     DOM Insertion, Outside
    ************************** */
   
    /**
     * @syntax after(value)
     * @param {String | Object | Object Dom } value as d
     * @returns {Boolean}
     */
     HTMLElement.prototype.after = function(d) {
            var parent = this.parentNode;
            if (typeof d === "string") {
                 this.insertAdjacentHTML('afterend', d);
            return true;
             } else {
                 if (Object.prototype.toString.call(d) === "[object Object]" || Object.prototype.toString.call(d) === "[object Array]") {
                    d = JSON.stringify(d);
                    this.insertAdjacentHTML('afterend', d);
                }
                 try {
                  parent.insertBefore(d, this.nextSibling);
                  } catch (e) {
                    return false;
                };
           }
           return false;
     };
     
     /**
     * @syntax before(value)
     * @param {String | Object | Object Dom } value as d
     * @returns {Boolean}
     */
     HTMLElement.prototype.before = function(d) {
            var parent = this.parentNode;
           if (typeof d === "string") {
                  this.insertAdjacentHTML('beforebegin', d);
            return true;
             } else {
                 if (Object.prototype.toString.call(d) === "[object Object]" || Object.prototype.toString.call(d) === "[object Array]") {
                    d = JSON.stringify(d);
                    this.insertAdjacentHTML('beforebegin', d);
                 }
                  try {
                    parent.insertBefore(d, this);
                     } catch (e) {
                    return false;
                };
           }
       };

     
})();