//TEST MATH.JS
(function() {
    'use strict';
    var test = new testU("MATH.JS");


    var v1 = new point(1, 1);
    var v2 = new point(0, 2);
    var v3 = {x: 2, y: 1};

    var v0 = new point(0, 0);

    var v4 = {x: 2};


    var V0 = new point(0, 0, 0);
    var V1 = new point(0, 0, 1);
    var V2 = new point(0, 1, 1);

    distance2D();
    distance3D();
    rotation2D();
    cross();
    normalize();
    rotation3D();
    zTriangle();



    function distance2D() {


        test.log("DISTANCE");

        var graph = test.graph();
        graph.ligne2D(v1, v2);
        graph.point2D(v1);
        graph.point2D(v2);

        test.log("distance Self: " + v1.distance(v2));
        test.log("distance Math: " + Math.point.distance(v1, v2));

        var graph = test.graph();
        graph.point2D(v1);
        graph.point2D(v3);
        graph.ligne2D(v1, v3);
        test.log("distance Self: " + v1.distance(v3));
        test.log("distance Math: " + Math.point.distance(v1, v3));
        try {
            test.log(v1.distance());
        } catch (e) {
            test.log(e.toString());
        }
        try {
            test.log(v1.distance(v4));
        } catch (e) {
            test.log(e.toString());
        }

    }
    ;

    function distance3D() {
        test.log("<br/>DISTANCE 3D");
        test.log(V0);
        test.log(V1);

        test.log("distance Self: " + V1.distance(v0));
        test.log("distance Math: " + Math.point.distance(V1, V2));

    }
    ;

    function rotation3D() {
        test.log("<br/>ROTATION 3D");
        var v0 = new point(0, 0, 0);
        var v1 = new point(0, 1, 0);
        try {
            Math.point.rotation(v1, v0, 90, "xz");
        } catch (e) {

            test.log(e.toString());
        }

    }
    ;

    function rotation2D() {
        test.log("<br/>ROTATION");
        test.log("rotation 90");
        var graph = test.graph();
        graph.point2D(v0);
        graph.point2D(v1, "#990099");

        graph.point2D(Math.point.rotation(v1, v0, 90), "#1F001F");

        var v4 = new point(1, 0);
        test.log("<br/>");
        test.log("rotation -180");
        var graph = test.graph();
        graph.point2D(v4);
        graph.point2D(v0, "#990099");

        graph.point2D(Math.point.rotation(v0, v4, -180), "#1F001F");

        test.log("<br/>");
        test.log("rotation self 45 deg");
        var graph = test.graph();
        graph.point2D(v2);
        graph.point2D(v1, "#990099");
        v1.rotation(v2, "45 deg");

        graph.point2D(v1, "#1F001F");


        test.log("<br/>");
        test.log("rotation Math.PI/4 SELF");
        var graph = test.graph();
        graph.point2D(v2);
        graph.point2D(v0, "#990099");

        v0.rotation(v2, (Math.PI / 4) + "rad");
        graph.point2D(v0, "#1F001F");
        test.log("<br/>");

        test.log("rotation Math.PI/4 string SELF");
        var graph = test.graph();
        graph.point2D(v1);
        graph.point2D(v2, "#990099");

        v2.rotation(v1, "PI/4 rad");
        graph.point2D(v2, "#1F001F");
    }
    ;

    function cross() {
        test.log("<br/>CROSS");
        var graph = test.graph();
        v1 = new point(1, 1, 0);
        v2 = new point(0, 1, 0);
        v0 = new point(1, 2, 0);
        v3 = new point(2, 0, 0);


        var vector1 = (Math.point.vector(v0, v3));
        //  test.log("vector1");
        //   test.log(vector1);
        graph.vector2D(vector1);

        var vector2 = new vector();
        vector2.setPoint(v1, v2);
        //   test.log("vector2");
        //  test.log(vector2);

        graph.vector2D(vector2);

        /*  var vCross=(Math.vector.cross(vector2,vector1));
         test.log(vCross);
         graph.point2D(vCross);
         */
        var vCross = (vector2.cross(vector1));
        test.log(vCross);
        graph.point2D(vCross);
        //  var vector3=v1.vector(v3);
        //  test.log(vector3);


    }
    ;
    function normalize() {

        v0 = new point(0, 0, 0);
        v1 = new point(2, 0, 0);

        v2 = new point(1, 0, 0);
        v3 = new point(0, 2, 0);

        var vector1 = (Math.point.vector(v0, v1));
        var vector2 = (Math.point.vector(v2, v3));

        test.log("<br/>NORMALIZE");
        test.log(vector1);
        test.log(Math.vector.normalize(vector1));

        var vector3 = new vector();
        vector3 = vector1.normalize();

        var vector4 = new vector();
        vector4 = vector2.normalize();
      
        
        var graph = test.graph();

        graph.vector2D(vector3);
        graph.vector2D(vector4);
          test.log(vector2.scalarProduct(vector4));
        var graph = test.graph();

        graph.vector2D(vector1);
        graph.vector2D(vector2);
        test.log(Math.vector.angle(vector1, vector2));

    }

    function zTriangle() {
        test.log("<br/>Z IN A PLAN TRIANGLE");
        var p0, p1, p2, p3;
        p0 = new point(0, 0, 0);
        p1 = new point(2, 0, 1);
        p2 = new point(0, 3, 1);
        p3 = new point(0.5, 0.5, 0);
        test.log(p0);
        test.log(p1);
        test.log(p2);
        test.log("point in a PLAN Triangle");
        test.log(p3);
        var graph = test.graph();

        graph.ligne2D(p0, p1);
        graph.ligne2D(p0, p2);
        graph.ligne2D(p1, p2);
        graph.point2D(p3, "1F001F");
        test.log(p3.zTriangle(p0, p1, p2));

    }
    ;



})();