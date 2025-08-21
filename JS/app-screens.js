window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".app-screen-box", {
    borderTopLeftRadius: "900px",
    borderTopRightRadius: "900px",

    ease: "none",

    scrollTrigger: {
      trigger: ".app-screen-box",
      start: "top top",
      scrub: true,
    },
  });
});
