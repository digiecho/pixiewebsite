// JavaScript Document
$(document).ready( function() {
$('.slick-carousel').slick({
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 3,
  focusOnSelect: true,
  slidesToScroll: 3,
  arrows: false,
  autoplay:true,
  autoplaySpeed:800,
  rows: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2,
        rows:2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        rows: 3,
      }
    }
  ]
});
	});