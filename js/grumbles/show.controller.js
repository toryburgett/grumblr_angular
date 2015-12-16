"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleShowController", [
        GrumbleShowControllerFunction
    ]);

    function GrumbleShowControllerFunction($stateParams){
      console.log($stateParams.id)
      // this.grumbles = [
      //           { title: "grumble number one"},
      //           { title: "grumble number two"},
      //           { title: "grumble number three"},
      //           { title: "grumble number four"}
      //           ];
    }
}());
