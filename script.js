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
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  $('[fade="down"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.from(e, {
      opacity: 0,
      y: -60,
      duration: 0.8,
      delay: delay,
      scrollTrigger: {
        trigger: e,
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  $('[fade="right"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.from(e, {
      opacity: 0,
      x: -60,
      duration: 0.8,
      delay: delay,
      scrollTrigger: {
        trigger: e,
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  $('[fade="in"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.from(e, {
      opacity: 0,
      duration: 1,
      ease: "linear",
      delay: delay,
      scrollTrigger: {
        trigger: e,
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });
  });
});
