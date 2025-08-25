window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".challenge-box .phone-mockup",
    {
      y: 1000,
    },
    {
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".challenge-box .main-box",
        start: "top bottom",
        toggleActions: "play none none none",
      },
    }
  );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".challenge-list-box-wrap",
        start: "top bottom",
        toggleActions: "play none none none",
      },
    })
    .from(".challenge-item", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: { each: 0.16, from: "start" },
    });
});
