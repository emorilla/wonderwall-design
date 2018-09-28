$(document).ready(function () {
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
});