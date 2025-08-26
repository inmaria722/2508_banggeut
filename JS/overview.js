window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  //공동 속성
  $('[fade="up"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.from(e, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay: delay,
      scrollTrigger: {
        trigger: e,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  //overview
  $(".overview-box").each(function (i, box) {
    const graphics = $(box).find(".graphic");

    graphics.each(function (j, el) {
      const delay = $(el).data("delay") || 0;

      gsap.fromTo(
        el,
        { y: 500, opacity: 0.8, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          delay: delay + 0.6,
          duration: 1,
          ease: "elastic.out(1, 0.7)",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });
});
