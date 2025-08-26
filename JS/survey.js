window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // survey
  const surveyBox1 = gsap.timeline();
  ScrollTrigger.create({
    animation: surveyBox1,
    trigger: ".survey-box",
    start: "top 20%",
    end: "bottom 100%",
    scrub: 1,
  });
  surveyBox1
    .to(".survey-box .survey-con-box-1", { clipPath: "inset(0% 0% 0% 0%)" }, 0)
    .to(".survey-box .survey-con-box-1 .circle-graph", { scale: 1 }, 0)
    .to(
      ".survey-box .survey-con-box-1 .graph-line",
      { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
      0.3
    )
    .to(".survey-box .survey-con-box-1 .bar-bar", { scaleX: 1 }, 0.3)
    .to(".survey-box .survey-con-box-1 .bar-bar, .bar-line", { scaleX: 1 }, 0.5)
    .to(".survey-box .survey-con-box-1 .bar-bar, .bar-line", { scaleX: 1 }, 0.6)
    .to(
      ".survey-box .survey-con-box-1 .bar-bar, .bar-line",
      { scaleX: 1 },
      0.7
    );

  const surveyBox2 = gsap.timeline();
  ScrollTrigger.create({
    animation: surveyBox2,
    trigger: ".survey-box",
    start: "bottom 180%",
    end: "bottom 80%", // 전체 연결 시 타이밍 조절하기_80%정도로?
    scrub: 1,
  });
  surveyBox2
    .to(".survey-box .survey-con-box-2", { clipPath: "inset(0% 0% 0% 0%)" }, 0)
    .to(".survey-box .survey-con-box-2 .bar-col-1", { scaleY: 1 }, 0)
    .to(".survey-box .survey-con-box-2 .bar-col-2", { scaleY: 1 }, 0.2)
    .to(
      ".survey-box .survey-con-box-2 .bar-col-line",
      { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
      0.6
    )
    .to(".survey-box .survey-con-box-2 .right-box-con", { scale: 1 }, 0.7);
});
