window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  //공동 속성
  $('[fade="up"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.from(e, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay: delay,
      scrollTrigger: {
        trigger: e,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  gsap.fromTo(
    ".phone-box",
    {
      y: -1000,
    },
    {
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".app-logo-box",
        start: "top bottom-=100px",
      },
    }
  );
});
