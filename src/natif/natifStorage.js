var toolsObject = function () {
    var toolsObject = {
        parseObject: parseObject
    };
    return toolsObject;

    /**
     * @syntax parseObject(srt)
     * @param {String} srt
     * @returns {Object | Boolean false}
     */
    function parseObject(srt) {
        try {
            var obj = JSON.parse(srt);
            if (obj === "" || !obj)
                return false;
        } catch (e) {
            return false;
        }
        ;
        return obj;
    }
}();



export class natifStorage {
    /**
     * @syntax setObject(key,obj,type)
     * @param {String} key
     * @param {Object | Object Array || String } obj
     * @param {String (optional)"{}"|"[]"} type
     * @returns {Boolean}
     */
    static setObject(key, obj, type) {
        if (typeof key === "number")
            key = key.toString();
        switch (typeof obj) {
            case "number":
                obj = obj.toString();
            case "string":
                try {
                    var obj = JSON.parse(obj);
                } catch (e) {
                    return false;
                }
                ;
                break;
            case "object":
                break;
            default:
                return false;
                break;
        }

        if (typeof key === "string") {
            switch (type) {
                case "[]":
                    obj = Object.prototype.toString.call(obj) === "[object Array]" ? obj : [];
                    break;
                case "{}":
                    obj = Object.prototype.toString.call(obj) === "[object Object]" || obj ? obj : {};
                    break;
                default:
                    break;
            }
            try {
                localStorage.setItem(key, JSON.stringify(obj));
                return  true;
            } catch (e) {
                return  false;
            }
        } else
            return false;
    }

    /**
     * @syntax getObject(key,type)
     * @param {String} key
     * @param {String (optional)"{}"|"[]"} type
     * @returns {Boolean}
     */

    static getObject(key, type) {
        if (typeof key === "number")
            key = key.toString();
        if (typeof key === "string") {
            var obj;
            var item = localStorage.getItem(key);
            obj = toolsObject.parseObject(item);

            if (obj === false) {
                switch (Object.prototype.toString.call(item)) {
                    case "[object Array]":
                        obj = [];
                        break;
                    default:
                        obj = {};
                        break;
                }
            }
            switch (type) {
                case "[]":
                    obj = Object.prototype.toString.call(obj) === "[object Array]" ? obj : [];
                    break;
                case "{}":
                    obj = Object.prototype.toString.call(obj) === "[object Object]" ? obj : {};
                    break;
                default:
                    break;
            }

            return obj;
        } else
            return false;
    }
}
