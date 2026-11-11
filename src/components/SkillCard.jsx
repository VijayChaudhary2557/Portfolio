import { Braces, Gauge, Layers, MonitorSmartphone, Satellite } from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss,
  SiElectron,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLeaflet,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiQgis,
  SiReact,
  SiTailwindcss,
  SiVscodium,
} from "react-icons/si";

const icons = {
  react: SiReact,
  html: SiHtml5,
  css: SiCss,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  api: Braces,
  mongodb: SiMongodb,
  mysql: SiMysql,
  javascript: SiJavascript,
  java: FaJava,
  python: SiPython,
  leaflet: SiLeaflet,
  gee: Satellite,
  qgis: SiQgis,
  geotiff: Layers,
  isro: Satellite,
  electron: SiElectron,
  git: SiGit,
  github: SiGithub,
  vscode: SiVscodium,
  postman: SiPostman,
  responsive: MonitorSmartphone,
  performance: Gauge,
};

export default function SkillCard({ name, icon }) {
  const Icon = icons[icon] ?? Braces;

  return (
    <li>
      <div className="group flex items-center gap-2.5 rounded-xl border border-crimson/40 bg-ink/85 px-3.5 py-2 text-sm text-paper transition duration-200 hover:-translate-y-0.5 hover:border-paper/60 hover:bg-raised/85 hover:shadow-[0_6px_18px_-8px_rgba(184,37,111,0.72)]">
        <Icon className="h-4 w-4 shrink-0 text-signal transition group-hover:text-signal-bright" aria-hidden="true" />
        <span>{name}</span>
      </div>
    </li>
  );
}
