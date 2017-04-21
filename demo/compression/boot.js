import {LZW} from "LZW";
Vue.component('form-custom', {
    template: `
    <section>
        <h1>Compression LZW </h1>
        <div>
            <textarea class="valCompresse" v-model="form.compress"  type="texte"></textarea>
            <a class="bt"   v-on:click="compressAction"  href="#" >Compresse </a>
        </div>
        <div>
            <textarea  class="valCompresse" v-model="form.uncompress"  type="texte"></textarea>
            <a class="bt" v-on:click="uncompressAction"  href="#" >Uncompress </a>
        </div>
        <div>
            <div>{{result.table}}</div>
            <div>size (bit)  {{result.size}}</div>
            <div> sizeCompress  (bit)  {{result.sizeCompress}}</div>
        </div>
    </section>
    `,
    data: () => {
        return  {
            form: {
                compress: '',
                uncompress: ''
            },
            result: {
                table: [],
                size: 0,
                sizeCompress: 0,
            },
        }
    }
    , methods: {
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
    }
});

var dom = document.createElement('form-custom');
dom.id = "LZW";
document.body.appendChild(dom);
new Vue({
    el: '#LZW'

});