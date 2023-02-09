$(document).ready(function () {
  var windowWidth = $(window).width();
  var TM = TweenMax;
  var tl = new TimelineMax();
  $(".timeline-area-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 1000,
    infinite: false,
    asNavFor: ".timeline-area-nav-active",
  });
  $(".timeline-area-nav-active").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    focusOnSelect: true,
    infinite: false,
    speed: 900,
    draggable: false,
    asNavFor: ".timeline-area-active",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
}); //document.ready
