document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".phone-box .phone-mockup",
    {
      y: 1000,
    },
    {
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".phone-box .main-box",
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.to(".phone-box .main-box", {
    height: "1800px",
    ease: "none",
    scrollTrigger: {
      trigger: ".phone-box .main-box",
      start: "top top",
      end: "+=500",
      scrub: true,
    },
  });

  gsap.fromTo(
    ".phone-box .clover",
    {
      rotate: 0,
    },
    {
      rotate: 90,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".phone-box .main-box",
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
