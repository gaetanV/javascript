import {ecma6Private} from "ecma6Private";

export var private_extend = (function (ecma6Private) {
    class a {
        constructor() {
            $ = space.private(this);
            $.extend();
            SELF = "a";
            this.test = "a";
            $(this).t = "dd";
            console.log(SELF);
        }
        re() {

        }
    }
    const space = new ecma6Private(a);
    let SELF = space.static(), $;
    return a;
})(ecma6Private, private_extend_super);


export var private_extend_protected_super = (function (ecma6Private) {
    class a extends private_extend {
        constructor() {
            console.log("private_extend");
            super();
            $ = space.super(this);
            this.ee = "sss";
            SELF = "ddd";
            $(this).op = "aa";
            console.log(this);
            console.log($(this));
            console.log(SELF);
        }
    }
    const space = new ecma6Private(a);
    let SELF = space.static(a), $;
    return a;
})(ecma6Private);


export var private_extend_super = (function (ecma6Private) {
    class a extends private_extend {
        constructor() {
            console.log("------------");
            console.log("private_extend_supers");
            super();
            $ = space.privateExtend(this);
            $(this).te = "j";
            SELF = "ddd";
            console.log(this);
            console.log("------------");
            console.log($(this));
            console.log(SELF);
        }
    }
    const space = new ecma6Private(a);
    let SELF = space.static(a), $;
    return a;
})(ecma6Private);