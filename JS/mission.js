window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

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
        toggleActions: "play reverse play reverse",
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
      delay: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mission-box .main-box",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
