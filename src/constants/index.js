// 🔹 ICONS
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ww,
  cse,
  financetracker,
  threejs,
} from "../assets";

// 🔹 COMPANY LOGOS
import whisperwave from "../assets/company/whisperwave.jpeg";
import career from "../assets/company/career.png";
import ecell from "../assets/company/ecell.jpg";

// 🔹 NAV LINKS
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// 🔹 SERVICES
const services = [
  { title: "Problem Solver", icon: web },
  { title: "Full-Stack Developer", icon: mobile },
  { title: "System Fundamentals", icon: backend },
  { title: "Open Source Contributor", icon: creator },
];

// 🔹 TECHNOLOGIES
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
];

// 🔹 EXPERIENCE
const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Whisperwave",
    icon: whisperwave,
    iconBg: "#FFFFFF",
    date: "May 2025 - June 2025",
    points: [
      "Developed core features of an anonymous one-to-one therapy communication platform.",
      "Built responsive frontend interfaces using Next.js, React (Hooks, Server and Client Components), TypeScript, HTML, and CSS.",
      "Implemented a secure backend using Golang (Gin) for real-time audio call handling and user session management.",
      "Designed and optimized RESTful APIs in Golang (Gin) enabling secure, low-latency communication between frontend and backend services.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Careers360",
    icon: career,
    iconBg: "#E6DEDD",
    date: "May 2025 - June 2025",
    points: [
      "Encouraged and guided students to submit honest reviews about their college, helping prospective applicants make informed admission decisions.",
      "Increased student participation on the Careers360 platform through peer outreach and structured awareness efforts..",
      "Acted as a point of contact to communicate the importance of transparent college feedback within the campus community.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "E-cell, IIT Bombay",
    icon: ecell,
    iconBg: "#383E56",
    date: "Jul 2025 - Jan 2026",
    points: [
      "Promoted entrepreneurship and innovation-focused events organized by E-Cell IIT Bombay across the campus.",
      "Drove student participation in workshops, competitions, and flagship events through targeted promotions and peer engagement.",
      "Assisted in expanding event visibility and reach among students interested in startups and entrepreneurship.",
    ],
  },
];

// 🔹 PROJECTS
const projects = [
  {
    name: "Whisperwave",
    description:
      "Developed a full-stack platform enabling safe, anonymous discussions on sensitive mental-health topics.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Golang", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
    ],
    image: ww,
    source_code_link: "https://github.com/dev-aditya-g/Whisper_wave-frontend",
  },
  {
    name: "CSS, NIT Durgapur",
    description:
      "Developed & maintained the official website of CSS NIT Durgapur, Integrated event listings, team information, and society updates.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
    ],
    image: cse,
    source_code_link: "https://github.com/dev-aditya-g/CSS-Official-Website",
  },
  {
    name: "Finance Tracker",
    description:
      "Currently building a dashboard-based personal finance tracker for managing investments, bills, and shared expenses.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "MERN", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
    image: financetracker,
    source_code_link: "https://github.com/dev-aditya-g?tab=repositories",
  },
];

// 🔹 EXPORTS
export { services, technologies, experiences, projects };
