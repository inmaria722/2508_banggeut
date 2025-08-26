window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  //marquee
  const $wrap = $(".marquee-box .marquee-wrap");
  const $box = $(".marquee-box");
  const originalContent = $wrap.html();

  while ($wrap[0].scrollWidth < $box.width() * 3) {
    $wrap.append(originalContent);
  }
});
