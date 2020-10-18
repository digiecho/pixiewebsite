// JavaScript Document
$(document).ready( function() {
$('.slick-carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  focusOnSelect: true,
  slidesToScroll: 3,
  arrows: false,
  autoplay:true,
  autoplaySpeed:1500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	});