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
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  document.querySelectorAll(".semi, .nemi, .dami, .yumi").forEach((el) => {
    gsap.fromTo(
      el,
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
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none",
        },
      }
    );
  });

  gsap.fromTo(
    ".speech-bubble",
    {
      y: 20,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".speech-bubble",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
});
