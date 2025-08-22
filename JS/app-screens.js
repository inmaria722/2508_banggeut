window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".app-screen-box", {
    borderTopLeftRadius: "600px",
    borderTopRightRadius: "600px",
    ease: "none",
    duration: 0.4,
    scrollTrigger: {
      trigger: ".app-screen-box",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });
});
