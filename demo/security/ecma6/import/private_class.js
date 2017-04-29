import {ecma6Private} from "ecma6Private";

export var private_class = (function (ecma6Private) {
    class a {
        constructor() {
            $ = space.private(this);
            SELF.a = "static";
            this.o = "aa";
            $(this).test = "ss";
            $(this).re = () => {
                console.log("private");
                console.log(this);
            }
            console.log($(this));
        }
        re() {
            $(this).re();
            console.log("genial");
        }
    }
    const space = new ecma6Private(a);
    let SELF = space.static(), $;
    return a;
})(ecma6Private);

