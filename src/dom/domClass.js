/**
 * @syntax removeClass(classNames)
 * @param {String} classNames as n
 * accept multi string as array with space character
 * @returns {Boolean}
 */
function removeClass(n) {
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
}
/**
 * @syntax addClass(classNames)
 * @param {String} classNames as n
 * accept multi string as array with space character
 * @returns {Boolean}
 */
function addClass(n) {
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
}


export function domClass(e) {
    var e = e[0] ? e[0] : e;
    e.removeClass = removeClass;
    e.addClass = addClass;
    return e;
}
