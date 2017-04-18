var motion;

(function () {
    'use strict';
    var posOrtho = {x: 0, y: 1, z: 2};

    motion = function (param) {
        var section = document.createElement("section");
        section.id = "motion";
        document.body.appendChild(section);
        var canvas = document.createElement("canvas");

        canvas.style.position = "fixed";
        canvas.style.zIndex = "500";

        section.appendChild(canvas);

        this.style = {
            width: 130,
            height: (140 / 6) * 12,
            bottom: 180,
            left: 280
        };

        this.pointer = new pointer(section);

        this.ctx = canvas.getContext('2d');
        this.dom = canvas;
        this.setRatio(1);

        ///userPrecision calculation
        this.precisionLevel = param ? param.precisionLevel ? param.precisionLevel : 3 : 3;
        ///if affiche next marker
        this.drawnNextMarker = param ? param.drawnNextMarker ? param.drawnNextMarker : false : false;
        ///move sensitivity
        this.sensitivityWeighting = param ? param.sensitivityWeighting ? sensitivityWeighting : 80 : 80;



        //data    
        this.shape = new Array;
        this.userPrecision;
        this.marker;

    };

    motion.prototype.setRatio = function (ratio) {

        if (!this.pointer.active) {
            if (this.marker) {
                this.pointer.initVector(this.marker.vector);
            }
        }
        ;

        this.dom.width = this.style.width * ratio;
        this.dom.height = this.style.height * ratio;
        this.dom.style.bottom = this.style.bottom * ratio + "px";
        this.dom.style.left = this.style.left * ratio + "px";

        this.circleSize = ratio * this.style.width / 20;
        this.markerSize = ratio * this.style.width / 10;
        this.step = (this.style.width - (4 * this.circleSize)) / 7 * ratio;
        if (this.shape && this.marker) {
            this.draw();
        }
        ;
    };

    motion.prototype.analysis = function (arrayPoint, emove) {

        this.setShape(arrayPoint);
        for (var i = 0; i < emove.length; i++) {
            var p = new point(emove[i].x, emove[i].y);
            this.move(p);
        }
        ;
        return this.userPrecision;
    };


    motion.prototype.mouseFollow = function (arrayPoint, callback, e) {


        if (e)
            this.cursorOld = e.pageX, e.pageY

        document.addEventListener('mousemove', move);
        var vm = this;
        function move(e) {
            var p = new point(e.pageX, e.pageY);
            if (!vm.move(p)) {
                callback(vm);
                document.removeEventListener('mousemove', move);
            }
        }
        ;

        this.setShape(arrayPoint);

    }

    motion.prototype.setShape = function (arrayPoint) {
        this.userPrecision = 0;
        this.shape = new Array;

        for (var i = 0; i < arrayPoint.length - 1; i++) {
            var pV = new vector();
            var point1 = new point(arrayPoint[i][posOrtho.x], arrayPoint[i][posOrtho.y]);
            var point2 = new point(arrayPoint[i + 1][posOrtho.x], arrayPoint[i + 1][posOrtho.y]);
            pV.setPoint(point1, point2);
            this.shape.push(pV);
        }
        ;

        this.marker = new marker(this.shape[0], 0);
        this.pointer.initVector(this.shape[0]);
        this.draw();
    }

    motion.prototype.move = function (point2) {
        if (this.pointer.active) {
            this.pointer.setPosition(point2);

            if (!this.cursorOld)
                this.cursorOld = point2;

            var vCursor = new vector();

            var point1 = new point(this.cursorOld.x, this.cursorOld.y);

            vCursor.setPoint(point1, point2);
            this.cursorOld = point2;

            /* Angle difference  */
            var diffAngle = vCursor.angle.x - this.marker.vector.angle.x;

            if (diffAngle > Math.PI) {
                diffAngle = this.marker.vector.angle.x - vCursor.angle.x;
            }



            /* RESTRICT  ANGLE +90 ou -90 ° */
            diffAngle = Math.abs(diffAngle);
            /* ACCURY  */


            //console.log(Math.round(Math.pow((diffAngle*10),  this.precisionLevel)* vCursor.distance/100));

            if (diffAngle > Math.PI / 2)
                diffAngle = Math.PI / 2;
            /* Angle Reverse  */
            var invDiffAngle = (Math.PI / 2 - diffAngle);
            var precision;
            if (invDiffAngle > 0) {
                precision = Math.pow((invDiffAngle * 10), this.precisionLevel) * vCursor.distance;
            } else {
                precision = Math.pow((4 * 10), this.precisionLevel) * vCursor.distance;
            }
            this.userPrecision -= precision;


            /* CALCULE  NEW POSITION */
            if (invDiffAngle > 0) {
                var posX = this.marker.x - (Math.pow((invDiffAngle), 2) * vCursor.distance * Math.cos(this.marker.vector.angle.x) / (this.sensitivityWeighting));
                var posY = this.marker.y - (Math.pow((invDiffAngle), 2) * vCursor.distance * Math.sin(this.marker.vector.angle.x) / (this.sensitivityWeighting));

                if (this.marker.move(new point(posX, posY))) {
                    this.draw();
                } else {
                    var id = this.marker.id + 1;
                    if (id >= this.shape.length)
                        return false;
                    this.marker = new marker(this.shape[id], id);
                    this.pointer.rotate(this.shape[id]);
                }
                ;
            }


        }
        return true;
    };


    motion.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.dom.offsetWidth, this.dom.offsetHeight);

        this.ctx.strokeStyle = '#8B5E3C';

        for (var i = 0; i < this.shape.length; i++) {
            //BUILD LIGNE
            this.ctx.beginPath();

            this.ctx.moveTo(this.shape[i].p1.x * this.step, this.shape[i].p1.y * this.step);
            this.ctx.lineTo(this.shape[i].p2.x * this.step, this.shape[i].p2.y * this.step);
            this.ctx.stroke();
            this.ctx.closePath();
        }

        for (var i = 0; i < this.shape.length; i++) {

            //BUILD CIRCLE
            this.ctx.beginPath();

            this.ctx.arc(this.shape[i].p1.x * this.step, this.shape[i].p1.y * this.step, this.circleSize, 0, Math.PI * 2, true);
            if (i > this.marker.id) {
                if (i === this.marker.id + 1) {
                    this.ctx.fillStyle = "rgba(139, 94, 60, 1)";
                    this.ctx.fill()
                } else {
                    if (this.drawnNextMarker) {
                        this.ctx.fillStyle = "rgba(139, 94, 60, 0.2)";
                        this.ctx.fill();
                    }
                }
            } else {
                this.ctx.fillStyle = "rgba(118, 78, 41, 1)";
                this.ctx.fill()
            }
            this.ctx.closePath();
        }

        //BUILD MARKER
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(118, 78, 41, 0.3)";
        this.ctx.arc(this.marker.x * this.step, this.marker.y * this.step, this.markerSize, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();
    }
})();