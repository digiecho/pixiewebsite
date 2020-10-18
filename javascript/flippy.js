// JavaScript Document flippycards
$('.flip').hover(function(){
        $(this).find('.card').toggleClass('flipped');

 });

$(document).ready(function() {

  $('.flipper').on('click',function () {
    $(this).find('.flipper-card').toggleClass('flipper-is-flipped');
  });

});