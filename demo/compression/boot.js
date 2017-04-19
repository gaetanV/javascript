import {LZW} from "LZW";
new Vue({
    el: '#LZW',
    data: {
        form: {
            compress: '',
            uncompress: ''
        },
        result: {
            table: [],
            size: 0,
            sizeCompress: 0,
        },
    }, methods: {
        compressAction: function (event) {
            var compress = LZW.compress(this.form.compress);
            this.result = compress;
            this.form.uncompress = compress.result;
        },
        uncompressAction: function (event) {
            var val = this.form.uncompress;
            if (typeof val === "string") {
                val = val.split(",");
            }
            var uncompress = LZW.uncompress(val);
            this.result = uncompress;
            this.form.compress = uncompress.result;
        }
    }, created: function () {}
});