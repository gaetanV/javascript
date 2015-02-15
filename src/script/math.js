var point2, point3, vector3 ,vector2;

(function() {
    'use strict';

    /*POINT*/
    /*2D*/
    point2 = function(x, y) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
    };
    point2.prototype.toString=function(){
        return "[object point2]";
    };
    
    point2.prototype.rotation = function(point2, angle, type) {
        var V = Math.point.rotation(this, point2, angle, type);
        this.x = V.x;
        this.y = V.y;
    };

    point2.prototype.distanceTo = function(point2) {
        return Math.point.distance(this, point2);
    };

    /*3D*/
    point3 = function(x, y, z) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = parseFloat(z);
    };
     point2.prototype.toString=function(){
        return "[object point3]";
    };
    
    point3.prototype.rotation = function(point3, angle, type) {
        var V = Math.point.rotation(this, point3, angle, type); //TODO
        this.x = V.x;
        this.y = V.y;
        this.z = V.y;
    };

    point3.prototype.distanceTo = function(point3) {
        return Math.point.distance(this, point3); //TODO
    };

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
            distance: distance
        };
        return toolsPoint;

        function distance(v1, v2) {
           if(v1 && v2){
                if( typeof v1.x ==="number" && typeof v1.y==="number"){
                    if( typeof v2.x ==="number" && typeof v2.y==="number"){
                             if(typeof v1.z==="number" || typeof v2.z==="number") {
                               return Math.sqrt(Math.pow((v1.x - v2.x), 2) + Math.pow((v1.y - v2.y), 2)+ Math.pow((v1.z|0 - v2.z|0), 2));
                             }
                             else  return Math.sqrt(Math.pow((v1.x - v2.x), 2) + Math.pow((v1.y - v2.y), 2));
                     }else{
                           throw new Error( "distance() x & y from second argument must be a number");
                     }
                 }else{
                     throw new Error( "distance() x & y from first argument must be a number");
                 }
             }else  throw new Error( "distance() need two arguments ");
            return false;
        }

        function rotation(v, vCenter, angle, typeA) {
            var diffXT = v.x - vCenter.x;
            var diffYT = v.y - vCenter.y;
            var x, y;
            switch (typeA) {
                case "rad":
                    break;
                case "deg":
                default :
                    angle = Math.angle.toRad(angle);
                    break;
            } ;
             
            x = diffXT * Math.cos(angle) - diffYT * Math.sin(angle);
            y = diffXT * Math.sin(angle) + diffYT * Math.cos(angle);
            x = Math.round(x * 100) / 100;
            y = Math.round(y * 100) / 100;
            var position = new point2((x + vCenter.x), (y + vCenter.y));
            return position;
        }
        ;

    };
    Math.point = toolsPoint();

    /*VECTEUR*/
    
    /*2D*/
    vector2 = function(vx, vy) {
        this.vx = vx;
        this.vy = vy;
    };
    vector2.prototype.toString=function(){
        return "[object vector2]";
    };
    
    vector2.prototype.produitVectoriel=function(v2){
        return produitVectoriel(this,v2);
    };
    
    vector2.prototype.produitScalaire=function(v2){
        return produitScalaire(this,v2);
    };
    
     /*3D*/
    vector3 = function(vx, vy, vz) {
        this.vx = vx;
        this.vy = vy;
        this.vz = vz;
    };
    
    vector3.prototype.toString=function(){
        return "[object vector3]";
    };
    
    vector3.prototype.produitVectoriel=function(v2){
        return produitVectoriel(this,v2);
    };
    
    vector3.prototype.produitScalaire=function(v2){
        return produitScalaire(this,v2);
    };
    
    var toolsVecteur = function() {
        var toolsVecteur = {
            produitVectoriel: produitVectoriel,
            produitScalaire: produitScalaire,
            cross:cross
        };
        return toolsVecteur;
        
        function produitVectoriel(v1,v2){
              var vS= v1.toString();
              var vS2= v2.toString();
              if(  (vS ==="[object vector2]" || vS==="[object vector3]" ) && (vS2 ==="[object vector2]" || vS2==="[object vector3]" ) ){
                  return (
                            new vector3((v1.vy*(v2.vz|0)-v2.vy*(v1.vz|0)),(v1.vz*v2.vx-(v2.vz|0)*v1.vx), (v1.vx*v2.vy-v2.vx*v1.vy))
                  );
              }else{
                   throw new Error( "produitVectoriel() The arguments must be à vecteur of two or three dimensional");
              }
              return false;
        };
        
        function produitScalaire(v1,v2){
              var vS= v1.toString();
              var vS2= v2.toString();
              if(  (vS ==="[object vector2]" || vS==="[object vector3]" ) && (vS2 ==="[object vector2]" || vS2==="[object vector3]" ) ){
                     return (v1.vx*v2.vx + v1.vy*v2.vy +(v1.vz|0)*(v2.vz|0));
                }else{
                   throw new Error( "produitScalaire() The arguments must be à vecteur of two or three dimensional");
              }  return false;
        };
        
        
        function cross(){
            
        };
        
    };
    Math.vecteur = toolsVecteur();


})();