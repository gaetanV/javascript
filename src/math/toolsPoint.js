import  {point} from "./point";
import  {vector} from "./vector";
import  {toolsAngle} from "./toolsAngle";

export class toolsPoint{
  
    /**
    * @syntax vector(p1,p2)
    * @param {Point} p1
    * @param {Point} p2
    * @returns {Vector}
    */
   static vectorBetween(p1, p2) {
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
    static distance(p1, p2) {
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
 static rotation(p, pCenter, angle, plan) {
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
                     angle = toolsAngle.toRad(angle);
                     break;
             };
         } else {
             angle = toolsAngle.toRad(angle);
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

 
};
