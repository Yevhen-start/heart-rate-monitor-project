$(document).ready(function(){
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
  });

//   const swiper = new Swiper('.swiper', {
//     loop: true,
//     speed: 1000,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     }
// });

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 992px
        992: {
            nextEl: false,
            prevEl: false,
            pagination: {
                el: '.swiper-pagination',    
            }
        },  
    },
});
