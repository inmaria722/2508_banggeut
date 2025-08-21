window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  $(".patch-box").each(function (i, box) {
    const patch = $(box).find(".patch")[0];
    const delay = $(patch).data("delay") || 0;

    ScrollTrigger.create({
      trigger: box,
      start: "top 90%",
      onEnter: () => {
        gsap.to(patch, {
          opacity: 1,
          scale: 1,
          delay: delay,
          duration: 0.6,
          ease: "circ.in",
        });
      },
      onLeaveBack: () => {
        gsap.to(patch, {
          opacity: 0,
          scale: 1.2,
          duration: 0.6,
          ease: "power2.in",
        });
      },
    });
  });
});
