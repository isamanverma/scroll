gsap.registerPlugin(ScrollTrigger);

const clipPathSection = document.querySelector('.clip-path-section .inner');

gsap.to(clipPathSection, {
  scrollTrigger: {
    trigger: clipPathSection,
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  },
  clipPath: 'circle(200% at 0% 0%)',
});

