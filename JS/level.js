window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  $('[slide="up"]').each(function (i, e) {
    const delay = $(e).data("delay") || 0;

    const tl = gsap.timeline();

    tl.fromTo(
      e,
      { y: 60, opacity: 1 },
      { y: 0, opacity: 1, duration: 0.8, delay: delay, ease: "power2.out" }
    );

    if ($(e).hasClass("level-3-up")) {
      tl.to(e, {
        y: -60,
        duration: 0.5,
        delay: 0.2,
        ease: "power1.out",
      });
    }

    ScrollTrigger.create({
      trigger: e,
      animation: tl,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    });
  });

  gsap.fromTo(
    ".level-box .bg-clover",
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
        trigger: ".level-box",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".bar-grow",
    {
      width: 0,
    },
    {
      width: "48%",

      duration: 1.4,
      ease: "power2.out",

      scrollTrigger: {
        trigger: ".gauge-box-wrap",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".gauge-bar > .clover",
    {
      x: -300,
    },
    {
      x: 0,

      duration: 1.4,
      ease: "power2.out",

      scrollTrigger: {
        trigger: ".gauge-box-wrap",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  gsap.fromTo(
    ".level-box .speech-bubble",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      delay: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".gauge-box-wrap",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );

  $(window).on("scroll", function () {
    const $target = $(".current-box");
    const $span = $target.find("span");

    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const targetOffset = $target.offset().top;

    if (scrollTop + windowHeight - 200 > targetOffset) {
      $span.addClass("active");
    } else {
      $span.removeClass("active");
    }
  });
});
