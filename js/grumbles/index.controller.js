"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleIndexController", [
        GrumbleIndexControllerFunction
    ]);

    function GrumbleIndexControllerFunction(){
      this.grumbles = [
                { title: "grumble number one"},
                { title: "grumble number two"},
                { title: "grumble number three"},
                { title: "grumble number four"}
                ];
      console.log("Yer a wizard");
    }
}());
