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


app.controller("grumblrController", function(){
  var self = this;
  this.grumblr = [
    {
      title: "Title",
      authorName: "Author",
      content: "Content",
      photoUrl: "PhotoURL"
    },
    {
      title: "Title2",
      authorName: "Author2",
      content: "Content2",
      photoUrl: "PhotoURL2"
    },
    {
      title: "Title3",
      authorName: "Author3",
      content: "Content3",
      photoUrl: "PhotoURL3"
    }
  ];

  this.sayHello = function(){
    console.log("Hello World!");
  };

  this.createGrumButtText = "New Grumble";
  this.formIsVisible = false;

  this.toggleForm = function(){
    console.log("toggleform");
    if(this.formIsVisible){
      this.formIsVisible = false;
      this.createGrumButtText = "New Grumble Please";
    }
    else{
      this.formIsVisible = true;
      this.createGrumButtText = "Oops I didn't mean that";
    }

    var grumbleFirst = true;
    this.addGrum = function(){
      var data = {
        title: $(".newGrum input[name=title]").val(),
        author: $("input[name=authorName]").val(),
        content: $("input[name=content]").val(),
        photoUrl: $("input[name=photoUrl]").val()
      };
      var something = $("input[name=title]").val();
      console.log(something);
      console.log(data);
      this.grumblr.unshift(data);
      console.log(this.grumblr)
      //
      // if (grumbleFirst){
      //   $("body").append("<div class=\"grumbleNew\"><h2>New Grumble</h2><p> Title: " + data.title + "</p><p> Author: " + data.author + "</p><p> Content: " + data.content + "</p><p> PhotoURL: " + data.photoUrl + "</p></div>");
      //   grumbleFirst = false;
      // }
      // else{
      //   $(".grumbleNew").html("<div class=\"grumbleNew\"><h2>New Grumble</h2><p> Title: " + data.title + "</p><p> Author: " + data.author + "</p><p> Content: " + data.content + "</p><p> PhotoURL: " + data.photoUrl + "</p></div>");
      // }
    };
  };

  this.showGrumButtText = "Show Grubmbrs";
  this.showGrumblrsVisible = false;

  this.showGrumblrs = function(){
    if(this.showGrumblrsVisible){
      this.showGrumblrsVisible = false;
      this.showGrumButtText = "Show Grubmbrs";
    }
    else{
      this.showGrumblrsVisible = true;
      this.showGrumButtText = "Hide Grumblrs";
    }
  };

  this.edit = function(index){
    var grumblr = this.grumblr[index];
    console.log(grumblr);
    this.content = grumblr;
  };

  // when called, this will replace the content of a todo at at an index value that
  // passed in as an argument.
  this.update = function(index){
    var self = this;
    var eyedee = ".grumblr" + index;
    var specialsnowflake = self.grumblr[index];
    specialsnowflake.title = $(eyedee+" input[name=title]").val();
    specialsnowflake.authorName = $(eyedee+" input[name=authorName]").val();
    specialsnowflake.content = $(eyedee+" input[name=content]").val();
    specialsnowflake.photoUrl = $(eyedee+" input[name=photoUrl]").val();
  };







});
