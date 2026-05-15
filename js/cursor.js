/* ============================================================
   js/cursor.js
   Custom animated cursor — dot + lagging ring.
   Respects prefers-reduced-motion.
   ============================================================ */

const cursor     = document.getElementById("cursor");
const cursorRing = document.getElementById("cursor-ring");

let mouseX = -100, mouseY = -100;
let ringX  = -100, ringY  = -100;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!noMotion) {
  (function animateCursor() {
    // Dot snaps to pointer instantly
    cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

    // Ring follows with a gentle lerp (lag effect)
    ringX += (mouseX - ringX) * 0.11;
    ringY += (mouseY - ringY) * 0.11;
    cursorRing.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;

    requestAnimationFrame(animateCursor);
  })();
}
