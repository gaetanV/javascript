
(function() {
    'use strict';

    
    var animate=function(){
        this.list=new Array();
        
    };
    
    animate.prototype.push=function(funcName,funcParam){
        var anim={
            funcName:funcName,
            funcParam:funcParam
        };
        this.list.push(anim);
    };
    

    
     HTMLElement.prototype.delay=function(time){
            var vm=this;
            if(!vm.animate){
                 vm.animate=new animate();
             };
             var cloneAnimate=function(){ };
          for(var fn in HTMLElement.prototype){
          

              cloneAnimate.prototype[fn]=function(){
                  var funcName=(fn);
                  var funcparam=[];
                  for(var i=0; i<arguments.length; i++){
                      funcparam.push(arguments[i])
                    
                  }
                  vm.animate.push(funcName,funcparam);
                  console.log(vm.animate);
              };
            
          };
          return new cloneAnimate;
        
     };
    
    
})();