import {ecma6Private} from "ecma6Private";

export var singleton = (function (ecma6Private) {
    let instance = 0;
    let singleton = [];
    let db = [
        {name: "55", view: "view"}, {name: "a", view: "s"}
    ];
    class a {
        constructor(id) {
            if (db[id]) {
                for (var i in db[id]) {
                    this[i] = db[id][i];
                }
            } else {
                throw "error SQL";
            }
        }
    }
    const space = new ecma6Private(a);
    let SELF = space.static(), $;
    return function (id) {
        if (singleton[id]) {
            return singleton[id];
        } else {
            return  singleton[id] = new a(id);
        }
    }
})(ecma6Private);

