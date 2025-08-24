$(function () {
  gsap.registerPlugin(ScrollTrigger);

  // goal
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
        trigger: $arrows[0], // jQuery 객체 → 첫 DOM 요소
        start: "top 85%",
        once: true,
      },
    });
  }

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
        start: "top 80%",
        once: true,
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
        start: "top 85%",
        once: true,
      },
    });
  }
});
