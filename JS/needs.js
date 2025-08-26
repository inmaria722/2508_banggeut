window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // needs
  const needsInterview1 = gsap.timeline();

  ScrollTrigger.create({
    animation: needsInterview1,
    trigger: ".needs-box",
    start: "top top",
    end: "bottom 110%",
    scrub: 1,
  });
  needsInterview1.to(
    ".needs-box .interview-box-wrap-1",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );

  const needsInterview2 = gsap.timeline();
  ScrollTrigger.create({
    animation: needsInterview2,
    trigger: ".needs-box",
    start: "top top",
    end: "bottom 110%",
    scrub: 1,
  });
  needsInterview1.to(
    ".needs-box .interview-box-wrap-2",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0.2
  );

  // needs - insight-btn
  {
    const $btn = $(".insight-btn");
    const $circle = $btn.find(".insight-circle");
    const $label = $btn.find("span");
    const $right = $(".insight-text");
    if (!$btn.length || !$circle.length || !$label.length || !$right.length)
      return;

    const expandedWidth = $btn[0].getBoundingClientRect().width;
    const circleW = $circle[0].getBoundingClientRect().width || 90;
    const collapsedWidth = circleW + 60;
    const labelNaturalW = $label[0].getBoundingClientRect().width;

    gsap.set($btn[0], {
      width: collapsedWidth,
      paddingLeft: 30,
      paddingRight: 30,
      gap: 0,
      x: 0,
      overflow: "hidden",
    });
    gsap.set($label[0], {
      autoAlpha: 0,
      x: -8,
      maxWidth: 0,
      display: "inline-block",
    });
    gsap.set($right[0], { autoAlpha: 0, x: -30 });

    const tl = gsap.timeline();
    const holdDur = 0.3;
    const shoveDist = 28;

    tl.to({}, { duration: holdDur })
      .to($btn[0], { x: shoveDist, duration: 0.22, ease: "power2.in" })
      .to(
        $btn[0],
        {
          width: expandedWidth,
          paddingLeft: 40,
          paddingRight: 40,
          gap: 30,
          duration: 0.45,
          ease: "power2.out",
        },
        "<+0.08"
      )
      .add("expanded")
      .to(
        $label[0],
        { maxWidth: labelNaturalW, duration: 0.35, ease: "power2.out" },
        "<+0.10"
      )
      .to(
        $label[0],
        { autoAlpha: 1, x: 0, duration: 0.25, ease: "power2.out" },
        "<"
      )
      .to(
        $right[0],
        { autoAlpha: 1, x: 0, duration: 0.77, ease: "power3.out" },
        "expanded"
      );

    ScrollTrigger.create({
      trigger: ".needs-box .insight-box",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      animation: tl,
    });
  }
});
