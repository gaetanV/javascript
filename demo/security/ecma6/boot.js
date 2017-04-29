import {provider} from "./import/provider.js";
import {extend_private} from "./import/extend_private.js";
import {private_extend_protected_super} from "./import/extend_private.js";
import {private_extend_super} from "./import/extend_private.js";
import {private_class_double} from "./import/private_class_double.js";
import {private_class} from "./import/private_class.js";
import {singleton} from "./import/singleton.js";


try {
    var t = new provider();
} catch (e) {
    console.log(e);
}


var t = new private_class("dd");
console.log(private_class.static("a"));

t.re();
var t = new private_class_double("dd");
var t = new private_extend_protected_super("dd");

t.re();
console.log(private_class_double.static("a"));

var t = new private_extend_protected_super("dd");
var t = new private_extend_super("dd");

var t = new singleton(1);
console.log(t);
var t = new singleton(1);
console.log(t);

var t = new singleton(1);
console.log(t);
var t = new singleton(1);
console.log(t);

