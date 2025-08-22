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

    const tl = gsap.timeline();

    tl.fromTo(
      e,
      { y: 250, opacity: 1 },
      { y: 0, opacity: 1, duration: 1.4, delay: delay, ease: "power2.out" }
    );

    ScrollTrigger.create({
      trigger: e,
      animation: tl,
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    });
  });

  gsap.fromTo(
    ".data-1",
    {
      width: 0,
    },
    {
      width: "30%",
      duration: 1,
      ease: "power2.out",
      delay: 0.8,
      scrollTrigger: {
        trigger: ".pf-info-box",
        start: "top 80%",
      },
    }
  );

  gsap.fromTo(
    ".data-2",
    {
      width: 0,
    },
    {
      width: "55%",
      duration: 1,
      ease: "power2.out",
      delay: 1,
      scrollTrigger: {
        trigger: ".pf-info-box",
        start: "top 80%",
      },
    }
  );

  gsap.fromTo(
    ".data-3",
    {
      width: 0,
    },
    {
      width: "88%",
      duration: 1,
      ease: "power2.out",
      delay: 1.2,
      scrollTrigger: {
        trigger: ".pf-info-box",
        start: "top 80%",
      },
    }
  );
});
