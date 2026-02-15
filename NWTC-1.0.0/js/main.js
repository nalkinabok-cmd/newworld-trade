(function ($) {
  "use strict";

  // -----------------------------
  // Bootstrap dropdown hover (desktop)
  // -----------------------------
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $('.navbar .dropdown').on('mouseover', function () {
          $('.dropdown-toggle', this).trigger('click');
        }).on('mouseout', function () {
          $('.dropdown-toggle', this).trigger('click').blur();
        });
      } else {
        $('.navbar .dropdown').off('mouseover').off('mouseout');
      }
    }
    toggleNavbarMethod();
    $(window).on('resize', toggleNavbarMethod);
  });

  // -----------------------------
  // Back to top button
  // (easing 플러그인이 없을 때도 에러 안 나게 처리)
  // -----------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').on('click', function (e) {
    e.preventDefault();
    var easing = ($.easing && $.easing.easeInOutExpo) ? 'easeInOutExpo' : 'swing';
    $('html, body').animate({ scrollTop: 0 }, 1500, easing);
    return false;
  });

  // -----------------------------
  // Owl Carousel (Global Partners 등)
  // 멀티페이지에서 owlCarousel 라이브러리 없을 때 에러 방지
  // -----------------------------
  if ($.fn && $.fn.owlCarousel) {
    $(".team-carousel, .related-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      margin: 45,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
      ],
      responsive: {
        0: { items: 1 },
        992: { items: 2 }
      }
    });
  }

  // -----------------------------
  // Material Finder -> material-finder.html 이동 (쿼리스트링 전달)
  // -----------------------------
  $(document).on('click', '#mfSearchBtn', function () {
    var resin = ($('#mfResin').val() || '').trim();
    var keyword = ($('#mfKeyword').val() || '').trim();

    var url = "material-finder.html";
    var params = [];

    if (resin) params.push("resin=" + encodeURIComponent(resin));
    if (keyword) params.push("q=" + encodeURIComponent(keyword));

    if (params.length) url += "?" + params.join("&");
    window.location.href = url;
  });

})(jQuery);
