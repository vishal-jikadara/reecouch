(function ($) {
  "use strict"
  
  // $(window).scroll(function () {
  //   var scrolling = $(this).scrollTop();
  //   var sticky = $('.sticky-top');
  //   if (scrolling >= 100) {
  //     $(sticky).addClass("nav-bg");
  //   } else {
  //     $(sticky).removeClass("nav-bg");
  //   }
  //   if (scrolling >= 50) {
  //     $('.backtotop').fadeIn(500);
  //   } else {
  //     $('.backtotop').fadeOut(500);
  //   }
  // });

  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function (i) {
      if ($(this).position().top <= scrollDistance + 90) {
        $('.navbar-nav a.active').removeClass('active');
        $('.navbar-nav a').eq(i).addClass('active');
      }
    });
  }).scroll();

  $('#nav-icon').click(function () {
    $(this).toggleClass("open");
  });

  $(document).ready(function () {
    AOS.init({
      duration: 1200,
    })
  });

  const setActive = (el, active) => {
    const formField = el.parentNode.parentNode;
    if (active) {
      formField.classList.add("form-field--is-active");
    } else {
      formField.classList.remove("form-field--is-active");
      el.value === "" ?
        formField.classList.remove("form-field--is-filled") :
        formField.classList.add("form-field--is-filled");
    }
  };

  [].forEach.call(
    document.querySelectorAll(".form-input, .form-textarea"),
    el => {
      el.onblur = () => {
        setActive(el, false);
      };
      el.onfocus = () => {
        setActive(el, true);
      };
    });


  $(function () {
    // ------------------------------------------------------- //
    // Multi Level dropdowns
    // ------------------------------------------------------ //
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      $(this).siblings().toggleClass("show");


      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass("show");
      });

    });
  });

  (function ($) {
    "use strict";
    function count($this) {
      var current = parseInt($this.html(), 10);
      current = current + 1; /* Where 50 is increment */
      $this.html(++current);
      if (current > $this.data('count')) {
        $this.html($this.data('count'));
      } else {
        setTimeout(function () { count($this) }, 10);
      }
    }
    $(".stat-count").each(function () {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
    });
  })(jQuery);

  //scroll sections
  if ($("body").hasClass("intrective")) {
    $(".scroll").on("click", function (event) {
      //event.preventDefault();
      $("html,body").animate({
        scrollTop: $(this.hash).offset().top
      }, 1200);
    });
  } else {
    $(".scroll").on("click", function (event) {
      //event.preventDefault();
      $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 60
      }, 1200);
    });
  }

  $('.testimonialSlider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    centerMode: true,
    centerPadding: '200px',
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 641,
        settings: {
          centerPadding: '30px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.knowledgeBankSlider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    centerMode: true,
    centerPadding: '260px',
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          centerPadding: '250px',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: '120px',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '30px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.reeWorkerMobSlider').slick({
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    dots: true,
    asNavFor: '.reeWorkerMobThumbnailSlider',
  });
  
  $('.reeWorkerMobThumbnailSlider').slick({
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.reeWorkerMobSlider',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: false,
  });

  
})(jQuery);


