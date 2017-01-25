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

  /* _____________________________________

     Counter
     _____________________________________ */

    if ($(".timer").length) {
      var p = $('#counter'),
          cc = 1;

      $(window).on('scroll', function () {
        var elemPos = p.offset().top,
          elemPosBottom = p.offset().top + p.height(),
          winHeight = $(window).height(),
          scrollToElem = elemPos - winHeight,
          winScrollTop = $(this).scrollTop();

        if (winScrollTop > scrollToElem) {
          if (elemPosBottom > winScrollTop) {
            if (cc < 2) {
              cc = 2;
              $('.timer').countTo({
                formatter: function (value, options) {
                  value = value.toFixed(options.decimals);
                  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                  return value;
                }
              });
            }
          }
        }
      });
    }
})
