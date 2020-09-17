// JavaScript Document

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

jQuery(function($) {
    $('#modalMore, #modalToilet, #modalShopping, #modalWalkies, #modalPick, #modalFogging, #modalFest, #modalKitchen, #modalDeep, #modalVenue, #modalHousekeeping').on('hidden.bs.modal', function (e) {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 200);
    })
});
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });