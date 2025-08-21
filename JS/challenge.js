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
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  $('[fade="down"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    gsap.from(e, {
      opacity: 0,
      y: -60,
      duration: 0.8,
      delay: delay,
      scrollTrigger: {
        trigger: e,
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  gsap.fromTo(
    ".phone-mockup",
    {
      y: 1000,
    },
    {
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".main-box",
        start: "top center",
      },
    }
  );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".challenge-list-box-wrap", // 리스트 전체 래퍼
        start: "top center",
        toggleActions: "play reverse play reverse", // 위아래 스크롤 반복 재생
        // markers: true
      },
    })
    .from(".challenge-item", {
      y: -50, // 위에서 내려오듯
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: { each: 0.16, from: "start" },
    });
});
