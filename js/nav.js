/* ============================================================
   js/nav.js
   Mobile menu open / close behaviour.
   ============================================================ */

const mobMenu = document.getElementById("mob-menu");

document.getElementById("hamburger").addEventListener("click", () => {
  mobMenu.classList.add("open");
});

document.getElementById("mob-close").addEventListener("click", () => {
  mobMenu.classList.remove("open");
});

// Close on any link tap
document.querySelectorAll(".mob-link").forEach(link => {
  link.addEventListener("click", () => mobMenu.classList.remove("open"));
});
