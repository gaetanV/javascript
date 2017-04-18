(function() {
    'use strict';
    angular.module('app', []);

    
    angular
            .module('app')
            .controller('Lzm', Lzm);

    Lzm.$inject = ['$scope'];
    
    function Lzm($scope) {
      $scope.uncompress=function(val){
          if(typeof val==="string"){
              val=val.split(","); 
          }
         
            var uncompress=LZW.uncompress(val);
            $scope.result=uncompress;
            $scope.val.compress=uncompress.result;
      }
      $scope.compress=function(val){
             var compress=LZW.compress(val);
             $scope.result=compress;
             $scope.val.uncompress=compress.result;
      }
      
       
      
        $scope.e={};
   
    }
})();