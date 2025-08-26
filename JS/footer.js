window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "footer .semi",
    {
      x: 1000,
    },
    {
      x: -0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
      },
    }
  );

  gsap.fromTo(
    "footer .clover-left",
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
    "footer .clover-right",
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
