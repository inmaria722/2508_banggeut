window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  $('[fade="in"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.fromTo(
      e,
      { opacity: 0 }, // 🔥 y 제거
      {
        opacity: 1,
        duration: 0.8,
        delay: delay,
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});
