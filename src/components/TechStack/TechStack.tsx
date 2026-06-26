import { SiReact, SiTypescript, SiVite, SiAnthropic } from "react-icons/si";
import { TechBadge } from "@/components/TechBadge/TechBadge";
import pkg from "../../../package.json";
import styles from "./TechStack.module.css";

const clean = (v: string) => v.replace(/[\^~]/, "");

const stack = [
  {
    icon: SiVite,
    label: "Vite",
    version: clean(pkg.devDependencies.vite),
    color: "#646CFF",
  },
  {
    icon: SiReact,
    label: "React",
    version: clean(pkg.dependencies.react),
    color: "#61DAFB",
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
    version: clean(pkg.devDependencies.typescript),
    color: "#3178C6",
  },
  {
    icon: SiAnthropic,
    label: "Claude Code",
    version: "latest",
    color: "#D97757",
  },
];

export const TechStack = () => (
  <div className={styles.badges}>
    {stack.map((tech) => (
      <TechBadge key={tech.label} {...tech} />
    ))}
  </div>
);
