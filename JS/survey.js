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

  $('[fade="in"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.from(e, {
      opacity: 0,
      duration: 1.5,
      delay: delay,
      scrollTrigger: {
        trigger: e,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // survey
  const surveyBox1 = gsap.timeline();
  ScrollTrigger.create({
    animation: surveyBox1,
    trigger: ".survey-box",
    start: "top top",
    end: "bottom 110%",
    scrub: 1,
  });
  surveyBox1
    .to(".survey-con-box-1", { clipPath: "inset(0% 0% 0% 0%)" }, 0)
    .to(".survey-con-box-1 .circle-graph", { scale: 1 }, 0)
    .to(
      ".survey-con-box-1 .graph-line",
      { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
      0.3
    )
    .to(".survey-con-box-1 .bar-bar", { scaleX: 1 }, 0.3)
    .to(".survey-con-box-1 .bar-bar, .bar-line", { scaleX: 1 }, 0.5)
    .to(".survey-con-box-1 .bar-bar, .bar-line", { scaleX: 1 }, 0.6)
    .to(".survey-con-box-1 .bar-bar, .bar-line", { scaleX: 1 }, 0.7);

  const surveyBox2 = gsap.timeline();
  ScrollTrigger.create({
    animation: surveyBox2,
    trigger: ".survey-box",
    start: "bottom 160%",
    end: "bottom 100%", // 전체 연결 시 타이밍 조절하기_80%정도로?
    scrub: 1,
  });
  surveyBox2
    .to(".survey-con-box-2", { clipPath: "inset(0% 0% 0% 0%)" }, 0)
    .to(".survey-con-box-2 .bar-col-1", { scaleY: 1 }, 0)
    .to(".survey-con-box-2 .bar-col-2", { scaleY: 1 }, 0.2)
    .to(
      ".survey-con-box-2 .bar-col-line",
      { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
      0.6
    )
    .to(".survey-con-box-2 .right-box-con", { scale: 1 }, 0.7);
});
