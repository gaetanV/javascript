import  {vector} from "./vector";
import  {point} from "./point";
import  {toolsAngle} from "./toolsAngle";
import  {toolsNumber} from "./toolsNumber";

export class toolsVector{
    
    static pointBelong(v1, p1) {
        var v2 = new vector();
    
        v2.setPoint(v1.p1, p1);

        var vP = v2.vectorProduct(v1);
    
        if (vP.vx == 0 && vP.vy == 0 && vP.vz == 0) {
            var sP1 = v2.scalarProduct(v1);
            var sP2 = v1.scalarProduct(v1);
            if (0 <= sP1 && sP1 <= sP2) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * @syntax angleBetweenVector(v1,v2,type)
     * @param {Vector} v1
     * @param {Vector} v2
     * @param {String} optionnal(deg|rad) type
     * @returns {Float}
     */
    static angleBetweenVector(v1, v2, type) {

        var vN1, vN2, vS, angle;
        vN1 = toolsVector.normalize(v1);
        vN2 = toolsVector.normalize(v2);
      
        vS =  toolsVector.scalarProduct(vN1, vN2);

       
        if (toolsNumber.sign(vS) === -1) {
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
                return toolsAngle.toDeg(angle);
                break;
        }

    }
    


    /**
     * @syntax vectorProduct(v1,v2 )
     * @param {Vector} v1
     * @param {Vector} v2
     * @returns {Float}
     */
    static vectorProduct(v1, v2) {
        var vS = v1.toString();
        var vS2 = v2.toString();
        if ((vS === "[object vector]" && vS2 === "[object vector]")) {
            var x = Math.round((v1.vy * (v2.vz) - v2.vy * (v1.vz)) * 100) / 100;
            var y = Math.round((v1.vz * v2.vx - (v2.vz) * v1.vx) * 100) / 100;
            var z = Math.round((v1.vx * v2.vy - v2.vx * v1.vy) * 100) / 100;
            var v = new vector(x, y, z);
            return (v);
        } else {
            throw new Error("vectorProduct() The arguments must be a vector");
        }
        return false;
    }
    

    /**
     * @syntax scalarProduct(v1,v2 )
     * @param {Vector} v1
     * @param {Vector} v2
     * @returns {Vector}
     */
    static scalarProduct(v1, v2) {
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
    
    /**
     * @syntax normalize( v1)
     * @param {Vector} v1
     * @returns {Vector}
     */
    static normalize(v1) {
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

    static cross(v1, v2) {
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
   
    
}
