import {testU} from "test";
import {point} from "point";
import {vector} from "vector";
import {toolsVector} from "toolsVector";
import {toolsPoint} from "toolsPoint";

class mocha {
    constructor(){
        this.test = new testU("MATH.JS");
        this.v0 = new point(0, 0);
        this.v1 =  new point(1, 1);
        this.v2 =  new point(0, 2);
        this.v3 =  new point(0, 2);
        this.v4 = {x: 2};
        this.V0 = new point(0, 0, 0);
        this.V1 =  new point(0, 0, 1);
        this.V2 =  new point(0, 1, 1);
        this.pointBelong();
        this.distance2D();
        this.distance3D();
        this.rotation3D();
        this.rotation2D();
        this.cross();
        this.normalize();
        this.zTriangle();

    }
    pointBelong() {
        this.test.log("<br/>POINT BELONG");
        var graph = this.test.graph();
        var p0 = new point(0, 0, 0);
        var p1 = new point(2, 0, 0);
        var p3 = new point(1, 0, 0);
        var p4 = new point(3, 0, 0);
        var p5 = new point(1, 2, 0);
        var p6 = new point(0, 0, 1);
        graph.point2D(p3);
        graph.point2D(p4);
        graph.point2D(p5);
        graph.point2D(p6);
        var v = new vector();
        v.setPoint(p0, p1);
        graph.vector2D(v);
        this.test.log("0, 0, 0 : " + toolsVector.pointBelong(v, p0));
        this.test.log("1, 0, 0 : " + toolsVector.pointBelong(v, p3));
        this.test.log("3, 0, 0 : " + toolsVector.pointBelong(v, p4));
        this.test.log("1, 2, 0 : " + toolsVector.pointBelong(v, p5));
        this.test.log("0, 0, 1 : " + toolsVector.pointBelong(v, p6));
    }
    distance2D() {
        this.test.log("<br/>DISTANCE");
        var graph = this.test.graph();
        graph.ligne2D(this.v1, this.v2);
        graph.point2D(this.v1);
        graph.point2D(this.v2);
        this.test.log("distance Self: " + this.v1.distance(this.v2));
        this.test.log("distance Math: " + toolsPoint.distance(this.v1, this.v2));
        var graph = this.test.graph();
        graph.point2D(this.v1);
        graph.point2D(this.v3);
        graph.ligne2D(this.v1, this.v3);
        this.test.log("distance Self: " + this.v1.distance(this.v3));
        this.test.log("distance Math: " + toolsPoint.distance(this.v1, this.v3));
        try {
            this.test.log(this.v1.distance());
        } catch (e) {
            this.test.log(e.toString());
        }
        try {
            this.test.log(this.v1.distance(this.v4));
        } catch (e) {
            this.test.log(e.toString());
        }
    }
    distance3D() {
        this.test.log("<br/>DISTANCE 3D");
        this.test.log(this.V0);
        this.test.log(this.V1);
        this.test.log("distance Self: " + this.V1.distance(this.v0));
        this.test.log("distance Math: " + toolsPoint.distance(this.V1, this.V2));
    }
    rotation3D() {
        this.test.log("<br/>ROTATION 3D");
        this.v0 = new point(0, 0, 0);
        this.v1 = new point(0, 1, 0);
        try {
            toolsPoint.rotation(this.v1, this.v0, 90, "xz");
        } catch (e) {
            this.test.log(e.toString());
        }
    }
    rotation2D() {
        this.test.log("<br/>ROTATION");
        this.test.log("rotation 90");
        var graph = this.test.graph();
        graph.point2D(this.v0);
        graph.point2D(this.v1, "#990099");
        graph.point2D(toolsPoint.rotation(this.v1, this.v0, 90), "#1F001F");
        var v4 = new point(1, 0);
        this.test.log("<br/>");
        this.test.log("rotation -180");
        var graph = this.test.graph();
        graph.point2D(v4);
        graph.point2D(this.v0, "#990099");
        graph.point2D(toolsPoint.rotation(this.v0, v4, -180), "#1F001F");
        this.test.log("<br/>");
        this.test.log("rotation self 45 deg");
        var graph = this.test.graph();
        graph.point2D(this.v2);
        graph.point2D(this.v1, "#990099");
        this.v1.rotation(this.v2, "45 deg");
        graph.point2D(this.v1, "#1F001F");
        this.test.log("<br/>");
        this.test.log("rotation Math.PI/4 SELF");
        var graph = this.test.graph();
        graph.point2D(this.v2);
        graph.point2D(this.v0, "#990099");
        this.v0.rotation(this.v2, (Math.PI / 4) + "rad");
        graph.point2D(this.v0, "#1F001F");
        this.test.log("<br/>");
        this.test.log("rotation Math.PI/4 string SELF");
        var graph = this.test.graph();
        graph.point2D(this.v1);
        graph.point2D(this.v2, "#990099");
        this.v2.rotation(this.v1, "PI/4 rad");
        graph.point2D(this.v2, "#1F001F");
    }
    cross() {
        this.test.log("<br/>CROSS");
        var graph = this.test.graph();
        this.v1 = new point(1, 1, 0);
        this.v2 = new point(0, 1, 0);
        this.v0 = new point(1, 2, 0);
        this.v3 = new point(2, 0, 0);
        
        var vector1 = (toolsPoint.vectorBetween(this.v0, this.v3));
        graph.vector2D(vector1);
        var vector2 = new vector();
        vector2.setPoint(this.v1, this.v2);
        graph.vector2D(vector2);
        var vCross = (vector2.cross(vector1));
        this.test.log(vCross);
        graph.point2D(vCross);
    }
    
    normalize() {
        this.v0 = new point(0, 0, 0);
        this.v1 = new point(2, 0, 0);
        this.v2 = new point(1, 0, 0);
        this.v3 = new point(0, 2, 0);

        var vector1 = (toolsPoint.vectorBetween(this.v0, this.v1));
        var vector2 = (toolsPoint.vectorBetween(this.v2, this.v3));

        this.test.log("<br/>NORMALIZE");
        this.test.log(vector1);
        this.test.log(toolsVector.normalize(vector1));

        var vector3 = new vector();
        vector3 = vector1.normalize();

        var vector4 = new vector();
        vector4 = vector2.normalize();

        var graph = this.test.graph();

        graph.vector2D(vector3);
        graph.vector2D(vector4);
        this.test.log(vector2.scalarProduct(vector4));
        var graph = this.test.graph();
        graph.vector2D(vector1);
        graph.vector2D(vector2);
        this.test.log(toolsVector.angleBetweenVector(vector1, vector2));

    }
    zTriangle() {
        this.test.log("<br/>Z IN A PLAN TRIANGLE");
        var p0, p1, p2, p3;
        p0 = new point(0, 0, 0);
        p1 = new point(2, 0, 1);
        p2 = new point(0, 3, 1);
        p3 = new point(0.5, 0.5, 0);
        this.test.log(p0);
        this.test.log(p1);
        this.test.log(p2);
        this.test.log("point in a PLAN Triangle");
        this.test.log(p3);
        var graph = this.test.graph();
        graph.ligne2D(p0, p1);
        graph.ligne2D(p0, p2);
        graph.ligne2D(p1, p2);
        graph.point2D(p3, "1F001F");
        this.test.log(p3.zTriangle(p0, p1, p2));
    }
}
new mocha();