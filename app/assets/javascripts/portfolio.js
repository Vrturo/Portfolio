$(document).ready(function(){
  $("#aboutLink").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 1500);
  });

  $("#projectsLink").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#projects").offset().top
      }, 1500);
  });

  $("#contactLink").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#contact").offset().top
      }, 1500);
  });
})
