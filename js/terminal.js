/* ============================================================
   js/terminal.js
   Interactive CLI terminal widget.
   Depends on: js/data.js (projects array)
   ============================================================ */

const termOutput = document.getElementById("term-output");
const termInput  = document.getElementById("term-input");
let cmdHistory = [];
let histIndex  = -1;

// ── Command handlers ─────────────────────────────────────────

const commands = {
  help: () => `
    <div class="tline t-out">Available commands:</div>
    <div class="tline"><span class="t-hi">whoami</span>     — Who am I</div>
    <div class="tline"><span class="t-hi">skills</span>     — My tech skills</div>
    <div class="tline"><span class="t-hi">experience</span> — Work &amp; internship history</div>
    <div class="tline"><span class="t-hi">projects</span>   — My GitHub projects</div>
    <div class="tline"><span class="t-hi">contact</span>    — Get in touch</div>
    <div class="tline"><span class="t-hi">coffee</span>     — Current status ☕</div>
    <div class="tline"><span class="t-hi">hng</span>        — About HNG internship</div>
    <div class="tline"><span class="t-hi">clear</span>      — Clear the terminal</div>
    <div class="tline">&nbsp;</div>
  `,

  whoami: () => `
    <div class="tline t-out">Tuwatimi Emmanuel</div>
    <div class="tline t-out">Role:     Frontend Developer (2 years exp)</div>
    <div class="tline t-out">Location: Nigeria 🇳🇬 · Remote-ready</div>
    <div class="tline t-out">Email:    tuwatimiemmanuel5@gmail.com</div>
    <div class="tline t-out">GitHub:   github.com/Rioemmy</div>
    <div class="tline">&nbsp;</div>
  `,

  skills: () => `
    <div class="tline t-out">── Frameworks ──</div>
    <div class="tline t-out"><span class="t-hi">React.js</span> · <span class="t-hi">Next.js</span> · TypeScript</div>
    <div class="tline t-out">── Styling ──</div>
    <div class="tline t-out"><span class="t-hi">Tailwind CSS</span> · CSS3 · HTML5</div>
    <div class="tline t-out">── Animation ──</div>
    <div class="tline t-out">Framer Motion · CSS Animations</div>
    <div class="tline t-out">── Tools ──</div>
    <div class="tline t-out">Git · GitHub · Vite · Figma · VS Code</div>
    <div class="tline">&nbsp;</div>
  `,

  experience: () => `
    <div class="tline t-out">── Experience ──</div>
    <div class="tline"><span class="t-hi">2025-present</span> → HNG Intern · Track 1B · Frontend</div>
    <div class="tline"><span class="t-hi">2023-present</span> → Self-employed Frontend Dev</div>
    <div class="tline"><span class="t-hi">2023</span>         → ALX Software Engineering pre-course</div>
    <div class="tline">&nbsp;</div>
  `,

  projects: () => `
    <div class="tline t-out">── GitHub Projects ──</div>
    ${projects.map(p => `<div class="tline"><span class="t-hi">${p.num}</span> ${p.title} — ${p.tags[0]}</div>`).join("")}
    <div class="tline t-out">Scroll up to the Projects section to explore them ↑</div>
    <div class="tline">&nbsp;</div>
  `,

  contact: () => `
    <div class="tline t-out">── Contact ──</div>
    <div class="tline t-out">Email:  <span class="t-hi">tuwatimiemmanuel5@gmail.com</span></div>
    <div class="tline t-out">GitHub: github.com/Rioemmy</div>
    <div class="tline">&nbsp;</div>
  `,

  coffee: () => `
    <div class="tline t-out">☕ Cups today: <span class="t-hi">${Math.floor(Math.random() * 3) + 2}</span></div>
    <div class="tline t-out">Status: <span class="t-green">● deep focus mode</span></div>
    <div class="tline t-out">Currently: building something cool</div>
    <div class="tline">&nbsp;</div>
  `,

  hng: () => `
    <div class="tline t-out">── HNG Internship ──</div>
    <div class="tline t-out">One of Africa's most competitive tech programmes.</div>
    <div class="tline t-out">Track:  <span class="t-hi">1B — Frontend Engineering</span></div>
    <div class="tline t-out">Focus:  React · TypeScript · Tailwind CSS</div>
    <div class="tline t-out">Goal:   Ship real products, fast.</div>
    <div class="tline">&nbsp;</div>
  `,
};

// ── Run a command ─────────────────────────────────────────────

function runCommand(raw) {
  const cmd = raw.trim().toLowerCase();

  // Echo the typed command
  termOutput.insertAdjacentHTML("beforeend", `
    <div class="tline">
      <span class="t-prompt">tuwatimi@portfolio:~$ </span>
      <span class="t-cmd">${raw}</span>
    </div>
  `);

  if (cmd === "clear") {
    termOutput.innerHTML = "";
    return;
  }

  const handler = commands[cmd];
  if (handler) {
    termOutput.insertAdjacentHTML("beforeend", handler());
  } else {
    termOutput.insertAdjacentHTML("beforeend", `
      <div class="tline t-err">command not found: ${raw}</div>
      <div class="tline t-out">Type <span class="t-hi">help</span> for available commands.</div>
      <div class="tline">&nbsp;</div>
    `);
  }

  termOutput.scrollTop = termOutput.scrollHeight;
}

// ── Input events ──────────────────────────────────────────────

termInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const val = termInput.value.trim();
    if (!val) return;
    cmdHistory.unshift(val);
    histIndex = -1;
    runCommand(val);
    termInput.value = "";
  }

  if (e.key === "ArrowUp") {
    histIndex = Math.min(histIndex + 1, cmdHistory.length - 1);
    termInput.value = cmdHistory[histIndex] || "";
    e.preventDefault();
  }

  if (e.key === "ArrowDown") {
    histIndex = Math.max(histIndex - 1, -1);
    termInput.value = histIndex === -1 ? "" : cmdHistory[histIndex];
    e.preventDefault();
  }
});

// Clicking anywhere in the terminal focuses input
document.getElementById("terminal").addEventListener("click", () => termInput.focus());
