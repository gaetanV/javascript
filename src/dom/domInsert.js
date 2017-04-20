/**************************
 DOM Insertion, Inside
 ************************** */
/**
 * @syntax append(value)
 * @param {String | Object | Object Dom } value as d
 * @returns {Boolean}
 */
function append(d) {
   
    if (typeof d === "string") {
        this.insertAdjacentHTML('beforeend', d);
        return true;
    } else {
        if (typeof d === "object") {
            if (d.toString(d) === "[object Object]" || d.toString(d) === "[object Array]") {
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
}
;

/**
 * @syntax prepend(value)
 * @param {String | Object | Object Dom } value as d
 * @returns {Boolean}
 */
function prepend(d) {
    if (typeof d === "string") {
        this.insertAdjacentHTML('afterbegin', d);
        return true;
    } else {
        if (d.toString(d) === "[object Object]" || d.toString(d) === "[object Array]") {
            d = JSON.stringify(d);
            this.insertAdjacentHTML('afterbegin', d);
        }
        try {
            this.insertBefore(d, this.firstChild);
        } catch (e) {
            return false;
        }
        return true;
    }
    return false;
}
;

/**************************
 DOM Insertion, Outside
 ************************** */

/**
 * @syntax after(value)
 * @param {String | Object | Object Dom } value as d
 * @returns {Boolean}
 */
function after(d) {
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
        }
    }
    return false;
}
;

/**
 * @syntax before(value)
 * @param {String | Object | Object Dom } value as d
 * @returns {Boolean}
 */
function before(d) {
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
        }
        ;
    }
}

export function domInsert(e) {
    var e = e[0] ? e[0] : e;
    e.before = before;
    e.after = after;
    e.prepend = prepend;
    e.append = append;
    return e;
}
