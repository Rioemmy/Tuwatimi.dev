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
    title:  "Todo App",
    desc:   "A task management app. Features dynamic card creation, task add/remove, and clean vanilla JS DOM manipulation.",
    tags:   ["JavaScript", "HTML", "CSS"],
    cats:   ["js"],
    repo:   "https://github.com/Rioemmy/TODO-APP",
    demo:   "https://rioemmy.github.io/TODO-APP/",
    detail: "Features dynamic card creation, task add/remove, and clean vanilla JS DOM manipulation — all in vanilla JS with no framework. Mobile-responsive layout.",
  },

  {
    id:     2,
    num:    "002",
    title:  "Calculator App",
    desc:   "A fully functional browser calculator with all arithmetic operations, keyboard support, and decimal handling.",
    tags:   ["JavaScript", "CSS", "HTML"],
    cats:   ["js"],
    repo:   "https://github.com/Rioemmy/calc",
    demo:   "https://rioemmy.github.io/calc/",
    detail: "Custom calculator app handling addition, subtraction, multiplication, and division. Listens to keyboard events for a native feel. CSS Grid layout for the button pad.",
  },
  {
    id:     3,
    num:    "003",
    title:  "Whisper Box",
    desc:   "A messaging web application focused on secure communication between users with API-driven message handling.",
    tags:   ["JavaScript", "TypeScript", "REST APIs"],
    cats:   ["react"],
    repo:   "https://github.com/Rioemmy/whisper-box",
    demo:   "whisper-box-messenger.vercel.app",
    detail: "Messaging application with API integration for sending and retrieving messages. Built with a modular frontend structure and responsive UI for smooth user experience across devices.",
  },

  {
    id:     4,
    num:    "004",
    title:  "Crypto Pulse",
    desc:   "A real-time cryptocurrency dashboard displaying live market data with a clean and responsive interface.",
    tags:   ["Vue", "JavaScript"],
    cats:   ["vue"],
    repo:   "https://github.com/Rioemmy/crypto-pulse",
    demo:   "https://crypto-pulse-data.vercel.app",
    detail: "Real-time crypto dashboard with live API data integration. Built interactive UI components and responsive layouts for seamless viewing across devices.",
  },

  {
    id:     5,
    num:    "005",
    title:  "Seil",
    desc:   "A collaborative marketing web application built during HNG Internship with modern frontend tools and API data handling.",
    tags:   ["Next.js", "TypeScript", "TanStack Query"],
    cats:   ["Next.js"],
    repo:   "https://github.com/hngprojects/flowbrand-ui",
    demo:   "https://staging.flowbrand.hng14.com/",
    detail: "Collaborated in a cross-functional team to build a marketing web application. Implemented data fetching and caching using TanStack Query, translated Figma designs and PRDs into reusable UI components, and contributed to responsive and accessible frontend features.",
  }
  


];

const resumeContent = 
`
here’s a clean text version of your resume:


---

TUWATIMI EMMANUEL
Frontend Engineer

📍 Lagos State, Nigeria
📞 +2348032133882
📧 tuwatimiemmanuel5@gmail.com
🌐 https://tuwatimi.vercel.app
🔗 https://github.com/Rioemmy



PROFESSIONAL SUMMARY

Frontend Engineer with 2+ years of experience building responsive and scalable web applications using React, Next.js, and TypeScript. Skilled in API integration, real-time data handling, and translating UI/UX designs into production-ready interfaces. Experienced working in collaborative environments and delivering user-focused solutions.



TECHNICAL SKILLS

Programming Languages:
JavaScript (ES6+), TypeScript, HTML5, CSS3

Frameworks & Libraries:
React.js, Next.js, Vue

Styling & UI:
Tailwind CSS, CSS Modules, Responsive Design, Accessibility

Tools & Technologies:
Git, GitHub, Vite, REST APIs

Core Competencies:
Frontend Development, Component-Based Architecture, API Integration, State Management, Performance Optimization



WORK EXPERIENCE

HNG Tech — Intern
April 2026 – June 2026

Developed frontend applications using React.js, Next.js, and TypeScript

Collaborated with designers and developers using Figma and product requirement documents (PRDs)

Built responsive and reusable UI components aligned with design specifications

Participated in team workflows using Git/GitHub in a fast-paced environment


Key Project:
Seil — Marketing Web Application
Next.js, TypeScript, TanStack Query

Collaborated with a team to build a marketing web application

Implemented data fetching and caching using TanStack Query

Translated Figma designs and PRDs into reusable UI components

Built responsive and accessible user interfaces




PROJECTS

Whisper Box — Messaging Web Application
TypeScript, JavaScript, REST APIs

Built a messaging web application focused on secure communication

Integrated APIs for sending and retrieving messages

Designed responsive user interfaces for smooth user experience

Structured the frontend for maintainability and scalability


E-commerce Web Application
React, JavaScript, Tailwind CSS

Built a responsive e-commerce interface with product listing and cart functionality

Integrated APIs to fetch and display dynamic product data

Developed reusable UI components for scalability and consistency

Implemented clean layouts for smooth user experience across devices


Additional projects available on GitHub and portfolio.



EDUCATION

Federal University of Technology, Owerri
B.Eng — Petroleum Engineering
`;
