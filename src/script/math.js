var point2, point3, vector3 ,vector2;

(function() {
    'use strict';

    /*POINT*/
    /*2D*/
    point2 = function(x, y) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
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
    point3.prototype.rotation = function(point3, angle, type) {
        var V = toolsPoint.rotation(this, point3, angle, type); //TODO
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
            var d = Math.sqrt(Math.pow((v1.x - v2.x), 2) + Math.pow((v1.y - v2.y), 2));
            return d;
        }

        function rotation(v, vCenter, angle, typeA) {
            var diffXT = v.x - vCenter.x;
            var diffYT = v.y - vCenter.y;
            var x, y;
            switch (typeA) {
                case "rad":
                    x = diffXT * Math.cos(angle) - diffYT * Math.sin(angle);
                    y = diffXT * Math.sin(angle) + diffYT * Math.cos(angle);
                    break;
                case "deg":
                default :
                    angle = Math.angle.toRad(angle);
                    x = diffXT * Math.cos(angle) - diffYT * Math.sin(angle);
                    y = diffXT * Math.sin(angle) + diffYT * Math.cos(angle);
                    break;
            }
            ;
            x = Math.round(x * 100) / 100;
            y = Math.round(y * 100) / 100;
            var position = new point2((x + vCenter.x), (y + vCenter.y));
            return position;
        }
        ;

    };
    Math.point = toolsPoint();

    /*VECTEUR*/
    /*3D*/
    vector2 = function(vx, vy) {
        this.vx = vx;
        this.vy = vy;
    };
    
    vector3 = function(vx, vy, vz) {
        this.vx = vx;
        this.vy = vy;
        this.vz = vz;
    };

    var toolsVecteur = function() {
        var toolsVecteur = {
            produitVectoriel: produitVectoriel,
            produitScalaire: produitScalaire,
            normalise:normalise,
            cross:cross
        };
        return toolsVecteur;
        
        function produitVectoriel(){
            
        };
        
        function produitScalaire(v1,v2){
              //TO DO Y 2D
              return (v1.vx*v2.vx + v1.vy*v2.vy + v1.vz*v2.vz);
        };
        
        function normalise(){
            
        };
        
        function cross(){
            
        };
        
    };
    Math.vecteur = toolsVecteur();


})();