//TEST
 var testU;
 
(function() {
     'use strict';
     var graph=function(dom){
          var vm=this;
          var canvas=document.createElement("canvas");
          canvas.width=100;
          canvas.height=100;
          
          dom.appendChild(canvas);
          this.ctx = canvas.getContext('2d'); 
          this.scale=canvas.width/6;

          this.X=canvas.width;
          this.Y=canvas.height  ;
          
          var p1={ x: this.X/2, y:0  };
          var p2={ x: this.X/2,y: this.Y  };
          var p3={x: 0, y:this.Y/2};
          var p4={x:  this.X ,y:this.Y/2 };
          
          for(var i=0; i<(this.X/this.scale);i++){
              var pT1={ x: i*this.scale, y:this.Y/2-2  };
              var pT2={ x:i*this.scale,y:this.Y/2+2  };
              this.drawligne(pT1,pT2);
          }
            for(var i=0; i<(this.Y/this.scale);i++){
              var pT1={ y: i*this.scale, x:this.X/2-2  };
              var pT2={ y:i*this.scale,x:this.X/2+2  };
              this.drawligne(pT1,pT2);
          }
          this.drawligne(p1,p2);
          this.drawligne(p3,p4);
       
          vm.dom=canvas;
     };

     
     graph.prototype.drawpoint=function(p1,color){
         if(!color) color= '#FF5050';
         this.ctx.strokeStyle = color;
         this.ctx.beginPath();
        this.ctx.arc( p1.x, p1.y, 2, 0, 2 * Math.PI, true);
         this.ctx.stroke();
         this.ctx.closePath();
       
     }
      graph.prototype.drawligne=function(p1,p2,color){
          if(!color) color= '#8B5E3C';
          this.ctx.strokeStyle = color;
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x  , p1.y );
          this.ctx.lineTo( p2.x, p2.y);
          this.ctx.stroke(); 
           this.ctx.closePath();
          
     }
     
     graph.prototype.vector2D=function(v){
                 this.point2D(v.p1);
                 this.point2D(v.p2,"#990099");
                  this.ligne2D(v.p1,v.p2);
     };
     
     graph.prototype.scalePoint=function(p1){
        var pS={ x:0,y:0 };
        pS.x=this.scale*p1.x;
        pS.x=pS.x+(this.X/2);
        pS.y=this.scale*p1.y;
        pS.y=pS.y+(this.Y/2);
       
       return pS;
     };
     
     
     graph.prototype.point2D=function(p1,color){
       var pS1=this.scalePoint(p1);
  
       this.drawpoint(pS1,color);
     };
     
     graph.prototype.ligne2D=function(p1,p2,color){
       var pS1=this.scalePoint(p1);
       var pS2=this.scalePoint(p2);
        
       this.drawligne(pS1,pS2,color);    
     };
     
      testU=function (name){
         var vm=this;
         var msgDom=document.createElement("div");
         msgDom.className="test";
         var title=document.createElement("h1");
         var txt=document.createTextNode(name);
         title.appendChild(txt);
         msgDom.appendChild(title);
         
         document.body.appendChild(msgDom);
         vm.dom=msgDom;
     };
     
     testU.prototype.graph=function(){
       
         return  new graph(this.dom);
     };
     

     
     testU.prototype.log=function(message){
 
         switch(typeof(message)){
              case "number":
                   message=message.toString();
             case "string":
                 this.dom.insertAdjacentHTML('beforeend', "<p>"+message+"</p>");
                 break;
              case "object":
                   this.dom.insertAdjacentHTML('beforeend', "<p>"+JSON.stringify(message)+"</p>");
                 break;
             default:
                  this.dom.insertAdjacentHTML('beforeend', "<p>"+typeof(message)+"</p>");
                 break;
         }
     };
     
 
    testU.prototype.logMethode=function(obj){
        for (var i in obj){ this.log("prototype : "+i); }
    } ;
})();
