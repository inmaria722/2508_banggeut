window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  //ia
  $(".ia-box").each(function (i, box) {
    const blueBox = $(box).find(".blue-rounded");
    const semis = $(box).find(".semi-circle");

    blueBox.each(function (j, bB) {
      const delay = $(bB).data("delay") || 0;

      ScrollTrigger.create({
        trigger: box,
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.to(bB, {
            opacity: 1,
            scale: 1,
            delay: delay,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(bB, {
            opacity: 0,
            scale: 0,
            duration: 0.6,
            ease: "power2.in",
          });
        },
      });
    });

    semis.each(function (k, semi) {
      const delay = $(semi).data("delay") || 0;

      ScrollTrigger.create({
        trigger: box,
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.to(semi, {
            opacity: 1,
            scale: 1,
            delay: delay,
            duration: 0.3,
            ease: "circ.in",
          });
        },
        onLeaveBack: () => {
          gsap.to(semi, {
            opacity: 0,
            scale: 1.5,
            duration: 0.6,
            ease: "power2.in",
          });
        },
      });
    });
  });
});
