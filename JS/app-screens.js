window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const $el = $(".app-screen-box");
  if (!$el.length) return;
  const el = $el[0];

  gsap.to(el, {
    borderTopLeftRadius: "1273.5px 842px",
    borderTopRightRadius: "1273.5px 842px",
    ease: "none",
    scrollTrigger: {
      trigger: ".app-screen-box",
      start: "top 95%",
      end: "+=250",
      scrub: true,
      onEnter: () => (el.style.willChange = "border-radius"),
      onEnterBack: () => (el.style.willChange = "border-radius"),
      onLeave: () => (el.style.willChange = ""),
      onLeaveBack: () => (el.style.willChange = ""),
    },
  });
});
