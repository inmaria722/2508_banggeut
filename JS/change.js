window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // change
  if (!window.gsap || !window.ScrollTrigger) return;

  const oEls = gsap.utils.toArray(".clover-o-ol");
  const wEls = gsap.utils.toArray(".clover-w-ol");
  if (!oEls.length && !wEls.length) return;

  gsap.set([oEls, wEls], {
    opacity: 0,
    scale: 0.6,
    transformOrigin: "50% 50%",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".goal-box",
      start: "top 85%",
      once: true,
    },
  });

  //살짝 튀며 등장
  if (oEls.length) {
    tl.to(oEls, {
      keyframes: [
        { opacity: 1, scale: 1.02, duration: 0.35, ease: "back.out(1.2)" },
        { scale: 1.0, duration: 0.15, ease: "power2.out" },
      ],
      stagger: { each: 0.06, from: "start" },
    });
  }

  if (wEls.length) {
    tl.to(
      wEls,
      {
        keyframes: [
          { opacity: 1, scale: 1.02, duration: 0.35, ease: "back.out(1.2)" },
          { scale: 1.0, duration: 0.15, ease: "power2.out" },
        ],
        stagger: { each: 0.06, from: "start" },
      },
      "-=0.25"
    );
  }
});
