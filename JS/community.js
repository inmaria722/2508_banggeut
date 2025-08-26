window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // community
  const targets = [
    ".community-box .phone-mockup",
    ".community-box .popup-img-box",
    ".community-box .coummunity-img",
    ".community-box .btn-img-box",
  ];

  gsap.set(targets, { opacity: 0, y: -30 });

  const tl = gsap.timeline();

  tl.to(".community-box .phone-mockup", {
    opacity: 1,
    y: 0,
    duration: 0.3,
    ease: "power2.out",
  })
    .to(".community-box .popup-img-box", {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })
    .to(".community-box .coummunity-img", {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })
    .to(".community-box .btn-img-box", {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });

  ScrollTrigger.create({
    trigger: ".community-box .phone-layer-box",
    start: "top 75%",
    toggleActions: "play none none reverse",
    animation: tl,
  });

  // ----- 시간차를 두고 슬라이드 업 -----
  const $boxes = $(".community-box .point-box-wrap .point-box");
  if (!$boxes.length) return;

  gsap.set($boxes, { opacity: 0, y: 40 });

  gsap.to($boxes.toArray(), {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: { each: 0.45, from: "start" },
    scrollTrigger: {
      trigger: ".community-box .point-box-wrap",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});
