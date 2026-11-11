/**
 * Portfolio content sourced from Vijay Kant Singh's resume.
 * Update this file to change the site. Components read from here.
 *
 * Image files:
 * - public/images/profile/profile.png
 * - public/images/projects/hydraview.png
 * - public/images/projects/agrocastconnect.png
 * - public/images/projects/thermaxk.png
 * - public/images/projects/uav-records.png
 * - public/images/projects/dam-safety-society.png
 * - public/images/certificates/full-stack-web-development.jpg
 * - public/images/certificates/hackvision-hackathon-2024.jpg
 * - public/images/certificates/c-programming.jpg
 *
 * Leave liveUrl / githubUrl empty until a real link exists.
 */

export const profile = {
  fullName: "Vijay Chaudhary",
  alternateName: "Vijay Kant Singh",
  role: "Junior Software Developer",
  headline: "Junior Software Developer | MERN Stack Developer",
  location: "Dayal Bagh, Agra",
  email: "vijaychaudhary1400@gmail.com",
  phone: "+91-7818994402",
  phoneHref: "tel:+917818994402",
  linkedin: "https://www.linkedin.com/in/vijay-kant-singh",
  linkedinLabel: "linkedin.com/in/vijay-kant-singh",
  github: "https://github.com/VijayChaudhary2557",
  githubLabel: "github.com/VijayChaudhary2557",
  resumeUrl: "/resume/Vijay_Kant_Singh.pdf",
  profileImage: "/images/profile/profile.png",
  tagline: "MERN applications, geospatial tools, and desktop software.",
};

export const roles = [
  "Jr. Software Developer",
  "MERN Stack Developer",
  "Laravel Developer",
  "Full Stack Developer",
];

export const hero = {
  greeting: "Hello, I'm",
  bio: "Junior Software Developer at Agrocast Analytics. I build enterprise web applications with the MERN stack, Electron desktop software, and geospatial tools around Leaflet, GeoTIFF imagery, and ISRO data.",
};

export const about = {
  paragraphs: [
    "I am a Junior Software Developer at Agrocast Analytics Pvt. Ltd. I design and build enterprise web and desktop applications with React.js, Node.js, Express.js, MongoDB, and Electron.js.",
    "The work is practical and data-heavy: geospatial visualization, an ERP for projects and people, UAV inventory workflows, and desktop software for thermal imagery. I integrate REST APIs, render GeoTIFF satellite data on interactive maps, and prepare imagery with QGIS, Google Earth Engine, and Leaflet.",
    "I care about interfaces that stay clear, APIs that stay reliable, and code that is ready for production. That includes role-based access, attendance and payroll workflows, and satellite imagery optimized for the browser.",
    "I hold a Master of Computer Applications from GLA University, Mathura, following a Bachelor of Science in Mathematics from R.B.S. College, Agra. I want to keep building scalable, high-performance software for real operational problems.",
  ],
};

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "GLA University, Mathura",
    period: "2024–2026",
    cgpa: "8.36",
  },
  {
    degree: "Bachelor of Science (Mathematics)",
    school: "R.B.S. College, Agra",
    period: "2021–2024",
    cgpa: "6.78",
  },
];

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Development",
    countsAsTechnology: true,
    items: [
      { name: "React.js", icon: "react" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    countsAsTechnology: true,
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "REST API Development", icon: "api" },
    ],
  },
  {
    id: "database",
    title: "Database",
    countsAsTechnology: true,
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    countsAsTechnology: true,
    items: [
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    id: "gis",
    title: "GIS & Geospatial",
    countsAsTechnology: true,
    items: [
      { name: "Leaflet.js", icon: "leaflet" },
      { name: "Google Earth Engine", icon: "gee" },
      { name: "QGIS", icon: "qgis" },
      { name: "GeoTIFF Processing", icon: "geotiff" },
      { name: "ISRO API Integration", icon: "isro" },
    ],
  },
  {
    id: "desktop",
    title: "Desktop Development",
    countsAsTechnology: true,
    items: [{ name: "Electron.js", icon: "electron" }],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    countsAsTechnology: true,
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
    ],
  },
  {
    id: "other",
    title: "Other Skills",
    countsAsTechnology: false,
    items: [
      { name: "Responsive Interfaces", icon: "responsive" },
      { name: "Performance Optimization", icon: "performance" },
    ],
  },
];

export const experience = [
  {
    id: "agrocast",
    company: "Agrocast Analytics Pvt. Ltd.",
    role: "Junior Software Developer",
    period: "Feb 2026 — Present",
    startDate: "2026-02-01",
    endDate: null,
    responsibilities: [
      "Developing enterprise-level web and desktop applications using React.js, Node.js, Express.js, MongoDB, and Electron.js.",
      "Designing scalable REST APIs and responsive user interfaces.",
      "Building GIS and geospatial applications using Leaflet, GeoTIFF datasets, and ISRO APIs.",
      "Collaborating with cross-functional teams to deliver production-ready software.",
      "Optimizing application performance and improving code quality.",
    ],
    contributions: [
      "Developed MERN stack applications for internal business operations.",
      "Integrated frontend applications with secure backend APIs.",
      "Worked on GIS-based visualization using Leaflet, Google Earth Engine, and QGIS.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Electron.js",
      "REST APIs",
      "Leaflet",
      "GeoTIFF",
      "ISRO APIs",
      "Google Earth Engine",
      "QGIS",
    ],
  },
];

export const projects = [
  {
    id: "hydrview",
    title: "Hydrview",
    image: "/images/projects/hydraview.png",
    summary:
      "A geospatial web application for visualizing GeoTIFF satellite imagery and soil moisture data on interactive maps.",
    description:
      "Hydrview is a geospatial web application for viewing GeoTIFF satellite imagery and soil moisture data. Imagery is rendered as interactive maps, with the data pipeline prepared for the browser.",
    objective:
      "Visualize GeoTIFF satellite imagery and soil moisture data in a web application teams can actually use.",
    features: [
      "Interactive satellite maps built by integrating GeoTIFF layers with Leaflet.",
      "Remote development with VS Code SSH, used to reach ISRO APIs hosted on the company's Ubuntu server.",
      "Large GeoTIFF datasets processed in QGIS by cropping and resampling images for web visualization.",
      "High-resolution satellite imagery optimized for browser-based rendering.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Leaflet", "ISRO APIs", "GeoTIFF", "QGIS"],
    role: "Developer",
    contribution:
      "I developed the geospatial web application, integrated GeoTIFF layers with Leaflet, configured the remote environment for ISRO API access, and prepared imagery for browser rendering.",
    challenges: [
      "Reached ISRO APIs hosted on the company's Ubuntu server through a VS Code SSH remote environment.",
      "Processed large GeoTIFF datasets in QGIS, cropping and resampling them so they could be visualized on the web.",
      "Improved map performance by optimizing high-resolution satellite imagery for browser rendering.",
    ],
    liveUrl: "https://hydraview.in/",
    githubUrl: "",
  },
  {
    id: "erp",
    title: "ERP Management System",
    image: "/images/projects/agrocastconnect.png",
    summary:
      "An ERP platform for projects, employees, attendance, payroll, and quotation management.",
    description:
      "An internal ERP for managing projects, employees, and day-to-day business operations, with tracking, quotations, attendance, and payroll in one system.",
    objective:
      "Give the organization one platform for project assignment, employee work, quotations, attendance, and payroll.",
    features: [
      "Project assignment, employee work tracking, and quotation management.",
      "Daily employee logs, attendance tracking, and payroll features including salary slips.",
      "Secure role-based access and REST APIs for organizational workflows.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    role: "Developer",
    contribution:
      "I developed the ERP platform, including the project, employee, quotation, attendance, and payroll modules, plus the role-based REST APIs behind them.",
    challenges: [],
    liveUrl: "https://agrocastconnect.com/",
    githubUrl: "",
  },
  {
    id: "thermaxk",
    title: "ThermaXK Software",
    image: "/images/projects/thermaxk.png",
    summary:
      "A cross-platform Electron desktop app that turns drone thermal captures into GeoTIFF maps, with subscriptions and licensing.",
    description:
      "ThermaXK is a desktop application, packaged as a standalone executable, for thermal image processing and map visualization. It pairs drone imagery with subscription, payment, and license management.",
    objective:
      "Turn paired drone thermal captures into GeoTIFF maps a user can inspect, inside a desktop product with licensing and subscriptions.",
    features: [
      "Cross-platform desktop application using Electron.js and the MERN stack, packaged as a standalone .exe.",
      "Thermal image workflow that generates GeoTIFF files from drone-captured JPEG and BIN pairs.",
      "Leaflet maps of the generated thermal GeoTIFF layers for temperature analysis.",
      "Subscription features: payment gateway integration, promo codes, free trial codes, and license management.",
      "Secure REST APIs and a responsive interface for thermal data processing and user management.",
    ],
    technologies: ["Electron.js", "React.js", "Node.js", "Express.js", "MongoDB", "Leaflet", "GeoTIFF"],
    role: "Developer",
    contribution:
      "I developed the Electron desktop application, the thermal GeoTIFF workflow, the Leaflet visualization, and the subscription, payment, and license features.",
    challenges: [
      "Generated GeoTIFF output by combining drone-captured JPEG and BIN file pairs into a thermal processing workflow.",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "uav-records",
    title: "UAV Records",
    image: "/images/projects/uav-records.png",
    summary:
      "A MERN stack assembly and procurement management system for drone parts supply, supplier purchase requests, inventory updates, and build-capacity calculation.",
    description:
      "UAV Records is an assembly and procurement management platform built on the MERN stack for drone manufacturing operations. It tracks component supply, manages supplier contacts and purchase requests, replenishes inventory on receipt, and calculates how many complete drones can be built from available stock.",
    objective:
      "Centralize drone component procurement, supplier purchase requests, stock management, and assembly build-capacity calculation in one workflow.",
    features: [
      "Supplier directory with contact management and direct purchase request generation and sending.",
      "End-to-end purchase request handling from order submission through incoming shipment receiving and stock replenishment.",
      "Real-time parts inventory tracking across drone components, assemblies, and stock thresholds.",
      "Assembly build-capacity calculator that computes how many complete UAV units can be built from current component stock.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    role: "Developer",
    contribution:
      "I built the MERN stack application, including supplier management, purchase request workflows, stock replenishment automation, and the drone build-capacity calculation logic.",
    challenges: [
      "Mapping multi-component drone Bill of Materials (BOM) dependencies to calculate exact buildable UAV counts from live stock.",
      "Linking purchase request approvals and order receiving directly to inventory replenishment without stock drift.",
    ],
    liveUrl: "https://uavrecords.agrocastconnect.com/",
    githubUrl: "",
  },
  {
    id: "dam-safety-society",
    title: "Dam Safety Society",
    image: "/images/projects/dam-safety-society.png",
    summary:
      "A complete .NET frontend redesign with added functional enhancements, deployed securely via FTP on Plesk Panel.",
    description:
      "Dam Safety Society is a .NET web platform whose existing frontend was completely redesigned to deliver a modern, clear, and responsive user experience alongside new functional capabilities. Once tested, the upgraded application was deployed securely to production using FTP and Plesk Panel.",
    objective:
      "Transform the legacy Dam Safety Society .NET website with a polished modern UI, improved functionality, and a secure production deployment.",
    features: [
      "Complete UI/UX redesign of the legacy .NET frontend for modern layout, visual clarity, and responsive usability.",
      "Additional functional modules and enhancements upgrading the capabilities of the previous website.",
      "Secure file transfer over FTP and production hosting setup on Plesk Panel with security hardening.",
    ],
    technologies: [".NET", "HTML", "CSS", "JavaScript", "Plesk Panel", "FTP"],
    role: "Frontend & Deployment Developer",
    contribution:
      "I redesigned the existing .NET frontend interface, built additional functional features to replace the legacy experience, and handled secure FTP deployment on Plesk Panel.",
    challenges: [
      "Modernizing an existing .NET frontend structure while maintaining clean compatibility with server-rendered views and assets.",
      "Configuring secure FTP transfer and production deployment settings inside Plesk Panel.",
    ],
    liveUrl: "https://staging.damsafetysociety.net/",
    githubUrl: "",
  },
];

export const services = [
  {
    title: "MERN Stack Development",
    icon: "mern",
    description:
      "End-to-end web applications with React.js, Node.js, Express.js, and MongoDB — the stack behind the ERP platform and internal business tools.",
  },
  {
    title: "Frontend Development",
    icon: "frontend",
    description:
      "Responsive interfaces in React.js, Tailwind CSS, Bootstrap, HTML, and CSS, shaped for production use rather than decoration.",
  },
  {
    title: "Backend & API Development",
    icon: "backend",
    description:
      "REST APIs with Node.js and Express.js, including secure, role-based access for real organizational workflows.",
  },
  {
    title: "Geospatial Web Applications",
    icon: "geo",
    description:
      "Interactive maps with Leaflet, GeoTIFF imagery, Google Earth Engine, QGIS, and ISRO API integration.",
  },
  {
    title: "Desktop Application Development",
    icon: "desktop",
    description:
      "Cross-platform Electron.js applications packaged for the desktop, including thermal imagery and map visualization.",
  },
  {
    title: "Responsive Web Development",
    icon: "responsive",
    description:
      "Layouts that stay readable from a wide dashboard down to a phone, matching the responsive interfaces I build at work.",
  },
];

export const certificates = [
  {
    id: "full-stack-web-development",
    title: "Full Stack Web Development",
    issuer: "STCEI — Smart Tech Computer Education Institute, Agra",
    date: "13 Oct 2024",
    duration: "09 Oct 2023 – 09 Oct 2024",
    credentialId: "Reg. No. 9996",
    category: "Certification",
    image: "/images/certificates/full-stack-web-development.jpg",
    summary:
      "Successfully completed the one-year Full Stack Web Development certification program at ISO-certified STCEI, Agra, covering frontend UI development, server-side logic, databases, and full-cycle web applications.",
    skills: ["Full Stack Web", "Frontend UI", "Backend & APIs", "Databases"],
    credentialUrl: "",
  },
  {
    id: "hackvision-hackathon-2024",
    title: "Hackvision Hackathon 2024",
    issuer: "GLA University, Mathura · BCA-O-CRATES & Abacus Computer Society",
    date: "25 Nov 2024",
    duration: "Hackathon Appreciation",
    credentialId: "Team CodeSky",
    category: "Hackathon",
    image: "/images/certificates/hackvision-hackathon-2024.jpg",
    summary:
      "Awarded a Certificate of Appreciation representing Team CodeSky in recognition of creativity, teamwork, and technical dedication during Hackvision Hackathon 2024 organized by the Department of CEA at GLA University, Mathura.",
    skills: ["Team CodeSky", "Problem Solving", "Rapid Prototyping", "Team Collaboration"],
    credentialUrl: "",
  },
  {
    id: "c-programming",
    title: "C Programming",
    issuer: "STCEI — Smart Tech Computer Education Institute, Agra",
    date: "10 Oct 2023",
    duration: "05 Aug 2023 – 05 Oct 2023",
    credentialId: "Reg. No. 9820",
    category: "Foundation",
    image: "/images/certificates/c-programming.jpg",
    summary:
      "Completed foundational training in C Programming at ISO-certified STCEI, Agra, strengthening core problem-solving skills in structured programming, functions, arrays, pointers, and memory management.",
    skills: ["C Programming", "Structured Logic", "Pointers & Arrays", "Algorithms"],
    credentialUrl: "",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function countTechnologies() {
  return skillGroups
    .filter((group) => group.countsAsTechnology)
    .reduce((total, group) => total + group.items.length, 0);
}
