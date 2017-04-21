import  {toolsPoint} from "./toolsPoint";
import  {toolsVector} from "toolsVector";

export class vector {
    
    constructor(vx, vy, vz) {
        this.vx = vx ? vx : 0;
        this.vy = vy ? vy : 0;
        this.vz = vz ? vz : 0;
    }
    toString() {
        return "[object vector]";
    }

    /**
     * @syntax setPoint(p1,p2 )
     * @param {Point} p1
     * @param {Point} p2 
     * @returns {Self} + p1 + p2
     */
    setPoint(p1, p2) {

        if (p1.toString() === "[object point]" && p2.toString() === "[object point]") {
            var V = toolsPoint.vectorBetween(p1, p2);
            this.vx = V.vx;
            this.vy = V.vy;
            this.vz = V.vz;
            this.p1 = p1;
            this.p2 = p2;
            this.distance = p1.distance(p2);
            this.angle = {
                x: Math.atan2(this.vy, this.vx) + Math.PI
            }
        } else {
            throw new Error("setPoint() The arguments must be a point");
        }
    }

    /*
     * @syntax vectorProduct(v2 )
     * @param {Vector} v2
     * @returns {Float}
     */
    vectorProduct(v2) {
        return toolsVector.vectorProduct(this, v2);
    }
    /**
     * @syntax scalarProduct(v2 )
     * @param {Vector} v2
     * @returns {Vector}
     */
    scalarProduct(v2) {
        return toolsVector.scalarProduct(this, v2);
    }
    /**
     * @syntax normalize( )
     * @returns {Vector}
     */
    normalize() {
        return toolsVector.normalize(this);
    }

    /**
     * @syntax cross(v2)
     * @param {Vector} v2
     * @returns {Point}
     */
    cross(v2) {
        return toolsVector.cross(this, v2);
    }

    /**
     * @syntax angle(v2,type)
     * @param {Vector} v2
     * @param {String} optionnal(deg|rad) type
     * @returns {Float}
     */
    angleBetweenVector(v2, type) {
        return toolsVector.angleBetweenVector(this, v2, type);
    }

    pointBelong(p1) {
        return toolsVector.pointBelong(this, p1);
    }

}




