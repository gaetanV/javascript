import {testU} from "test";
import {natifStorage} from "natifStorage";
import {natifArray} from "natifArray";
import {natifString} from "natifString";

var test = new testU("STORAGE.JS");

test.log( natifString("a c a").replaceAll("a","b"));
test.log( natifString("translate {{ a }}").apply({a:"b"}));
test.log( natifString("${a} ${scope}").template({a:"b",scope:"double scope"}));

var keyStorage = "usBDe2r";


var keyObject = 25;
var ch = [];

for (var i = 0; i < 5; i++) {
    ch = natifStorage.getObject(keyStorage, "[]");
    ch.push(Math.floor(Math.random() * 10));
    natifArray.limit(ch,15);
    natifStorage.setObject(keyStorage, ch, "[]");
}

test.log(natifStorage.getObject(keyStorage));

var ch = {};
for (var i = 0; i < 5; i++) {
    if (i % 2 === 0) {
        ch = natifStorage.getObject(keyObject, "{}");
    } else {
        ch = natifStorage.getObject(keyObject);
    }
    ch[i] = Math.floor(Math.random() * 10);
    natifStorage.setObject(keyObject, ch, "{}");
}
test.log(natifStorage.getObject(keyObject));

keyObject = Math.random() * 500;

natifStorage.setObject(keyObject, []);
natifStorage.setObject(keyObject, "[]");
for (var i = 0; i < 5; i++) {
    ch = natifStorage.getObject(keyObject);
    ch[i] = "error" + Math.floor(Math.random() * 10);
    natifStorage.setObject(keyObject, ch, "[]");
}
test.log(natifStorage.getObject(keyObject));


keyObject = Math.random() * 500;

for (var i = 0; i < 5; i++) {
    ch = natifStorage.getObject(keyObject, "[]");
    ch[i] = "error" + Math.floor(Math.random() * 10);
    natifStorage.setObject(keyObject, ch, "[]");
}


test.log(natifStorage.getObject(keyObject));
 