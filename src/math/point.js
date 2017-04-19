import  {toolsPoint} from "./toolsPoint";
import  {vector} from "./vector";

/*POINT*/
/**
 * @syntax point()
 */

export function  point(x, y, z) {
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
    var V = toolsPoint.rotation(this, point2, angle, plan);
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
    return toolsPoint.distance(this, p2);
};

/**
 * @syntax vector(p2)
 * @param {Point} p2
 * @returns {vector}
 * vector with points
 */
point.prototype.vector = function (p2) {
    var v = toolsPoint.vector(this, p2);
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
