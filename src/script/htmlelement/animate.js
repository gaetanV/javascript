
(function() {
    'use strict';

    
    var animate=function(){
        this.list=new Array();

    }; 
    animate.prototype.push=function(func,param){
        var anim={
            func:func,
            param:param
        };

        this.list.push(anim);
    };
    
    

    
HTMLElement.prototype.anim=function(){
       for(var i=0; i< this.animate.list.length ; i++){
             this.animate.list[i].func.apply(this, this.animate.list[i].param);
       }
};
    
     HTMLElement.prototype.delay=function(time){
            var vm=this;
            if(!vm.animate){
                 vm.animate=new animate();
             };
            var cloneAnimate=function(){ };
            // vm.animate.push(this.delay,[time]);
           
            for(var fn in HTMLElement.prototype ){
                (function(){
                        var func=vm[fn];
                        if(typeof func=="function"){
                              cloneAnimate.prototype[fn]=function(){
                                    var param=[];
                                    for(var i=0; i<arguments.length; i++){
                                        param.push(arguments[i])

                                    }
                                    vm.animate.push(func,param);
                                    return new cloneAnimate;
                                };
                        }
                    })();
            };

/*///
            for(var fn in HTMLElement.prototype){
              var func=vm[fn];
              if(typeof func=="function"){
                    cloneAnimate.prototype[fn] = function(func){
                          var funct = func;
                         function subAnim(){
                              var param=[];
                              for(var i=0; i<arguments.length; i++){
                                  param.push(arguments[i]);
                              }
                              vm.animate.push(funct,param);
                          }
                          return  func;
                        }();
                       
              }
               
            };//*///
            console.log(cloneAnimate.prototype);
//*///


          return new cloneAnimate;
        
     };
    
    
})();