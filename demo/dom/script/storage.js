//TEST STORAGE.JS
(function () {
    'use strict';
    var test = new testU("STORAGE.JS");
    var keyStorage = "usBDe2r";
    var keyObject = 25;
    var ch = [];

console.log("a");
    for (var i = 0; i < 5; i++) {
        ch = localStorage.getObject(keyStorage, "[]");

        ch.push(Math.floor(Math.random() * 10));

        ch.limit(13);
        localStorage.setObject(keyStorage, ch, "[]");

    }

    test.log(localStorage.getObject(keyStorage));

    var ch = {};
    for (var i = 0; i < 5; i++) {
        if (i % 2 === 0) {
            ch = localStorage.getObject(keyObject, "{}");
        } else {
            ch = localStorage.getObject(keyObject);
        }
        ch[i] = Math.floor(Math.random() * 10);
        localStorage.setObject(keyObject, ch, "{}");
    }
    test.log(localStorage.getObject(keyObject));

    keyObject = Math.random() * 500;

    localStorage.setObject(keyObject, []);
    localStorage.setObject(keyObject, "[]");
    for (var i = 0; i < 5; i++) {
        ch = localStorage.getObject(keyObject);

        ch[i] = "error" + Math.floor(Math.random() * 10);
        localStorage.setObject(keyObject, ch, "[]");
        // localStorage.setObject(keyObject,ch);   
    }
    test.log(localStorage.getObject(keyObject));


    keyObject = Math.random() * 500;

    for (var i = 0; i < 5; i++) {
        ch = localStorage.getObject(keyObject, "[]");

        ch[i] = "error" + Math.floor(Math.random() * 10);
        localStorage.setObject(keyObject, ch, "[]");
        // localStorage.setObject(keyObject,ch);   
    }


    test.log(localStorage.getObject(keyObject));

})();
