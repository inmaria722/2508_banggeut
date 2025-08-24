window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  //background-2
  const orderedBars = [
    ".background-box-2 .left .graph .bar-2018",
    ".background-box-2 .left .graph .bar-2020",
    ".background-box-2 .left .graph .bar-2022",
    ".background-box-2 .left .graph .bar-2023",
  ];

  // 초기화
  gsap.set(orderedBars, { transformOrigin: "bottom center", scaleY: 0 });
  gsap.set(".background-box-2 .left .num-2023", {
    transformOrigin: "center center",
    scale: 0.6,
    autoAlpha: 0,
  });
  gsap.set(".background-box-2 .right .circle-num", {
    transformOrigin: "center center",
    scale: 0.6,
    autoAlpha: 0,
  });

  gsap.killTweensOf(".background-box-2 .right .circle-num");

  const tl = gsap.timeline();

  tl.to(orderedBars, {
    scaleY: 1,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.08,
  });

  tl.to([".background-box-2 .left .num-2023", ".right .circle-num"], {
    scale: 1,
    autoAlpha: 1,
    duration: 0.3,
    ease: "back.out(1.6)",
  });

  // ScrollTrigger 연결
  ScrollTrigger.create({
    trigger: ".background-box-2 .main-box .graph-box-wrap",
    start: "top 80%",
    toggleActions: "play none none reverse",
    animation: tl,
  });
});
