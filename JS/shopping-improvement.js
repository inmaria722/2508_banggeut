window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  //shopping-improvement
  $('[fade="zoom-in-up"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.from(e, {
      opacity: 0,
      scale: 0.8,
      y: 70,
      duration: 1,
      ease: "power2.out",
      delay: delay,
      scrollTrigger: {
        trigger: e,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
});
