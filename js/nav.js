/* ============================================================
   js/nav.js
   Mobile menu open / close behaviour.
   ============================================================ */

const mobMenu = document.getElementById("mob-menu");

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  if (!mobMenu.classList.contains("open")) {
    mobMenu.classList.add("open");
    hamburger.innerHTML = '✕' ;
  }
  else {
    mobMenu.classList.remove("open");
    hamburger.innerHTML = '☰' ;
  }

});



document.getElementById("mob-close").addEventListener("click", () => {
  mobMenu.classList.remove("open");
});

// Close on any link tap
document.querySelectorAll(".mob-link").forEach(link => {
  link.addEventListener("click", () => mobMenu.classList.remove("open"));
});
