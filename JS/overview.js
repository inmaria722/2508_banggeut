window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

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
