//TEST
 var testU;
 
(function() {
     'use strict';
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
     
     testU.prototype.try=function(f){
         try{
             f
         }
         catch(e){
             if(typeof(e)==="object"){
                 e=e.toString();
             }
             this.prototype.log(e);
         }
     }
     
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
