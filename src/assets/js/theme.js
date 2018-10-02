$(document).ready(function () {
  // Navigation Shrink To Fit
  $(window).scroll(function () {
    if ($(document).scrollTop() > 80) {
      $('#navigation').addClass('navbar-shrink');
      // Scroll to top
      $('.scroll-to-top').fadeIn();

    } else {
      $('#navigation').removeClass('navbar-shrink');

      // Scroll to top
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth Scrolling
  $('.page-to-top').click(function () {
    $('html', 'body').animate({
      scrollTop: 0
    }, 1000, 'easeInOutExpo');
  });

  // Init Scroll Magic
  const controller = new ScrollMagic.Controller();

  // Parallax Scene
  const slideParallaxScene = new ScrollMagic.Scene({
      triggerElement: '#home-parallax',
      triggerHook: 1,
      duration: '200%'
    })
    .setTween(TweenMax.from('.bg-parallax', 1, {
      y: '-50%',
      ease: Power0.easeNone
    }))
    .addTo(controller);

  // CountTo
  if ($.fn.countTo) {
    const $timer = $('.timer');
    $timer.one('inview', function (isInView) {
      if (isInView) {
        $(this).countTo();
      }
    });
  }
});