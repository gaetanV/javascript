import {ecma6Private} from "ecma6Private";

export var private_class_double = (function (ecma6Private) {
    class a {
        constructor() {
            console.log("PRIVATE_DOUBLE");
            SELF.a = "ddd";
            $ = space.private(this,
                    class priv {
                constructor(pub) {
                    pub.test = "___";
                    this.c = "ddd";
                }
                re() {
                    console.log("re privte");
                }
            }
            );
            $(this).a = "5";
            this.a = "545"
            console.log($(this));
            console.log(this);
        }
        re() {
            $(this).re();
            console.log("genial");
        }
    }
    const space = new ecma6Private(a);
    let SELF = space.static(a), $;
    return a;
})(ecma6Private);

