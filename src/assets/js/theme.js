$(document).ready(function () {
  // Navigation Shrink To Fit


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