$(document).ready(function(){
  console.log("this");
  $("#aboutLink").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 1500);
  });
})
