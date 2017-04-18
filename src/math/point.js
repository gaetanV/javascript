var point;

(function () {
    'use strict';

    if (typeof Math.angle != "object") {
        throw new Error("point need library angle");
    }

    /*POINT*/
    /**
     * @syntax point()
     */

    point = function (x, y, z) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = z | 0;
    };

    /**
     * @syntax toString()
     * @returns {String} [object point]
     */

    point.prototype.toString = function () {
        return "[object point]";
    };

    /**
     * @syntax rotation(point2, angle, plan)
     * @param {Point} point2
     * @param {String} angle
     *  after operator optional("deg|rad")
     * @param {String} plan (optional)xy|xz
     * @returns {Self}
     */
    point.prototype.rotation = function (point2, angle, plan) {
        var V = Math.point.rotation(this, point2, angle, plan);
        this.x = V.x;
        this.y = V.y;
        this.z = V.z;
    };


    /**
     * @syntax distance(p2)
     * @param {Point} p2
     * @returns {Float}
     */
    point.prototype.distance = function (p2) {
        return Math.point.distance(this, p2);
    };

    /**
     * @syntax vector(p2)
     * @param {Point} p2
     * @returns {vector}
     * vector with points
     */
    point.prototype.vector = function (p2) {
        var v = Math.point.vector(this, p2);
        v.p1 = this;
        v.p2 = p2;
        return v;
    };

    /**
     * @syntax zTriangle(p1,p2,p3)
     * @param {Point} p1
     * @param {Point} p2
     * @param {Point} p3
     * @returns {Self }
     * + self z
     */
    point.prototype.zTriangle = function (p1, p2, p3) {
        var v1 = new vector();
        v1.setPoint(p1, p2);
        var v2 = new vector();
        v2.setPoint(p1, p3);
        var N = v1.vectorProduct(v2);

        this.z = -(N.vx * (this.x - p1.x) + N.vy * (this.y - p1.y)) / N.vz + p1.z;
        return this;
    }

    var toolsPoint = function () {
        var toolsPoint = {
            rotation: rotation,
            distance: distance,
            vector: vectorBetween
        };
        return toolsPoint;
        /**
         * @syntax vector(p1,p2)
         * @param {Point} p1
         * @param {Point} p2
         * @returns {Vector}
         */
        function vectorBetween(p1, p2) {
            var v = new vector(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
            v.p1 = p1;
            v.p2 = p2;
            return (v);
        }

        /**
         * @syntax distance(p1,p2)
         * @param {Point} p1
         * @param {Point} p2
         * @returns {Float}
         */
        function distance(p1, p2) {
            if (p1 && p2) {
                if (typeof p1.x === "number" && typeof p1.y === "number") {
                    if (typeof p2.x === "number" && typeof p2.y === "number") {
                        if (typeof p1.z === "number" || typeof p2.z === "number") {
                            p1.z = p1.z ? p1.z : 0;
                            p2.z = p2.z ? p2.z : 0;
                            return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2) + Math.pow((p1.z - p2.z), 2));
                        } else
                            return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
                    } else {
                        throw new Error("distance() x & y from second argument must be a number");
                    }
                } else {
                    throw new Error("distance() x & y from first argument must be a number");
                }
            } else
                throw new Error("distance() need two arguments ");
            return false;
        }

        /**
         * @syntax rotation(p,pCenter angle, plan)
         * @param {Point} p
         * @param {Point} pCenter 
         * @param {String} angle
         *  after operator optional("deg|rad")
         * @param {String} plan (optional) xy|xz
         * @returns {Point}
         */
        function rotation(p, pCenter, angle, plan) {
            if (typeof plan === "undefined")
                plan = "xy";

            if (typeof angle === "string" || typeof angle === "number") {
                if (typeof angle === "string") {
                    var s = angle.substring(angle.length - 3, angle.length);
                    angle = angle.trim();
                    angle = angle.replace("PI", Math.PI);

                    switch (s) {
                        case "rad":
                            angle = angle.substring(0, angle.length - 3);
                            angle = eval(angle);
                            break;
                        case "deg":
                            angle = angle.substring(0, angle.length - 3);
                        default :
                            angle = eval(angle);
                            angle = Math.angle.toRad(angle);
                            break;
                    }
                    ;
                } else {
                    angle = Math.angle.toRad(angle);
                }
                switch (plan) {
                    case "xz":
                        throw new Error("rotation(xz) you need to calculate it yet"); // TO DO
                        break;
                    case "xy":
                    default:
                        var diffXT = p.x - pCenter.x;
                        var diffYT = p.y - pCenter.y;
                        var x, y;
                        x = diffXT * Math.cos(angle) - diffYT * Math.sin(angle);
                        y = diffXT * Math.sin(angle) + diffYT * Math.cos(angle);
                        x = Math.round(x * 100) / 100;
                        y = Math.round(y * 100) / 100;
                        var position = new point((x + pCenter.x), (y + pCenter.y));
                        return position;
                        break;
                }
            } else {
                return false;
            }
        }
        ;

    };
    Math.point = toolsPoint();

})();