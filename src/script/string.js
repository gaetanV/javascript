(function () {
    'use strict';
    String.prototype.apply = function (array) {
        var format = this;

        for (var i in  array)
            format = format.replace("{{" + i + "}}", array[i]);

        return format;
    };
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };

    String.prototype.template = function (params) {
        var names = [], vals = [];
        for (var i  in params) {
            names.push(i);
            vals.push(params[i]);
        }
        return new Function(names, 'return \`${this}\`;').apply(this, vals);
    }

})();


    