window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // needs
  {
    const selector = ".needs-box .interview-box-wrap";
    const baseStagger = 0.1;
    const dur = 0.6;

    $(selector).each(function () {
      const $el = $(this);
      const type = ($el.data("anim") || "slide-left").toLowerCase();

      if (type === "zoom-in") {
        gsap.set($el, {
          autoAlpha: 0,
          scale: 0.85,
          y: 10,
          transformOrigin: "center center",
        });
      } else if (type === "slide-right") {
        gsap.set($el, { autoAlpha: 0, x: 80 });
      } else {
        gsap.set($el, { autoAlpha: 0, x: -80 });
      }
    });

    ScrollTrigger.batch(selector, {
      start: "top 85%",
      onEnter: (batch) => {
        $(batch).each(function (i) {
          const $el = $(this);
          const type = ($el.data("anim") || "slide-left").toLowerCase();
          const extraDelay = parseFloat($el.data("delay") || "0");

          const common = {
            autoAlpha: 1,
            duration: dur,
            ease: "power3.out",
            delay: i * baseStagger + extraDelay,
          };

          if (type === "zoom-in") {
            gsap.to($el, { ...common, scale: 1, y: 0 });
          } else if (type === "slide-right") {
            gsap.to($el, { ...common, x: 0 });
          } else {
            gsap.to($el, { ...common, x: 0 });
          }
        });
      },
    });
  }

  // ----- insight-btn -----
  {
    const $btn = $(".needs-box .insight-btn");
    const $circle = $btn.find(".needs-box .insight-circle");
    const $label = $btn.find(".needs-box span");
    const $right = $(".needs-box .insight-text");

    if (!$btn.length || !$circle.length || !$label.length || !$right.length)
      return;

    const expandedWidth = $btn.outerWidth();
    const circleW = $circle.outerWidth() || 90;
    const collapsedWidth = circleW + 60;
    const labelNaturalW = $label.outerWidth();

    gsap.set($btn, {
      width: collapsedWidth,
      paddingLeft: 30,
      paddingRight: 30,
      gap: 0,
      x: 0,
      overflow: "hidden",
    });
    gsap.set($label, {
      autoAlpha: 0,
      x: -8,
      maxWidth: 0,
      display: "inline-block",
    });
    gsap.set($right, { autoAlpha: 0, x: -30 });

    const tl = gsap.timeline();
    const holdDur = 0.3;
    const shoveDist = 28;

    tl.to({}, { duration: holdDur })
      .to($btn, { x: shoveDist, duration: 0.22, ease: "power2.in" })
      .to(
        $btn,
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
        $label,
        { maxWidth: labelNaturalW, duration: 0.35, ease: "power2.out" },
        "<+0.10"
      )
      .to(
        $label,
        { autoAlpha: 1, x: 0, duration: 0.25, ease: "power2.out" },
        "<"
      )
      .to(
        $right,
        { autoAlpha: 1, x: 0, duration: 0.77, ease: "power3.out" },
        "expanded"
      );

    ScrollTrigger.create({
      trigger: ".needs-box .insight-box",
      start: "top 80%",
      toggleActions: "play none none reverse",
      animation: tl,
    });
  }
});
