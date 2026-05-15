/* ============================================================
   js/resume.js
   Generates a plain-text resume and triggers a download.
   Resume content lives in js/data.js (resumeContent).
   ============================================================ */

document.getElementById("resume-download-btn").addEventListener("click", () => {
  const blob = new Blob([resumeContent], { type: "text/plain" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");

  a.href     = url;
  a.download = "Tuwatimi_Emmanuel_Resume.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
