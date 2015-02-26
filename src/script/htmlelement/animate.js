
(function () {
    'use strict';

    var fps=30;
    HTMLElement.prototype.$animate={};
    HTMLElement.prototype.$animate.list=new Array();
    HTMLElement.prototype.$animate.keyframe=0;
    HTMLElement.prototype.$animate.state=0;
 
    HTMLElement.prototype.pushAnimate = function (func, param) {
  
       var lenght= func==="delay"||  func==="animate" ? Math.round(param[0]/1000*fps):0;
       var keyframe=0;
       if(this.$animate.list[ this.$animate.list.length-1]) keyframe=this.$animate.list[ this.$animate.list.length-1].keyEnd;

        var anim = {
            func: func,
            param: param,
            keyEnd:keyframe+lenght,
            keyStart:keyframe
        };

        this.$animate.list.push(anim);

    };
    
    HTMLElement.prototype.play = function () {
        var vm=this;
 

        if(this.$animate.state!==1){
                 var idAnim=getIdAnim.call(this);
                 this.$animate.state=1;
                  this.$animate.interval = setInterval(function () {
                        nextFrame.call(vm);
                    }, 1000 / fps);
        }
        function getIdAnim(){
                    for(var i=0; i<this.$animate.list.length;i++){
                          if(this.$animate.keyframe>=this.$animate.list[i].keyStart && this.$animate.keyframe<=this.$animate.list[i].keyEnd) 
                            return i;
                    }
                    return false;
           };
        
        
          function exe(anim){
                      switch(anim.func){
                          case "delay":
                              if( this.$animate.keyframe>=anim.keyEnd){
                                 nextIsAnimate.call(this);
                              };
                           
                              return true;
                              break;
                          case "animate":
                               if( this.$animate.keyframe>=anim.keyEnd){
                                 nextIsAnimate.call(this);
                              };
                        
                              return true;
                               break;
                          default:
                                 nextIsAnimate.call(this);
                                 anim.func.apply(this, anim.param);
                              return true;
                              break;
                      }
                      function nextIsAnimate(){
                          
                            idAnim++;
                            var anim= this.$animate.list[idAnim];

                            if(anim){
                                if(typeof anim.func!="String")
                                exe.call(this,anim);
                            };
                      };
                     
                  };
        
        
         function nextFrame() {
             var anim= this.$animate.list[idAnim]
             if(anim ){
                this.$animate.keyframe++;
                console.log(this.$animate.keyframe);
                exe.call(this,anim);
              }else{
                      this.clearAnimate();
                       console.log("animate end");
               };
          };
 
    };
    
    HTMLElement.prototype.stop = function () {
         this.$animate.isPlay=false;
    };
    
   HTMLElement.prototype.clearAnimate = function () {
        clearInterval(this.$animate.interval);
        this.$animate.isPlay=false;
        this.$animate.list=new Array();
        this.$animate.keyframe=0;
    };
    
    HTMLElement.prototype.goTo = function (keyframe) {
          this.$animate.keyframe=keyframe;

    };
    

 function cloneAnimate(vm) {
               var clone = function () {  };

               for (var fn in HTMLElement.prototype) {
                   (function () {
                       var func = vm[fn];
                       if (typeof func == "function") {
                           clone.prototype[fn] = function () {
                               var param = [];
                               for (var i = 0; i < arguments.length; i++) {
                                   param.push(arguments[i])

                               }
                               vm.pushAnimate(func, param);
                               return new clone;
                           };
                       }
                   })();

               }
               ;
               return new clone;
     };


    HTMLElement.prototype.delay = function (time) {
        this.pushAnimate("delay",[time]);
        this.play();
        return cloneAnimate(this);
    };
    
    
   HTMLElement.prototype.animate = function (json,time) {
        this.pushAnimate("animate",[time,json]);
        this.play();
        return cloneAnimate(this);
    };

})();