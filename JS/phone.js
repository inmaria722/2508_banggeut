document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".phone-mockup",
    {
      y: 1000,
    },
    {
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".main-box",
        start: "top bottom-=100px",
      },
    }
  );

  gsap.to(".main-box", {
    height: "1800px",
    ease: "none",
    scrollTrigger: {
      trigger: ".main-box",
      start: "top top",
      end: "+=500",
      scrub: true,
    },
  });

  gsap.fromTo(
    ".clover",
    {
      rotate: 0,
    },
    {
      rotate: 90,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".phone-box",
        start: "top center",
        toggleActions: "play none none none",
      },
    }
  );
});
