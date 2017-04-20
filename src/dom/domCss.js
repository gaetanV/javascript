var toolsCss = function () {
    var toolsCss = {
        cssIsInteger: cssIsInteger,
        processInteger: processInteger,
        parseCss: parseCss
    };
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
    }
    /**
     * @syntax processInteger(sOldValue,sNewValue,process)
     * @param {String} sOldValue as sO
     * @param {String} sNewValue as sN
     * @param {String} process 
     * ("+="|"-="|"*="|"/=" )
     * @returns {Integer}
     */
    function processInteger(sO, sN, process) {

        var intO = parseFloat(sO);

        var intN = parseFloat(sN);
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
 * @syntax width()
 * @returns {Integer}
 */
function width() {
    return this.offsetWidth;
}

/**
 * @syntax height()
 * @returns {Integer}
 */
function height() {
    return this.offsetHeight;
}

/**
 * @syntax css(cssNames,operator)
 * @param {String} cssNames as p
 * @param {String} operator as v
 *  before operator optional("+="|"-="|"*="|"/=" )
 *  after operator optional("px")
 * @returns {Self}
 */
function css(p, v) {

    if (typeof p === "string") {
        p = p.trim().toLowerCase();
        if (typeof (v) === "string") {
            var t = typeof (v);
            switch (t) {
                case "string":
                    v = v.trim().toLowerCase();
                    if (toolsCss.cssIsInteger(p)) {
                        if (!this.style[p])
                            this.style[p] = 0 + "px";

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
        return this;
    } else
        return false;
}



export function domCss(e) {
    var e = e[0] ? e[0] : e;
    e.css = css;
    e.height = height;
    e.width = width;
    return e;
}
