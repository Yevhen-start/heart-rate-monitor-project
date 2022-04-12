$(document).ready(function(){
    // JQwery для слайдера
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/arrow-right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }   
            }        
        ]
      });
      // JQwery для табов
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
        $(this)
          .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
      });
      // JQwery для клика

      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
          });
        });
      };
      
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      // Модальные окна
      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });
      $('.button--mini').each(function(i) {
        $(this).on('click', function(){
          $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });  
      });
      // Валидация

      function validateForm (form) {
        $(form).validate({
          rules: {
            name: "required",
            phone: "required",
            email: {
              required: true,
              email: true
            }
            },
            messages: {
              name: "Пожалуйста, введите свое имя",
              phone: "Пожалуйста, введите свой номер телефон",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты" 
              }
          }
        }); 
      };
      validateForm('#consultation-form form');
      validateForm('#consultation form');
      validateForm('#order form');

      // Маска

      $('input[name=phone]').mask('+3(999) 999-99-99');

      // Скрол вверх
      $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      });

      $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
  });



  // JS слайдер Swiper
const slides = document.querySelector('.swiper')

const mySwiper = new Swiper(slides, {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
