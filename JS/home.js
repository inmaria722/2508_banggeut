window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  $('[fade="in"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.fromTo(
      e,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.4,
        delay: delay,
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});
