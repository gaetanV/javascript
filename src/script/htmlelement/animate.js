
(function() {
    'use strict';

    
    var animate=function(){
        this.list=new Array();
        this.animate=false;
    };
    
    animate.prototype.push=function(func,param){
        var anim={
            func:func,
            param:param
        };
        this.animate=true;
        this.list.push(anim);
   
    };
    animate.prototype.Anim=function(){
         console.log(  this.list);

        for(var i=0; i< this.list.length ; i++){
            console.log(this.list[i].func);
             //   this.list[i].func( this.list[i].param.join());
        }
    };
    
HTMLElement.prototype.anim=function(){
    this.animate.Anim();
};
    
     HTMLElement.prototype.delay=function(time){
            var vm=this;
            if(!vm.animate){
                 vm.animate=new animate();
             };
            var cloneAnimate=function(){ };
            // vm.animate.push(this.delay,[time]);
            for(var fn in HTMLElement.prototype){

              var func=vm[fn];
         
              if(typeof func=="function"){
                    cloneAnimate.prototype[fn]=function(){
                          var param=[];
                          for(var i=0; i<arguments.length; i++){
                              param.push(arguments[i])

                          }
                          vm.animate.push(func,param);
                         console.log(cloneAnimate.prototype);
                          return new cloneAnimate;
                      };
              }
            };

          return new cloneAnimate;
        
     };
    
    
})();