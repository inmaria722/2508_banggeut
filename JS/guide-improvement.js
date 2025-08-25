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

  $('[fade="in"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.from(e, {
      opacity: 0,
      duration: 1.5,
      delay: delay,
      scrollTrigger: {
        trigger: e,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // guide-improvement
  $(".guide-improvement-box .phone-box").each(function (i, box) {
    const fromX = i === 3 ? 700 : -500;
    gsap.set(box, { x: fromX, opacity: 0 });
  });

  gsap.set(".guide-improvement-box .flow-line-box .line", {
    scaleX: 0,
    transformOrigin: "left center",
    opacity: 0,
  });

  ScrollTrigger.create({
    trigger: ".guide-improvement-box",
    start: "top 85%",
    onEnter: () => {
      // phone-box
      $(".guide-improvement-box .phone-box").each(function (i, box) {
        const extraDelay = i === 3 ? 0.3 : 0;
        gsap.delayedCall(i * 0.15 + 1 + extraDelay, () => {
          gsap.to(box, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
        });
      });

      // flow-line
      gsap.to(".guide-improvement-box .flow-line-box .line", {
        scaleX: 1,
        duration: 1.2,
        delay: 1,
        opacity: 1,
        ease: "power2.out",
      });
    },
  });
});
