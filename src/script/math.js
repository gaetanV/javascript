var point, vector;

(function() {
    'use strict';

    /*POINT*/
     /**
     * @syntax point()
     */
    
    point = function(x, y, z) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = z | 0;
    };

     /**
     * @syntax toString()
     * @returns {String} [object point]
     */

    point.prototype.toString = function() {
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
    point.prototype.rotation = function(point2, angle, plan) {
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
    point.prototype.distance= function(p2) {
        return Math.point.distance(this, p2);
    };

    /**
     * @syntax vector(p2)
     * @param {Point} p2
     * @returns {vector}
     * vector with points
     */
    point.prototype.vector = function(p2) {
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
    point.prototype.zTriangle = function(p1, p2, p3) {
        var v1 = new vector();
        v1.setPoint(p1, p2);
        var v2 = new vector();
        v2.setPoint(p1, p3);
        var N = v1.vectorProduct(v2);

        this.z = -(N.vx * (this.x - p1.x) + N.vy * (this.y - p1.y)) / N.vz + p1.z;
        return this;
    }


    var toolsAngle = function() {
        var toolsAngle = {
            toRad: toRad,
            toDeg: toDeg
        };
        return toolsAngle;

        /**
         * @syntax toRad(deg)
         * @param {Float} deg
         * @returns {Float}
         */
        function toRad(deg) {
            return  Math.PI * (deg) / 180;
        }
        ;
        /**
         * @syntax toDeg(rad)
         * @param {Float} rad
         * @returns {Float}
         */
        function toDeg(rad) {
            return 180 * (rad) / Math.PI;
        }
        ;
    };
    Math.angle = toolsAngle();

    var toolsPoint = function() {
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
                        }
                        else
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

    /*VECTEUR*/

    vector = function(vx, vy, vz) {
        this.vx = vx ? vx : 0;
        this.vy = vy ? vy : 0;
        this.vz = vz ? vz : 0;
    };

    vector.prototype.toString = function() {
        return "[object vector]";
    };
    /**
     * @syntax setPoint(p1,p2 )
     * @param {Point} p1
     * @param {Point} p2 
     * @returns {Self} + p1 + p2
     */
    vector.prototype.setPoint = function(p1, p2) {
        var V = Math.point.vector(p1, p2);
        this.vx = V.vx;
        this.vy = V.vy;
        this.vz = V.vz;
        this.p1 = p1;
        this.p2 = p2;
    };


    /**
     * @syntax vectorProduct(v2 )
     * @param {Vector} v2
     * @returns {Float}
     */
    vector.prototype.vectorProduct = function(v2) {
        return Math.vector.vectorProduct(this, v2);
    };

    /**
     * @syntax scalarProduct(v2 )
     * @param {Vector} v2
     * @returns {Vector}
     */
    vector.prototype.scalarProduct = function(v2) {
        return Math.vector.scalarProduct(this, v2);
    };

    /**
     * @syntax normalize( )
     * @returns {Vector}
     */
    vector.prototype.normalize = function() {
        return Math.vector.normalize(this);
    };

    /**
     * @syntax cross(v2)
     * @param {Vector} v2
     * @returns {Point}
     */
    vector.prototype.cross = function(v2) {
        return Math.vector.cross(this, v2);
    };

    /**
     * @syntax angle(v2,type)
     * @param {Vector} v2
     * @param {String} optionnal(deg|rad) type
     * @returns {Float}
     */
    vector.prototype.angle = function(v2, type) {
        return Math.vector.angle(this, v2, type);
    };


    var toolsVecteur = function() {
        var toolsVecteur = {
            vectorProduct: vectorProduct,
            scalarProduct: scalarProduct,
            normalize: normalize,
            angle: angle,
            cross: cross
        };
        return toolsVecteur;

        /**
         * @syntax angle(v1,v2,type)
         * @param {Vector} v1
         * @param {Vector} v2
         * @param {String} optionnal(deg|rad) type
         * @returns {Float}
         */
        function angle(v1, v2, type) {

            var vN1, vN2, vS, angle;
            vN1 = normalize(v1);
            vN2 = normalize(v2);
            vS = scalarProduct(vN1, vN2);

            if (vS.sign() === -1) {
                angle = -Math.acos(vS);

            } else {
                angle = Math.acos(vS);

            }
            switch (type) {
                case "rad":
                    return angle;
                    break;
                case "deg":
                default:
                    return Math.angle.toDeg(angle);
                    break;
            }

        }
        ;


        /**
         * @syntax vectorProduct(v1,v2 )
         * @param {Vector} v1
         * @param {Vector} v2
         * @returns {Float}
         */
        function vectorProduct(v1, v2) {
            var vS = v1.toString();
            var vS2 = v2.toString();
            if ((vS === "[object vector]" && vS2 === "[object vector]")) {
                var v = new vector((v1.vy * (v2.vz) - v2.vy * (v1.vz)), (v1.vz * v2.vx - (v2.vz) * v1.vx), (v1.vx * v2.vy - v2.vx * v1.vy));
                return (v);
            } else {
                throw new Error("vectorProduct() The arguments must be a vector");
            }
            return false;
        }
        ;

        /**
         * @syntax scalarProduct(v1,v2 )
         * @param {Vector} v1
         * @param {Vector} v2
         * @returns {Vector}
         */
        function scalarProduct(v1, v2) {
            if (typeof v1 == "object" && typeof v2 == "object") {
                var vS = v1.toString();
                var vS2 = v2.toString();
                if ((vS === "[object vector]" && vS2 === "[object vector]")) {
                    var result = (v1.vx * v2.vx) + (v1.vy * v2.vy) + (v1.vz * v2.vz);
                    return parseFloat(result);
                } else {
                    throw new Error("scalarProduct() The arguments must be a vector");
                }
                throw new Error("scalarProduct() The arguments must be a object");
            }
            return false;
        }
        ;
        /**
         * @syntax normalize( v1)
         * @param {Vector} v1
         * @returns {Vector}
         */
        function normalize(v1) {
            var norme = Math.sqrt(v1.vx * v1.vx + v1.vy * v1.vy + v1.vz * v1.vz);
            var v = new vector(v1.vx / norme, v1.vy / norme, v1.vz / norme);
            v.p1 = new point(0, 0, 0);
            v.p2 = new point(v.vx, v.vy, v.vz);
            return (v);
        }

        /**
         * @syntax cross(v1,v2)
         * @param {Vector} v1
         * @param {Vector} v2
         * @returns {Point}
         */

        function cross(v1, v2) {
            if (v1.p1 && v1.p2 && v2.p1 && v2.p2) {
                var a = v1.vy === 0 ? 0 : (v1.vy) / (v1.vx);
                var b = v1.p1.y - (a * v1.p1.x);
                var c = v2.vy === 0 ? 0 : (v2.vy) / (v2.vx);
                var d = v2.p1.y - (c * v2.p1.x);
                var x = (d - b) / (a - c);
                var y = a * x + b;
                return new point(x, y);
            } else {
                throw new Error("cross() The arguments must be a vector with point");
            }
            return false;
        }
        ;

    };
    Math.vector = toolsVecteur();


    /**
     * @syntax sign()
     * @returns {integer} 1|0|-1
     */
    Number.prototype.sign = function() {
        return this > 0 ? 1 : this < 0 ? -1 : 0;
    };


})();