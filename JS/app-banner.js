window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  $('[slide="right"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    const tl = gsap.timeline();

    tl.fromTo(
      e,
      { x: -100, opacity: 1 },
      { x: 0, opacity: 1, duration: 0.8, delay: delay, ease: "power3.out" }
    );

    ScrollTrigger.create({
      trigger: e,
      animation: tl,
      start: "top center",
      toggleActions: "play reverse play reverse",
    });
  });

  $('[slide="left"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    const tl = gsap.timeline();

    tl.fromTo(
      e,
      { x: 100, opacity: 1 },
      { x: 0, opacity: 1, duration: 0.8, delay: delay, ease: "power3.out" }
    );

    ScrollTrigger.create({
      trigger: e,
      animation: tl,
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    });
  });

  $('[slide="up"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    const tl = gsap.timeline();

    tl.fromTo(
      e,
      { y: 100, opacity: 1 },
      { y: 0, opacity: 1, duration: 0.8, delay: delay, ease: "power3.out" }
    );

    if ($(e).hasClass("level-3-up")) {
      tl.to(e, {
        y: -60,
        duration: 0.5,
        delay: 0.2,
        ease: "power1.out",
      });
    }

    ScrollTrigger.create({
      trigger: e,
      animation: tl,
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    });
  });

  gsap.fromTo(
    ".star-left",
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
        trigger: ".app-banner",
        start: "top bottom",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".star-right",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".app-banner",
        start: "top bottom",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".spray",
    { rotation: 0 },
    {
      rotation: 50,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".app-banner",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  $(document).ready(function () {
    gsap.to(".phone-box", {
      y: -50,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  });
});
