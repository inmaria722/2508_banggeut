window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  document
    .querySelectorAll(
      ".character-box .semi, .character-box .nemi, .character-box .dami, .character-box .yumi"
    )
    .forEach((el) => {
      gsap.fromTo(
        el,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

  gsap.fromTo(
    ".character-box .speech-bubble",
    {
      y: 20,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".character-box .speech-bubble",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
