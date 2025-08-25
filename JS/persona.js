window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

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
      start: "top 80%",
      toggleActions: "play none none none",
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
      delay: 0.4,
      scrollTrigger: {
        trigger: ".pf-info-box",
        start: "top 80%",
        toggleActions: "play none none none",
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
      delay: 0.6,
      scrollTrigger: {
        trigger: ".pf-info-box",
        start: "top 80%",
        toggleActions: "play none none none",
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
      delay: 0.8,
      scrollTrigger: {
        trigger: ".pf-info-box",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".persona-box .orange",
    {
      backgroundColor: "#fff4ec",
      borderColor: "#ffbe90",
      color: "#ff873d",
    },
    {
      backgroundColor: "#ff873d",
      borderColor: "#ff873d",
      color: "#fff",
      duration: 0.6,
      delay: 1,
      ease: "ease.inOut",
      scrollTrigger: {
        trigger: ".persona-box",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});
