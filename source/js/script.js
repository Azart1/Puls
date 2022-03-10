$(document).ready(function(){
    $('.sliders__inner').slick({
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 6000,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/icon_arrow-left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/icon_arrow-right.svg"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows:false,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
  });