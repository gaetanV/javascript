
import {point} from "point";
import {vector} from "vector";

export function animal() {
    this.class = "animal";
    this.name = "undefined";
    this.points = new Array;
    this.vitesse = {
        move: 12,
        jump: 15,
    };
    this.spriteID = 0;
    this.dom;
}


animal.prototype.setWidth = function (width) {
    if (this.dom) {
        this.dom.style.width = width + "px";
        this.dom.style.height = width * 1.2 + "px";
        var bgX = this.spriteID * width;
        var bgY = this.direction === 1 ? (width * 1.2) : 0;
        this.dom.style.backgroundPosition = "-" + bgX + "px " + bgY + "px";
        return true;
    } else
        return false;
};

animal.prototype.appendTo = function (dom) {
    this.remove();
    var d = document.createElement(this.name);
    d.className = this.class;
    this.dom = d;
    this.setWidth(150);
    dom.appendChild(this.dom);
};

animal.prototype.getPosition = function () {
    var x1 = this.dom.style.left ? parseInt(this.dom.style.left) : 0;
    var y1 = this.dom.style.bottom ? parseInt(this.dom.style.bottom) : 0;
    return new point(x1, y1);
};

animal.prototype.setPosition = function (p1) {
    this.dom.style.left = p1.x + "px";
    this.dom.style.bottom = p1.y + "px";
};

animal.prototype.jump = function (p2, height) {
    var p1 = this.getPosition();
    p1.y += height;
    this.moveTo(p1, this.vitesse.jump, callback);
    var self = this;
    function callback() {
        self.dom.style.zIndex = 0;
        p2.x = parseInt(self.dom.style.left);

        self.moveTo(p2, self.vitesse.jump * 2);
    }
};

animal.prototype.moveTo = function (p2, vitesse, callback) {
    if (typeof vitesse === "undefined")
        vitesse = this.vitesse.move;

    var v = new vector();
    var p1 = this.getPosition();
    var _p1 = this.getPosition();
    v.setPoint(p1, p2);

    var self = this;
    clearInterval(this.animate);
    this.animate = setInterval(function () {
        move.call(self);
    }, 1000 / 29);

    function move() {
        _p1.x -= Math.cos(v.angle.x) * vitesse;
        _p1.y -= Math.sin(v.angle.x) * vitesse;
        if (!v.pointBelong(_p1)) {
            this.setPosition(p2);
            clearInterval(this.animate);
            if (typeof callback === "function") {

                callback();
            }
        }
        this.setPosition(_p1);
    }
};


animal.prototype.remove = function () {
    clearInterval(this.animate);
    if (this.dom)
        this.dom.remove();
};






