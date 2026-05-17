/* ============================================================
   js/data.js
   All static data: project list, resume text.
   Edit this file to add / update projects without touching any
   other module.
   ============================================================ */

const projects = [
  {
    id:     1,
    num:    "001",
    title:  "HNG Todo Card App",
    desc:   "A task management app built as HNG Track 0. Features dynamic card creation, task add/remove, and clean vanilla JS DOM manipulation.",
    tags:   ["JavaScript", "HTML", "CSS"],
    cats:   ["hng", "js"],
    repo:   "https://github.com/Rioemmy/HNG-TASK0-BASIC-TODO-CARD-APP",
    demo:   "https://rioemmy.github.io/HNG-TASK0-BASIC-TODO-CARD-APP/",
    detail: "First HNG internship task. Demonstrates core DOM manipulation, dynamic card creation, and task state management — all in vanilla JS with no framework. Mobile-responsive layout.",
  },

  {
    id:     2,
    num:    "003",
    title:  "Calculator App",
    desc:   "A fully functional browser calculator with all arithmetic operations, keyboard support, and decimal handling.",
    tags:   ["JavaScript", "CSS", "HTML"],
    cats:   ["js"],
    repo:   "https://github.com/Rioemmy/calc",
    demo:   null,
    detail: "Custom calculator app handling addition, subtraction, multiplication, and division. Listens to keyboard events for a native feel. CSS Grid layout for the button pad.",
  },
  {
    id:     3,
    num:    "004",
    title:  "Drum Set",
    desc:   "An interactive browser drum kit. Press keys or click pads to trigger real drum sounds via the Web Audio API.",
    tags:   ["JavaScript", "HTML", "CSS"],
    cats:   ["js"],
    repo:   "https://github.com/Rioemmy/drumset",
    demo:   null,
    detail: "Keyboard and click-driven drum machine. Each pad maps to a real drum sound sample. Includes visual press feedback and CSS animations on hit.",
  },


];

const resumeContent = `TUWATIMI EMMANUEL
Frontend Developer
tuwatimiemmanuel5@gmail.com | github.com/Rioemmy | Nigeria

═══════════════════════════════════════════════
OBJECTIVE
═══════════════════════════════════════════════
Frontend developer with 2+ years of experience building responsive,
performant web applications using React, Next.js, and TypeScript.
Currently growing through the HNG internship programme.

═══════════════════════════════════════════════
EXPERIENCE
═══════════════════════════════════════════════
HNG Internship — Track 1B, Frontend Engineering     2025–Present
• Shipping real-world React / TypeScript projects
• Collaborating with developers across Africa
• Focus on performance, accessibility, and clean code

Freelance Frontend Developer                        2024–Present
• Built custom websites and web apps for clients
• React, Next.js, Tailwind CSS, TypeScript
• Foundations of software engineering and Linux

═══════════════════════════════════════════════
SKILLS
═══════════════════════════════════════════════
Frameworks:  React.js · Next.js · TypeScript · JavaScript (ES6+)
Styling:     Tailwind CSS · CSS3 · HTML5
Animation:   Framer Motion · CSS Animations & Transitions
Tools:       Git · GitHub · Vite · Figma · VS Code

═══════════════════════════════════════════════
PROJECTS
═══════════════════════════════════════════════
HNG Todo Card App       github.com/Rioemmy/HNG-TASK0-BASIC-TODO-CARD-APP

Calculator App          github.com/Rioemmy/calc
Drum Set                github.com/Rioemmy/drumset


═══════════════════════════════════════════════
EDUCATION
═══════════════════════════════════════════════
Self-taught Frontend Development            2024–Present

═══════════════════════════════════════════════
NOTE
═══════════════════════════════════════════════
This is a developer-generated resume. For the full portfolio
visit: https://github.com/Rioemmy
`;
