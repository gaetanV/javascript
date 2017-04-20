var Super = function(e){
    this.str = e;
};

Super.prototype.apply = function (array) {
    var format = this.str;

    for (var i in  array)
        format = format.replace("{{ " + i + " }}", array[i]);

    return format;
};

Super.prototype.replaceAll = function (search, replacement) {
    var target = this.str;
    return target.replace(new RegExp(search, 'g'), replacement);
};

Super.prototype.template = function (params) {
    var names = [], vals = [];
    for (var i in params) {
        names.push(i);
        vals.push(params[i]);
    }
    return new Function(names, 'return \`'+this.str+' \`;').apply([], vals);
}

export function natifString(e) {
    return new Super(e);
} 