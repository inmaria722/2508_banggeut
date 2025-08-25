window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // banner
  // 왼쪽 → 오른쪽 페이드 인 (data-anim="fade-ltr")
  $('[data-anim="fade-ltr"]').each(function () {
    const $el = $(this);
    const delay = Number($el.data("delay")) || 0;
    const dist = Number($el.data("dist")) || 60;
    const dur = Number($el.data("dur")) || 0.8;
    const start = $el.data("start") || "top 80%";
    const once = String($el.data("once")).toLowerCase() === "true";

    gsap.fromTo(
      this,
      { opacity: 0, x: -dist },
      {
        opacity: 1,
        x: 0,
        duration: dur,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: this,
          start,
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      }
    );
  });

  // 선택자: data-anim="scale-scroll"
  $('[data-anim="scale-scroll"]').each(function () {
    const $el = $(this);

    // data-* 파라미터 유틸
    const str = (k, d) => String($el.data(k) ?? d);
    const num = (k, d) => {
      const v = Number($el.data(k));
      return Number.isFinite(v) ? v : d;
    };

    const mode = str("mode", "grow").toLowerCase(); // grow | shrink
    const from = num("from", mode === "grow" ? 0.8 : 0.9);
    const to = num("to", mode === "grow" ? 1.05 : 0.6);
    const fadeAttr = $el.data("fade"); // undefined면 기본 true
    const fadeEnabled =
      fadeAttr === undefined
        ? true
        : String(fadeAttr).toLowerCase() !== "false";
    const start = str("start", "top 85%");
    const end = str("end", "+=300");
    const scrubVal = num("scrub", 0.6);

    gsap.fromTo(
      this,
      { scale: from, opacity: fadeEnabled ? 0 : 1 },
      {
        scale: to,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: this,
          start,
          end,
          scrub: scrubVal,
        },
      }
    );
  });

  gsap.fromTo(
    ".banner .phone",
    {
      y: 1000,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      delay: 0.4,
      ease: "power3.out",
    }
  );
});
