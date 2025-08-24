window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // scrap
  // 유틸
  const num = (el, k, d) => {
    const v = Number($(el).data(k));
    return Number.isFinite(v) ? v : d;
  };
  const bool = (el, k, d = false) => {
    const v = $(el).data(k);
    return v === undefined ? d : String(v).toLowerCase() === "true";
  };

  // 접근성: 모션 최소화
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  $('[data-anim="float"]').each(function (_, el) {
    if (reduce) {
      el.style.transform = "none";
      return;
    }

    const amp = num(el, "amp", 100);
    const speed = num(el, "speed", 2);
    const rot = num(el, "rot", 2);
    const axis = String($(el).data("axis") || "y").toLowerCase(); // 'y' | 'x'
    const delay = num(el, "delay", Math.random() * speed);
    const breath = num(el, "breath", 0);
    const start = $(el).data("start") || "top 95%";

    const prop = axis === "x" ? "x" : "y";

    // 기준점 보정 (대칭 왕복)
    gsap.set(el, { [prop]: `-=${amp / 2}`, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "sine.inOut" },
      delay,
    });

    tl.to(el, {
      [prop]: `+=${amp}`, // -amp/2 ↔ +amp/2
      rotation: rot,
      duration: speed,
      yoyo: true,
      repeat: -1,
      overwrite: "auto",
    });

    if (breath > 0) {
      tl.to(
        el,
        {
          scale: 1 + breath,
          duration: speed,
          yoyo: true,
          repeat: -1,
          overwrite: "auto",
        },
        0
      );
    }

    // 보일 때만 실행/일시정지 (퍼포먼스)
    ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () => tl.play(),
      onLeave: () => tl.pause(),
      onEnterBack: () => tl.resume(),
      onLeaveBack: () => tl.pause(),
    });
  });
});
