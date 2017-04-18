var LZW;
(function () {
    'use strict';


    LZW = function LZW() {
    };

    LZW.compress = function (uncompressed) {
        var dictionary = dictionaryASIIByChar();
        var dictSize = 255;
        var pw = "";

        var table = new Array;
        var compressed = new Array;
        for (var i = 0; i < uncompressed.length; i++) {
            var ligne = {};
            ligne.pw = pw; //previous word encoded
            ligne.c = uncompressed.charAt(i);  //current word
            ligne.cw = ligne.pw + ligne.c; // current word encoded

            if (dictionary[ligne.cw]) {
                pw = ligne.cw;
            } else {
                dictionary[ligne.cw] = ++dictSize;
                ligne.dictionary = dictionary[ligne.cw];
                ligne.sortie = dictionary[pw];
                pw = ligne.c;
                compressed.push(ligne.sortie);
            }
            table.push(ligne);
        }
        if (pw !== "")
            compressed.push(dictionary[pw]); // ENCODE THE LAST WORD
        return {result: compressed, table: table, sizeCompress: compressed.length * 8, size: uncompressed.length * 8};
    };

    LZW.uncompress = function (compressed) {
        var dictionary = dictionaryASIIByID();
        var dictSize = 255;
        var pw = String.fromCharCode(compressed[0]);

        var table = new Array;
        var uncompressed = "";

        for (var i = 0; i < compressed.length; i++) {
            var ligne = {};
            ligne.k = compressed[i];  //current key
            if (dictionary[ligne.k]) {
                ligne.sortie = dictionary[ligne.k];
            } else {
                ligne.sortie = pw + pw.charAt(0);
            }
            dictionary[dictSize] = pw + ligne.sortie.charAt(0);
            ligne.dictionary = dictionary[dictSize];
            table.push(ligne);
            dictSize++;
            pw = ligne.sortie;
            uncompressed += ligne.sortie;

        }
        ;
        return {result: uncompressed, table: table, sizeCompress: compressed.length * 8, size: uncompressed.length * 8};
    };



    function dictionaryASIIByChar() {
        var dictionary = new Array;
        //ASII ENCODING
        for (var i = 0; i < 255; i += 1) {
            dictionary[String.fromCharCode(i)] = i;
        }
        return dictionary;
    }

    function dictionaryASIIByID() {
        var dictionary = new Array;
        //ASII ENCODING
        for (var i = 0; i < 255; i += 1) {
            dictionary[i] = String.fromCharCode(i);
        }
        return dictionary;
    }

})();