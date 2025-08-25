document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".symbol",
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
        trigger: ".logo-box",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".typography",
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
        trigger: ".logo-box",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".lines-v",
    {
      scale: 2,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".logo-box",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".lines-h",
    {
      scale: 1.7,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".logo-box",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});
