$(document).ready(function(){
    $('.sliders__inner').slick({
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: false,
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
              breakpoint: 768,
              settings: {
                slidesToShow:1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
      
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

            })
        })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal

    $('[data-modal=consult]').on('click', function() {
      $('.overlay, #consult').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consult, #order, #thanks').fadeOut('slow');
    });

    $('.button_catalog-item').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());   
        $('.overlay, #order').fadeIn('slow');
      })
    })
  });