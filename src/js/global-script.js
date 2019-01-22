

// Если на проекте jQuery
$( document ).ready(function() {

  $(".phone-mask").mask("+7(999) 999-9999");
  $(".time-mask").mask("99:99");

  if(window.matchMedia('(min-width: 992px)').matches)
  {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 200) {
        $('.header-nav').addClass('header-nav--sticky');
      } else {
        $('.header-nav').removeClass('header-nav--sticky');
      }
    });
  };

  $("#home-intro-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    margin: 0,
    loop: true,
    dots: false,
    center: false
  });

  $(".team-carousel").owlCarousel({
    items: 4,
    nav: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    margin: 30,
    loop: true,
    dots: false,
    center: false,
    responsive : {
      0 : {
        items: 2,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 4,
      },
      1200 : {
        items: 4,
      },
      1800 : {
        items: 4,
      }
    }
  });

  $(".gallery-carousel").owlCarousel({
    items: 4,
    nav: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    margin: 30,
    loop: true,
    dots: true,
    center: false,
    responsive : {
      0 : {
        items: 2,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 2,
      },
      768 : {
        items: 2,
      },
      992 : {
        items: 2,
      },
      1200 : {
        items: 2,
      },
      1800 : {
        items: 2,
      }
    }
  });

});
