window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".todo-box .phone-mockup",
    {
      y: 1000,
    },
    {
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".todo-box .main-box",
        start: "top center",
      },
    }
  );
});
