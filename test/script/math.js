//TEST MATH.JS
(function() {
    'use strict';
    var test = new testU("MATH.JS");

      var v3={x:2,y:1 };
      var v1 = new point2(1,1);
      var v2 = new point2(0,2);
      var v0 = new point2(0,0);
      var v4={x:2 };
      
      var V0 = new point3(0,0,0);
      var V1 = new point3(1,0,0);
      
      var V2 = new point3(0,0,1);
      
    // distance2D();
     distance3D();
     
     rotation2D();
     
     function distance2D(){
        test.log("DISTANCE");
  
        test.log(Math.point.distance(v1,v2));
        test.log(v1.distanceTo(v2));
        test.log(v1.distanceTo(v3));
        
        try{
            test.log(v1.distanceTo());
        }catch(e){
            test.log(e.toString());
        }
        try{
            test.log(v1.distanceTo(v4));
        }catch(e){
            test.log(e.toString());
        }
          
     };
     
      function distance3D(){
            test.log(V1.distanceTo(V0));
            test.log(V1.distanceTo(v0));
            test.log(Math.point.distance(V1,V2))
      };
      
     function rotation2D(){
          test.log("ROTATION");
            test.log(v1);
            test.log(v2);
            test.log("-------");
           test.log("rotation 90");
           test.log(Math.point.rotation(v1,v0,90));
           test.log("-------");
           test.log("<br/>");

           var v4 = new point2(1,0);
           test.log(v4);
           test.log(v0);
           test.log("-------");
           test.log("rotation -180");
           test.log(Math.point.rotation(v4,v0,-180));
            test.log("rotation 90");
           test.log(Math.point.rotation(v4,v0,90));
           test.log("-------");
           test.log("rotation -90");
           test.log(Math.point.rotation(v4,v0,-90));
           test.log("-------");
           test.log("rotation 90 SELF");
           v4.rotation(v0,90);
           test.log(v4);
       };
     
     
})();