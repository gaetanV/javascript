var pointer;

(function () {
    'use strict';
    pointer = function (dom) {
        this.size = 50;
        this.maxsize = (this.size / 2) * 3;
        this.minsize = this.size / 2;
        this.active = false;

        var d = document.createElement('pointer');

        if (dom) {
            dom.appendChild(d);
        } else {
            document.body.appendChild(d);
        }
        this.dom = d;

        this.dom.addEventListener('mouseover', init);
        var vm = this;
        function init(e) {
            document.removeEventListener('mousemove', init);
            if (!vm.active) {
                vm.active = true;
                vm.dom.addEventListener('mouseover', init);
            }
            ;
        }
        ;

    };


    pointer.prototype.deactivate = function () {
        this.active = false;
    };

    pointer.prototype.initVector = function (v) {
        var width;
        var marginLeft = 0;
        var marginTop = 0;
        if (document.body.clientHeight < document.body.clientWidth) {
            width = document.body.clientHeight;
            marginLeft = (document.body.clientWidth - document.body.clientHeight) / 2;
        } else {
            width = document.body.clientWidth;
            marginTop = (document.body.clientHeight - document.body.clientWidth) / 2;
        }

        var padding = 100;
        var inner = width - (2 * padding);
        var step = inner / 11;
        marginLeft += step * ((11 - 5) / 2);

        var p = new point(((v.p1.x - 1) * step) + marginLeft + padding, ((v.p1.y - 1) * step) + padding + marginTop);

        this.deactivate();
        this.rotate(v);
        this.setPosition(p);
    };


    pointer.prototype.rotate = function (v) {
        this.dom.style.transform = "rotate(" + v.angle.x + "rad)";
    };


    pointer.prototype.getPosition = function () {
        var x1 = this.dom.style.left ? parseInt(this.dom.style.left) : 0;
        var y1 = this.dom.style.top ? parseInt(this.dom.style.top) : 0;
        return new point(x1, y1);
    };

    pointer.prototype.setPosition = function (p1) {

        this.dom.style.left = p1.x + "px";
        this.dom.style.top = p1.y + "px";
    };

})();