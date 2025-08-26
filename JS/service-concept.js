window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".service-concept-box .phone-box",
    {
      y: -1000,
    },
    {
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".service-concept-box .app-logo-box",
        start: "top 80%",
        toggleActions: "play revere play reverse",
      },
    }
  );
});
