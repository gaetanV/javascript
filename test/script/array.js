//TEST ARRAY.JS
(function() {
    'use strict';
    var test = new testU("ARRAY.JS");


    var vArray = new Array();
    //  test.logMethode(vArray);

    /*SHUFFLE*/
    shuffle(vArray, 2);
    shuffle(vArray, 3);
    var zArray = shuffle(vArray, 6);

    /*LIMIT*/
    limit(zArray, 5);
    limit(zArray, 3, false);


    function shuffle(array, nb) {
        var array = new Array();
        test.log("shuffle : " + nb);
        for (var i = 0; i < nb; i++) {
            array.push(i);
        }
        array.shuffle();
        test.log(array);
        return array;
    }

    function limit(array, nb, shift) {
        test.log("limit : " + nb + ((shift || typeof (shift) === "undefined") ? " shift" : "pop"));
        array.limit(nb, shift);
        test.log(array);
    }
})();
