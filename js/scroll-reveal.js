/* ============================================================
   js/scroll-reveal.js
   IntersectionObserver that fires .visible on elements as they
   enter the viewport. Also triggers skill-bar animations.
   ============================================================ */

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");

      // Skill bars store their target width in data-w
      if (entry.target.classList.contains("skill-fill")) {
        entry.target.style.transform = `scaleX(${entry.target.dataset.w})`;
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document
  .querySelectorAll(".reveal, .skill-fill, .stat-cell")
  .forEach(el => revealObserver.observe(el));
