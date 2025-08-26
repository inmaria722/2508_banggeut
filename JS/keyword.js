window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // keyword
  const $cards = $(
    ".keyword-box .words-box-wrap .word, .keyword-box .words-box-wrap .word-light, .keyword-box .words-box-wrap .word2, .keyword-box .words-box-wrap .word-light2"
  );
  if (!$cards.length) return;

  gsap.fromTo(
    $cards.toArray(),
    { opacity: 0, scale: 0.7 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      stagger: { each: 0.15, from: "random" },
      scrollTrigger: {
        trigger: ".keyword-box",
        start: "top 20%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
