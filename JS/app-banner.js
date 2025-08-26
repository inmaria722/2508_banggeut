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
      start: "top 80%",
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
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    });
  });

  gsap.fromTo(
    ".app-banner .star-left",
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
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".app-banner .star-right",
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
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".app-banner .spray",
    { rotation: 0 },
    {
      rotation: 50,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".app-banner",
        start: "top 80%",
        scrub: true,
      },
    }
  );

  $(document).ready(function () {
    gsap.to(".app-banner .phone-box", {
      y: -50,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  });
});
