var snake, monkey, elephant, lion, giraffe;

(function () {
    'use strict';
    var animal = function animal() {
        this.class = "animal";
        this.name = "undefined";
        this.points = new Array;
        this.vitesse = {
            move: 12,
            jump: 15,
        };
        /// 0 -> 30

        this.spriteID = 0;
        this.dom;
    };



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
        ;
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
                ;

            }
            ;
            this.setPosition(_p1);
        }
        ;
    };


    animal.prototype.remove = function () {
        clearInterval(this.animate);
        if (this.dom)
            this.dom.remove();
    };


    lion = function lion(direction) {
        animal.call(this);
        this.direction = direction;
        this.spriteID = 0;
        this.name = "lion";
        switch (direction) {
            default:
            case 1:
                this.points = [[4, 4], [6, 5], [7, 7], [6, 9], [4, 10], [2, 9], [1, 7], [2, 5], [4, 4]];
                break;
            case - 1:
                this.points = [[4, 4], [2, 5], [1, 7], [2, 9], [4, 10], [6, 9], [7, 7], [6, 5], [4, 4]];
                break;
        }
    };
    lion.prototype = Object.create(animal.prototype);




    giraffe = function giraffe(direction) {
        animal.call(this);
        this.direction = direction;
        this.spriteID = 1;
        this.name = "giraffe";
        switch (direction) {
            default:
            case 1:
                this.points = [[7, 1], [7, 12], [6, 10], [4, 9], [2, 10], [1, 12]];
                break;
            case - 1:
                this.points = [[1, 1], [1, 12], [2, 10], [4, 9], [6, 10], [7, 12]];
                break;
        }
    };
    giraffe.prototype = Object.create(animal.prototype);

    monkey = function monkey(direction) {
        animal.call(this);
        this.direction = direction;
        this.spriteID = 2;
        this.name = "monkey";
        switch (direction) {
            default:
            case 1:
                this.points = [[1, 12], [2, 8], [3, 3], [5, 3], [6, 8], [7, 12]];
                break;
            case - 1:
                this.points = [[7, 12], [6, 8], [5, 3], [3, 3], [2, 8], [1, 12]];
                break;
        }
    };
    monkey.prototype = Object.create(animal.prototype);


    snake = function snake(direction) {
        animal.call(this);
        this.direction = direction;
        this.spriteID = 3;
        this.name = "snake";
        switch (direction) {
            default:
            case 1:
                this.points = [[7, 4], [6, 2], [4, 1], [2, 2], [1, 4], [2, 6], [4, 7], [6, 8], [7, 10], [6, 12], [4, 13], [2, 12], [1, 10]];
                break;
            case - 1:
                this.points = [[1, 4], [2, 2], [4, 1], [6, 2], [7, 4], [6, 6], [4, 7], [2, 8], [1, 10], [2, 12], [4, 13], [6, 12], [7, 10]];
                break;
        }
    };
    snake.prototype = Object.create(animal.prototype);


    elephant = function elephant(direction) {
        animal.call(this);
        this.direction = direction;
        this.spriteID = 4;
        this.name = "elephant";
        switch (direction) {
            default:
            case 1:
                this.points = [[1, 12], [1, 4], [2, 2], [4, 1], [6, 2], [7, 4], [6, 6], [4, 7], [2, 6], [1, 4]];
                break;
            case - 1:
                this.points = [[7, 12], [7, 4], [6, 2], [4, 1], [2, 2], [1, 4], [2, 6], [4, 7], [6, 6], [7, 4]];
                break;
        }
    };
    elephant.prototype = Object.create(animal.prototype);


})();


