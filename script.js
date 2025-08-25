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

  gsap.set(el, from);
});

// ✅ batch로 빠른 스크롤/긴 문서에서도 안정적으로 트리거
ScrollTrigger.batch("[fade]", {
  start: "top 85%",
  end: "bottom top", // 빠르게 스크롤해도 다시 잡아줌
  once: true, // 처음 한 번만 실행(원하면 false)
  // 화면 아래에서 올라올 때
  onEnter: (batch) => run(batch),
  // 위로 스크롤해 다시 들어올 때도 안전망
  onEnterBack: (batch) => run(batch),
});

function run(nodes) {
  nodes.forEach((el) => {
    const dir = el.getAttribute("fade");
    const delay = Number(el.dataset.delay) || 0;

    const to = { opacity: 1, duration: 0.8, delay, immediateRender: false };
    if (dir === "up" || dir === "down") to.y = 0;
    if (dir === "left" || dir === "right") to.x = 0;

    gsap.to(el, to);
  });
}

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
