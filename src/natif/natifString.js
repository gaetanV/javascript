class Super {
    constructor(e) {
        this.str = e;
    }
    apply(array) {
        var format = this.str;

        for (var i in  array)
            format = format.replace("{{ " + i + " }}", array[i]);

        return format;
    }

    replaceAll(search, replacement) {
        var target = this.str;
        return target.replace(new RegExp(search, 'g'), replacement);
    }

    template(params) {
        var names = [], vals = [];
        for (var i in params) {
            names.push(i);
            vals.push(params[i]);
        }
        return new Function(names, 'return \`' + this.str + ' \`;').apply([], vals);
    }
}

export function natifString(e) {
    return new Super(e);
} 