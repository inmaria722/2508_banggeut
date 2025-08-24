window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  $(".sticker-box").each(function (_, box) {
    const svg = box.querySelector("svg");
    if (!svg) return;

    gsap.set(svg, {
      opacity: 0,
      scale: 1.3,
      transformOrigin: "50% 50%",
    });

    const tl = gsap
      .timeline({ delay: 0.8 })
      .to(svg, { opacity: 1, duration: 0.01 })
      .to(svg, {
        scaleX: 1.35,
        scaleY: 0.75,
        duration: 0.18,
        ease: "power2.out",
      })
      .to(svg, { scale: 1.15, duration: 0.25, ease: "back.out(3)" })
      .to(svg, { scale: 1, duration: 0.35, ease: "elastic.out(1, 0.4)" });

    ScrollTrigger.create({
      trigger: box,
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      animation: tl,
    });
  });

  gsap.fromTo(
    ".item-choose-box .phone-mockup",
    {
      y: 1000,
    },
    {
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".item-choose-box",
        start: "top 80%",
      },
    }
  );
});
