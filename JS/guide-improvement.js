window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // guide-improvement 초기 상태 설정
  $(".guide-improvement-box .phone-box").each(function (i, box) {
    const fromX = i === 3 ? 700 : -500;
    gsap.set(box, { x: fromX, opacity: 0 });
    // box DOM에 fromX 속성으로 저장 (reverse 시 재사용)
    box.dataset.fromX = fromX;
  });

  gsap.set(".guide-improvement-box .flow-line-box .line", {
    scaleX: 0,
    transformOrigin: "left center",
    opacity: 0,
  });

  ScrollTrigger.create({
    trigger: ".guide-improvement-box",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
    onEnter: () => {
      $(".guide-improvement-box .phone-box").each(function (i, box) {
        const extraDelay = i === 3 ? 0.3 : 0;
        gsap.delayedCall(i * 0.15 + 1 + extraDelay, () => {
          gsap.to(box, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
        });
      });

      gsap.to(".guide-improvement-box .flow-line-box .line", {
        scaleX: 1,
        duration: 1.2,
        delay: 1,
        opacity: 1,
        ease: "power2.out",
      });
    },

    onLeaveBack: () => {
      $(".guide-improvement-box .phone-box").each(function (i, box) {
        const fromX = parseFloat(box.dataset.fromX);
        gsap.to(box, {
          x: fromX,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
        });
      });

      gsap.to(".guide-improvement-box .flow-line-box .line", {
        scaleX: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
      });
    },
  });
});
