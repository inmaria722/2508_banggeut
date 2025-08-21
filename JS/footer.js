window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

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

  gsap.fromTo(
    ".semi",
    {
      x: 1000,
    },
    {
      x: -0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top center",
      },
    }
  );

  gsap.fromTo(
    ".clover-left",
    {
      rotate: 0,
    },
    {
      rotate: 360,
      duration: 6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".clover-right",
    {
      rotate: 0,
    },
    {
      rotate: -360,
      duration: 6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
