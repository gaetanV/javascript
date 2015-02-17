var point,vector;

(function() {
    'use strict';

    /*POINT*/
    /*2D*/
    point = function(x, y, z) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z=z|0;
    };
    point.prototype.toString=function(){
        return "[object point]";
    };
    
    point.prototype.rotation = function(point2, angle, plan) {
        var V = Math.point.rotation(this, point2, angle, plan);
        this.x = V.x;
        this.y = V.y;
        this.z = V.z;
    };

    point.prototype.distanceTo = function(point2) {
        return Math.point.distance(this, point2);
    };
    
    point.prototype.vector=function(p1){
        var v=Math.point.vector(this,p1);
        v.p1=p1;
        v.p2=this;
        return v ;
    };
    
    point.prototype.zbyvector=function(v1,v2){
        /*TO DO + TEST*/
           if(v1.p1 && v1.p2  && v2.p1 && v2.p2){
              
                var p1=v1.p1;
                var p2=v1.p2;
                ///SI P1=P2
                  var N = produitVectoriel(v1,v2);
                
                  return  -(N.vx*(this.x-p2.x) + N.vy*(this.y-p2.y))/N.vz + p2.z;
            }else{
                   throw new Error( "zbyvector() The arguments must be a vector with point");
            }
            return false;
    }




    var toolsAngle = function() {
        var toolsAngle = {
            toRad: toRad,
            toDeg: toDeg
        };
        return toolsAngle;

        function toRad(deg) {
            return  Math.PI * (deg) / 180;
        }
        ;
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
            vector:vectorBetween
        };
        return toolsPoint;

        function vectorBetween(p1, p2) {

             var v=new vector( p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
             v.p1=p1;
             v.p2=p2;
             return (v);
        }

        function distance(p1, p2) {
         
           if(p1 && p2){
                if( typeof p1.x ==="number" && typeof p1.y==="number"){
                    if( typeof p2.x ==="number" && typeof p2.y==="number"){
                             if(typeof p1.z==="number" || typeof p2.z==="number") {
                                p1.z= p1.z?p1.z:0;
                                p2.z= p2.z?p2.z:0;
                               return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2)+ Math.pow((p1.z - p2.z), 2));
                             }
                             else  return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
                     }else{
                           throw new Error( "distance() x & y from second argument must be a number");
                     }
                 }else{
                     throw new Error( "distance() x & y from first argument must be a number");
                 }
             }else  throw new Error( "distance() need two arguments ");
            return false;
        }

        function rotation(v, vCenter, angle ,plan) {
            if(typeof plan==="undefined")  plan="xy";
            
        
            if( typeof angle=="string" ||  typeof angle=="number" ){
          
                
                 if( typeof angle=="string"){
                       var s = angle.substring( angle.length-3, angle.length);
                       angle = angle.trim();
                       angle = angle.replace("PI", Math.PI);
   
                        switch (s) {
                            case "rad":
                                   angle= angle.substring(0 ,angle.length-3);
                                    angle=eval(angle);
                                break;
                            case "deg":
                                   angle= angle.substring(0 ,angle.length-3);
                            default :
                                angle=eval(angle);
                                angle = Math.angle.toRad(angle);
                                break;
                        } ;
                  }else{
                        angle = Math.angle.toRad(angle);
                  }
                  switch(plan){
                      case "xz":
                          //TO DO 
                        break;
                      case "xy":
                      default:
                          var diffXT = v.x - vCenter.x;
                          var diffYT = v.y - vCenter.y;
                           var x, y;
                            x = diffXT * Math.cos(angle) - diffYT * Math.sin(angle);
                            y = diffXT * Math.sin(angle) + diffYT * Math.cos(angle);
                            x = Math.round(x * 100) / 100;
                            y = Math.round(y * 100) / 100;
                            var position = new point((x + vCenter.x), (y + vCenter.y));
                            return position;
                          break;
                  }         
            }else{
                return false;
            }
        }
        ;

    };
    Math.point = toolsPoint();

    /*VECTEUR*/
   
    vector = function(vx,vy,vz) {
 
        this.vx = vx?vx:0;
        this.vy = vy?vy:0;
        this.vz = vz?vz:0;
    };

   vector.prototype.setPoint=function(p1, p2){
          var V= Math.point.vector(p1, p2);
          this.vx = V.vx;
          this.vy = V.vy;
          this.vz = V.vz;
          this.p1=p1;
          this.p2=p2;
    };
    
    vector.prototype.toString=function(){
        return "[object vector]";
    };
    
    vector.prototype.produitVectoriel=function(v2){
        return Math.vector.produitVectoriel(this,v2);
    };
    
    vector.prototype.produitScalaire=function(v2){
        return Math.vector.produitScalaire(this,v2);
    };
    
    vector.prototype.normalize=function(){
        return Math.vector.normalize(this); 
    };
 
    vector.prototype.cross=function(v2){
         return Math.vector.cross(this,v2); 
    };
    
    
    var toolsVecteur = function() {
        var toolsVecteur = {
            produitVectoriel: produitVectoriel,
            produitScalaire: produitScalaire,
            normalize:normalize,
            cross:cross
        };
        return toolsVecteur;
        
        function produitVectoriel(v1,v2){
             //TO DO TEST
              var vS= v1.toString();
              var vS2= v2.toString();
              if(  (vS ==="[object vector]" && vS2==="[object vector]" )  ){
                  var v= new vector((v1.vy*(v2.vz)-v2.vy*(v1.vz)) , (v1.vz*v2.vx-(v2.vz)*v1.vx) ,  (v1.vx*v2.vy-v2.vx*v1.vy));
                  return (v);
              }else{
                   throw new Error( "produitVectoriel() The arguments must be a vector");
              }
              return false;
        };
        
        function produitScalaire(v1,v2){
            if(typeof v1=="object" && typeof v2=="object"){
                var vS= v1.toString();
                var vS2= v2.toString();
                if(  (vS ==="[object vector]" && vS2==="[object vector]" )  ){
                           var result=(v1.vx*v2.vx) + (v1.vy*v2.vy) + (v1.vz*v2.vz);
                       return result ;
                  }else{
                     throw new Error( "produitScalaire() The arguments must be a vector");
                } throw new Error( "produitScalaire() The arguments must be a object");
            }
             return false;
        };
        
        function normalize (v1){
            var norme = Math.sqrt(v1.vx*v1.vx + v1.vy*v1.vy + v1.vz*v1.vz);
            var v=new vector(v1.vx/norme, v1.vy/norme, v1.vz/norme);
            v.p1=new point(0,0,0);
            v.p2=new point(v.vx,v.vy,v.vz);
            return (v);
        }
        
        function cross(v1,v2){
               if(v1.p1 && v1.p2  && v2.p1 && v2.p2){
                        var  a=v1.vy===0?0:(v1.vy)/(v1.vx);
                        var b=v1.p1.y-(a*v1.p1.x) ;
                        var c=v2.vy===0?0:(v2.vy)/(v2.vx);
                        var d=v2.p1.y-(c*v2.p1.x) ;
                        var x=(d-b)/(a-c);
                        var y=a*x+b;
                        return new point(x,y);
                }else{
                       throw new Error( "cross() The arguments must be a vector with point");
                }
                return false;     
        };
        
    };
    Math.vector = toolsVecteur();


})();