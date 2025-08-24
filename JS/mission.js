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
        start: "top 80%",
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
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  gsap.fromTo(
    ".mission-box .phone-mockup",
    {
      y: 1000,
    },
    {
      y: 0,
      duration: 1.5,
      delay: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mission-box .main-box",
        start: "top 80%",
      },
    }
  );

  gsap.fromTo(
    ".mission-box .popup",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mission-box .main-box",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
