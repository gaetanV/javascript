//TEST MATH.JS
(function() {
    'use strict';
    var test = new testU("MATH.JS");

    var v3={
        x:2,
        y:1
    }

     var v1 = new point2(1,1);
     
     var v2 = new point2(0,2);
     var distance =Math.vector.distance(v1,v2);

     test.log(distance);
     test.log(v1.distanceTo(v2));
     test.log(v1.distanceTo(v3));
     
     var v0 = new point2(0,0);
     
  
      test.log(v1);
      test.log(v2);
      test.log("-------");
     test.log("rotation 90");
     test.log(Math.vector.rotation(v1,v0,90));
     test.log("-------");
     test.log("<br/>");

     var v4 = new point2(1,0);
     test.log(v4);
     test.log(v0);
     test.log("-------");
     test.log("rotation -180");
     test.log(Math.vector.rotation(v4,v0,-180));
      test.log("rotation 90");
     test.log(Math.vector.rotation(v4,v0,90));
     test.log("-------");
     test.log("rotation -90");
     test.log(Math.vector.rotation(v4,v0,-90));
     test.log("-------");
     test.log("rotation 90 SELF");
     v4.rotation(v0,90);
     test.log(v4);
     
     
     
})();