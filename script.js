window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  if ("fonts" in document) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }

  const fadeElements = document.querySelectorAll("[fade]");

  fadeElements.forEach((el) => {
    const dir = el.getAttribute("fade");
    const delay = Number(el.dataset.delay) || 0;

    // 방향별 from 상태 정의
    const from = { opacity: 0 };
    if (dir === "up") from.y = 60;
    if (dir === "down") from.y = -60;
    if (dir === "left") from.x = 60;
    if (dir === "right") from.x = -60;

    // 타임라인 + toggleActions로 재생/역재생을 보장
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom top",
          toggleActions: "play reverse play reverse", // ← 핵심
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power2.out" },
      })
      .fromTo(
        el,
        { ...from },
        { opacity: 1, x: 0, y: 0, duration: 0.8, delay }
      );
  });

  window.addEventListener("load", () => {
    setTimeout(() => ScrollTrigger.refresh(), 300);
  });

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

  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    ro.observe(document.body);
  }

  ScrollTrigger.matchMedia({
    "(prefers-reduced-motion: reduce)": function () {
      gsap.set("[fade]", { opacity: 1, clearProps: "all" });
      ScrollTrigger.getAll().forEach((st) => st.kill());
    },
  });
});
