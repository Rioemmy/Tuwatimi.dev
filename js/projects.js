/* ============================================================
   js/projects.js
   Renders project cards into #proj-grid, wires filter buttons,
   and manages the project detail modal.
   Depends on: js/data.js (projects array)
   ============================================================ */

// ── Card rendering ──────────────────────────────────────────

function renderProjects(filter) {
  const grid = document.getElementById("proj-grid");
  grid.innerHTML = "";

  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.cats.includes(filter));

  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "proj-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "article");
    card.setAttribute("aria-label", `Project: ${p.title}`);
    card.style.transitionDelay = `${i * 0.06}s`;

    const demoLink = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener" aria-label="Live demo of ${p.title}">Demo ↗</a>`
      : `<a class="placeholder" title="No live deploy yet" aria-label="No live demo for ${p.title}">Demo —</a>`;

    card.innerHTML = `
      <div class="proj-img" aria-hidden="true">
        <span class="proj-img-num">${p.num}</span>
        <span class="proj-img-label">[ ${p.tags[0]} · Project ]</span>
      </div>
      <div class="proj-body">
        <h3 class="proj-title">${p.title}</h3>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-foot">
          <div class="proj-tags">
            ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join("")}
          </div>
          <div class="proj-links">
            ${demoLink}
            <a href="${p.repo}" target="_blank" rel="noopener" aria-label="GitHub repo for ${p.title}">Repo ↗</a>
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click",   () => openModal(p));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") openModal(p);
    });

    grid.appendChild(card);
  });
}

// Initial render
renderProjects("all");

// Filter buttons
document.querySelectorAll(".filt").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filt").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// ── Modal ───────────────────────────────────────────────────

function openModal(p) {
  const demoBtn = p.demo
    ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn-primary" style="border:none;text-decoration:none;">Live demo ↗</a>`
    : `<span style="font-family:var(--mono);font-size:0.78rem;color:var(--dim);">No live deploy yet</span>`;

  document.getElementById("modal-content").innerHTML = `
    <p style="font-family:var(--mono);font-size:0.6rem;color:var(--dim);margin-bottom:0.4rem;">${p.num}</p>
    <h2 id="modal-title" style="font-family:var(--sans);font-weight:800;font-size:1.6rem;letter-spacing:-0.03em;margin-bottom:1.25rem;">${p.title}</h2>
    <div style="height:140px;background:var(--bg3);border:1px solid var(--border);border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:1.5rem;font-family:var(--mono);font-size:0.65rem;color:var(--dim);">[ ${p.tags[0]} · Preview ]</div>
    <p style="font-size:0.88rem;color:var(--muted);line-height:1.85;margin-bottom:1.5rem;">${p.detail}</p>
    <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1.5rem;">
      ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join("")}
    </div>
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      ${demoBtn}
      <a href="${p.repo}" target="_blank" rel="noopener" class="btn-ghost" style="text-decoration:none;">View on GitHub ↗</a>
    </div>
  `;

  document.getElementById("modal-bg").classList.add("open");
  document.getElementById("modal-x").focus();
}

function closeModal() {
  document.getElementById("modal-bg").classList.remove("open");
}

// Close triggers
document.getElementById("modal-x").addEventListener("click", closeModal);
document.getElementById("modal-bg").addEventListener("click", e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
