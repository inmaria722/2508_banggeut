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

  $('[slide="up"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.from(e, {
      y: 60,
      duration: 0.5,
      delay: delay,
      scrollTrigger: {
        trigger: e,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  gsap.fromTo(
    ".bg-clover",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".logo-box",
        start: "top bottom", // 로고박스가 화면 중간에 올 때 시작
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".bar-grow",
    {
      width: 0,
    },
    {
      width: "48%",

      duration: 1.4,
      ease: "power2.out",

      scrollTrigger: {
        trigger: ".gauge-box-wrap",
        start: "top 80%",
      },
    }
  );

  gsap.fromTo(
    ".gauge-bar > .clover",
    {
      x: -300,
    },
    {
      x: 0,

      duration: 1.4,
      ease: "power2.out",

      scrollTrigger: {
        trigger: ".gauge-box-wrap",
        start: "top 80%",
      },
    }
  );

  gsap.fromTo(
    ".speech-bubble",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: "back.out(1.7)",
    }
  );

  gsap.fromTo(
    ".level-3-up",
    {
      y: -60,
    },
    {
      duration: 1,
      delay: 1.5,
      ease: "power3.out",
    }
  );
});
