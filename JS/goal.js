window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // goal
  // ----- goal-list-box -----
  const $rows = $(".goal-box .goal-list-box-wrap .goal-list-box");
  if ($rows.length) {
    gsap.set($rows, { opacity: 0, x: -60 });
    gsap.to($rows.toArray(), {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: { each: 0.15, from: "start" },
      scrollTrigger: {
        trigger: ".goal-box .goal-list-box-wrap",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });
  }

  // ----- arrows-down -----
  const $arrows = $(".goal-box .arrows-down");
  if ($arrows.length) {
    gsap.set($arrows, { opacity: 0, y: -40 });
    gsap.to($arrows, {
      opacity: 0.2,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: $arrows[0],
        start: "top 55%",
        toggleActions: "play reverse play reverse",
      },
    });
  }

  // ----- conclusion-box -----
  const $conclusionBox = $(".goal-box .conclusion-box");
  if ($conclusionBox.length) {
    gsap.set($conclusionBox, {
      opacity: 0,
      scale: 0.7,
      transformOrigin: "50% 50%",
    });
    gsap.to($conclusionBox, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".conclusion-box",
        start: "top 55%",
        toggleActions: "play reverse play reverse",
      },
    });
  }
});
