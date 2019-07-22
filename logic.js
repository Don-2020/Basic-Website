var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}




(function(){

    'use strict';

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top': '0'});
    
    }).mouseleave(function(){
    
        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top': '100%'});
    
    })
})(jQuery);
