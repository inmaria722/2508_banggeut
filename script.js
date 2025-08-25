window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 전역 설정: 자동 리프레시 이벤트 확대
  ScrollTrigger.config({
    autoRefreshEvents: "DOMContentLoaded,load,resize,visibilitychange",
  });

  // 접근성: 모션 줄이기 환경에선 애니메이션 패스
  ScrollTrigger.matchMedia({
    "(prefers-reduced-motion: reduce)": function () {
      gsap.set("[fade]", { opacity: 1, clearProps: "all" });
      ScrollTrigger.getAll().forEach((st) => st.kill());
    },
  });

  // 폰트 준비 후 한 번 더 리프레시 (긴 페이지일수록 효과 큼)
  if ("fonts" in document) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }

  // 초기 상태 세팅 (깜빡임 방지)
  document.querySelectorAll("[fade]").forEach((el) => {
    const dir = el.getAttribute("fade");
    const from = { opacity: 0, immediateRender: false };
    if (dir === "up") from.y = 60;
    if (dir === "down") from.y = -60;
    if (dir === "left") from.x = 60;
    if (dir === "right") from.x = -60;
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

  // 모든 애니메이션/트리거 등록 뒤, 느린 리소스를 감안한 지연 리프레시
  window.addEventListener("load", () => {
    setTimeout(() => ScrollTrigger.refresh(), 150);
  });

  // 이미지가 늦게 오는 페이지라면: 개별 로딩에도 리프레시
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

  // 컨텐츠가 동적으로 변할 수 있으면(아코디언/탭 등) 레이아웃 변화를 감지해 리프레시
  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    ro.observe(document.body);
  }
});
