window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // search
  // 유틸
  const num = (el, k, d) => {
    const v = Number($(el).data(k));
    return Number.isFinite(v) ? v : d;
  };
  const bool = (el, k, d = false) => {
    const v = $(el).data(k);
    return v === undefined ? d : String(v).toLowerCase() === "true";
  };
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  $('[data-anim="float"]').each(function (_, el) {
    if (reduce) {
      el.style.transform = "none";
      return;
    }

    const amp = num(el, "amp", 12); // 진폭(px)
    const speed = num(el, "speed", 2.2); // 왕복 시간(초)
    const rot = num(el, "rot", 2); // 회전(°)
    const axis = String($(el).data("axis") || "y").toLowerCase(); // 'y' | 'x'
    const delay = num(el, "delay", Math.random() * speed);
    const breath = num(el, "breath", 0); // 호흡 스케일
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
      immediateRender: false,
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
          immediateRender: false,
        },
        0
      );
    }

    ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () => tl.play(),
      onLeave: () => tl.pause(),
      onEnterBack: () => tl.resume(),
      onLeaveBack: () => tl.pause(),
    });
  });

  $('[data-anim="poke"]').each(function (_, el) {
    if (reduce) {
      el.style.transform = "none";
      return;
    }

    const dir = String($(el).data("dir") || "ltr").toLowerCase();
    const axis = dir === "ltr" || dir === "rtl" ? "x" : "y";
    const sign = dir === "rtl" || dir === "btt" ? -1 : 1;

    const dist = num(el, "dist", 14); // 한 번 이동(px)
    const speed = num(el, "speed", 0.28); // 전진 시간
    const back = num(el, "back", 0.18); // 복귀 시간
    const over = num(el, "over", 0.25); // 되튕김 비율
    const squish = num(el, "squish", 0.06); // 전진 시 납작
    const times = Math.max(1, num(el, "times", 3));
    const gap = num(el, "gap", 0.6); // 사이클 간 대기
    const loop = bool(el, "loop", true);
    const start = $(el).data("start") || "top 90%";
    const once = bool(el, "once", false);

    const ripple = el.querySelector('[data-poke="ripple"]');

    // 기준점: 찌르는 방향의 반대쪽(약간 “밀어내는” 감)
    const origin =
      axis === "x"
        ? sign > 0
          ? "0% 50%"
          : "100% 50%" // →는 왼쪽, ←는 오른쪽
        : sign > 0
        ? "50% 0%"
        : "50% 100%"; // ↓는 위, ↑는 아래
    gsap.set(el, { transformOrigin: origin });

    if (ripple) {
      gsap.set(ripple, {
        opacity: 0,
        scale: 0.6,
        transformOrigin: "50% 50%",
        pointerEvents: "none",
      });
    }

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
      repeat: loop ? -1 : 0,
      repeatDelay: loop ? gap : 0,
    });

    // 한 번 “찌르기” 시퀀스
    const doOnePoke = () => {
      // 1) 전진 + 살짝 납작
      tl.to(el, {
        [axis]: `+=${sign * dist}`,
        ...(axis === "x" ? { scaleX: 1 - squish } : { scaleY: 1 - squish }),
        duration: speed,
        ease: "power4.out",
      });

      // 1') 물결 이펙트
      if (ripple) {
        tl.to(
          ripple,
          {
            opacity: 0.35,
            scale: 1.4,
            duration: speed * 0.9,
            ease: "power1.out",
          },
          "<"
        );
        tl.to(
          ripple,
          {
            opacity: 0,
            scale: 1.8,
            duration: back * 1.2,
            ease: "power1.in",
          },
          ">"
        );
      }

      // 2) 빠른 복귀 + 되튕김(반대 방향으로 약간)
      tl.to(el, {
        [axis]: `-=${sign * (dist + dist * over)}`,
        scaleX: 1,
        scaleY: 1,
        duration: back,
        ease: "power2.in",
      });

      // 3) 미세 정착
      tl.to(el, {
        [axis]: `+=${sign * dist * over}`,
        duration: back * 0.8,
        ease: "power1.out",
      });
    };

    for (let i = 0; i < times; i++) doOnePoke();

    ScrollTrigger.create({
      trigger: el,
      start,
      toggleActions: once ? "play none none none" : "play pause resume pause",
      onEnter: () => tl.play(0),
      onLeave: () => tl.pause(),
      onEnterBack: () => tl.play(0),
      onLeaveBack: () => tl.pause(),
    });
  });
});
