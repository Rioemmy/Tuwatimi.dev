/* ============================================================
   js/contact.js
   Contact form validation and (simulated) submit handler.
   Replace the setTimeout with a real API call (e.g. Formspree,
   EmailJS, or your own backend endpoint).
   ============================================================ */

document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();

  const status = document.getElementById("form-msg");
  const name   = document.getElementById("c-name").value.trim();
  const email  = document.getElementById("c-email").value.trim();
  const msg    = document.getElementById("c-msg").value.trim();

  // Basic validation
  if (!name || !email || !msg) {
    status.style.color = "var(--orange)";
    status.textContent = "Please fill in all fields.";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.style.color = "var(--orange)";
    status.textContent = "Please enter a valid email address.";
    return;
  }

  status.style.color = "var(--dim)";
  status.textContent = "Sending...";

  // TODO: replace with real API call
  // e.g. fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: new FormData(e.target) })
  setTimeout(() => {
    status.style.color = "#22c55e";
    status.textContent = "✓ Message sent! I'll reply within 24 hours.";
    e.target.reset();
  }, 1000);
});
