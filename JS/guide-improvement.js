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
    toggleActions: "play reverse play reverse", // 🔄 스크롤 업 시 역재생
    onEnter: () => {
      // phone-box 등장 애니메이션
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

      // flow-line 등장
      gsap.to(".guide-improvement-box .flow-line-box .line", {
        scaleX: 1,
        duration: 1.2,
        delay: 1,
        opacity: 1,
        ease: "power2.out",
      });
    },

    onLeaveBack: () => {
      // phone-box 역방향 애니메이션 (fromX로 되돌리기)
      $(".guide-improvement-box .phone-box").each(function (i, box) {
        const fromX = parseFloat(box.dataset.fromX); // 저장했던 방향값 사용
        gsap.to(box, {
          x: fromX,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
        });
      });

      // flow-line 역방향 애니메이션
      gsap.to(".guide-improvement-box .flow-line-box .line", {
        scaleX: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
      });
    },
  });
});
