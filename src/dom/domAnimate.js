var fps = 30;

import  {domCss} from "./domCss";


function cloneAnimate(vm) {
    var clone = function () { 
        this.style= vm.style;
    };
       for (var fn in vm) {
        (function () {
            var func = vm[fn];
      
            if (typeof func == "function") {
                
                if (fn === "animate" ) {
                    clone.prototype[fn] = animate;
                }else if(fn === "delay"){
                    clone.prototype[fn] = delay;
                    
                }else {
                    clone.prototype[fn] = function () {
                        var param = [];
                        for (var i = 0; i < arguments.length; i++) {
                            param.push(arguments[i])
                        }
                        vm.pushAnimate(func, param);
                        return new clone;
                    };
                }
            }
        })();
    }

  
    return new clone;
}



function pushAnimate(func, param) {

    var lenght = func === "delay" || func === "animate" ? Math.round(param[0] / 1000 * fps) : 0;
    var keyframe = 0;
    if (this.$animate.list[ this.$animate.list.length - 1])
        keyframe = this.$animate.list[ this.$animate.list.length - 1].keyEnd;

    var anim = {
        func: func,
        param: param,
        keyEnd: keyframe + lenght,
        keyStart: keyframe
    };

    this.$animate.list.push(anim);

}
;

function play() {
    var vm = this;

    if (this.$animate.state !== 1) {
        var idAnim = getIdAnim.call(this);
        this.$animate.state = 1;
        this.$animate.interval = setInterval(function () {
            nextFrame.call(vm);
        }, 1000 / fps);
    }
    function getIdAnim() {
        for (var i = 0; i < this.$animate.list.length; i++) {
            if (this.$animate.keyframe >= this.$animate.list[i].keyStart && this.$animate.keyframe <= this.$animate.list[i].keyEnd)
                return i;
        }
        return false;
    }
    function exe(anim) {
        switch (anim.func) {
            case "delay":
                if (this.$animate.keyframe >= anim.keyEnd) {
                    nextIsAnimate.call(this);
                }
                ;

                return true;
                break;
            case "animate":
                var keyRemaining = anim.keyEnd - this.$animate.keyframe;
                if (keyRemaining <= 0) {

                    nextIsAnimate.call(this);
                } else {

                    for (var i in anim.param[1]) {
                        var diff = (parseInt(anim.param[1][i]) - parseInt(this.style[i]));
                        //HEXA COLOR TO DO  + if not this.style.param
                        this.css(i, "+=" + diff / keyRemaining);
                    }
                }


                return true;
                break;
            default:
                nextIsAnimate.call(this);
                anim.func.apply(this, anim.param);
                return true;
                break;
        }
        function nextIsAnimate() {

            idAnim++;
            var anim = this.$animate.list[idAnim];

            if (anim) {
                if (typeof anim.func != "String")
                    exe.call(this, anim);
            }
        }
        function exeCSS(anim) {

        }
    }
    function nextFrame() {
        var anim = this.$animate.list[idAnim]
        if (anim) {
            this.$animate.keyframe++;
            //  console.log(this.$animate.keyframe);
            exe.call(this, anim);
        } else {
            this.clearAnimate();
            console.log("animate end");
        }
    }
}


function clearAnimate() {
    clearInterval(this.$animate.interval);
    this.$animate.state = 0;
    this.$animate.list = new Array();
    this.$animate.keyframe = 0;
}

function delay(time) {
    this.pushAnimate("delay", [time]);
    this.play();
    return cloneAnimate(this);
}


function animate(json, time) {
    this.pushAnimate("animate", [time, json]);
    this.play();
    return cloneAnimate(this);
}

export function domAnimate(e) {
    var e = e[0] ? e[0] : e;
    e.$animate = {};
    e.$animate.list = new Array();
    e.$animate.keyframe = 0;
    e.$animate.state = 0;
    e.animate = animate;
    e.delay = delay;
    e.clearAnimate = clearAnimate;
    e.pushAnimate = pushAnimate;
    e.play = play;
    return e;
}




