/* ============================================================
   js/theme.js
   Light / dark mode toggle.
   ============================================================ */

let isDark = true;
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  isDark = !isDark;
  document.documentElement.setAttribute("data-theme", isDark ? "" : "light");
  themeBtn.textContent = isDark ? "☀ light" : "☾ dark";
});
