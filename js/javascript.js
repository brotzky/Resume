$(function() {

  $(window).scroll(function(){
    var nav = $('.navigation');
      if($(window).scrollTop() > 2)
      {
        nav.addClass('shadow');
      }
      else {
        nav.removeClass('shadow');
      }
   });

})


