window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  //blue
  // blue-box-1
  const $el = $(".blue-box-1 .bg-blue");
  if (!$el.length) return;
  const el = $el[0];

  gsap.to(el, {
    // 위쪽만 둥글게
    borderTopLeftRadius: "1273.5px 842px",
    borderTopRightRadius: "1273.5px 842px",
    ease: "none",
    scrollTrigger: {
      trigger: ".blue-box-1",
      start: "top 95%", // 더 빨리 시작
      end: "+=250", // 짧게 끝나서 빨리 완성
      scrub: true,
      onEnter: () => (el.style.willChange = "border-radius"),
      onEnterBack: () => (el.style.willChange = "border-radius"),
      onLeave: () => (el.style.willChange = ""),
      onLeaveBack: () => (el.style.willChange = ""),
    },
  });

  // blue-box-4
  const num = (el, k, d) => {
    const v = Number($(el).data(k));
    return Number.isFinite(v) ? v : d;
  };
  const bool = (el, k, d = false) => {
    const v = $(el).data(k);
    return v === undefined ? d : String(v).toLowerCase() === "true";
  };

  // 모션 최소화 접근성
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $("[data-anim-stagger] [data-anim-item]").each((_, e) => {
      e.style.opacity = 1;
      e.style.transform = "none";
    });
    return;
  }

  // 컨테이너별 초기화
  $("[data-anim-stagger]").each(function (_, group) {
    const order = ($(group).data("order") || "x").toLowerCase();
    const items = $(group).find("[data-anim-item]").toArray();
    if (!items.length) return;

    if (order === "x") {
      items.sort(
        (a, b) =>
          a.getBoundingClientRect().left - b.getBoundingClientRect().left
      );
    }

    // 옵션
    const dist = num(group, "dist", 60);
    const dur = num(group, "dur", 0.8);
    const each = num(group, "each", 0.12);
    const delay = num(group, "delay", 0);
    const once = bool(group, "once", false);
    const start = $(group).data("start") || "top 85%";
    const scrub = bool(group, "scrub", false);

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay,
      scrollTrigger: {
        trigger: group,
        start,
        toggleActions: once ? "play none none none" : "play none none reverse",
        scrub: scrub ? 0.3 : false,
      },
    });

    // 아이템 순차 애니메이션
    items.forEach((el, i) => {
      tl.fromTo(
        el,
        { opacity: 0, x: -dist, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: dur },
        i * each
      );
    });
  });
});
