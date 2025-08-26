window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  if ("fonts" in document) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }

  const fadeElements = document.querySelectorAll("[fade]");

  fadeElements.forEach((el) => {
    const dir = el.getAttribute("fade");
    const delay = Number(el.dataset.delay) || 0;

    const from = { opacity: 0 };
    if (dir === "up") from.y = 60;
    if (dir === "down") from.y = -60;
    if (dir === "left") from.x = 60;
    if (dir === "right") from.x = -60;

    // ✅ 초기 상태 설정 (깜빡임 방지)
    gsap.set(el, from);

    // ✅ scrollTrigger timeline with reverse
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom top",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power2.out" },
      })
      .fromTo(el, from, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        delay,
      });
  });

  // ✅ 이미지 로딩 후 트리거 갱신
  document.querySelectorAll("img").forEach((img) => {
    if (!img.complete) {
      img.addEventListener("load", () => ScrollTrigger.refresh(), {
        once: true,
      });
      img.addEventListener("error", () => ScrollTrigger.refresh(), {
        once: true,
      });
    }
  });

  // ✅ 폰트 및 리사이즈 옵저버
  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    ro.observe(document.body);
  }

  // ✅ prefers-reduced-motion 고려
  ScrollTrigger.matchMedia({
    "(prefers-reduced-motion: reduce)": function () {
      gsap.set("[fade]", { opacity: 1, clearProps: "all" });
      ScrollTrigger.getAll().forEach((st) => st.kill());
    },
  });

  // ✅ 페이지 로드 후 강제 리프레시
  window.addEventListener("load", () => {
    setTimeout(() => ScrollTrigger.refresh(), 300);
  });
});
