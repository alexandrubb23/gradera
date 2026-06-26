import { SiReact, SiTypescript, SiVite, SiAnthropic } from "react-icons/si";
import { TechBadge } from "@/components/TechBadge/TechBadge";
import { LottiePlayer } from "@/components/LottiePlayer/LottiePlayer";
import { Countdown } from "@/components/Countdown/Countdown";
import { Avatar } from "@/components/Avatar/Avatar";
import { GithubButton } from "@/components/GithubButton/GithubButton";
import pkg from "../../../package.json";
import styles from "./WelcomeScreen.module.css";

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

export const WelcomeScreen = () => (
  <div className={styles.container}>
    <Avatar />
    <h1 className={styles.heading}>Let's Build Something</h1>
    <div className={styles.divider} />
    <p className={styles.subtitle}>Enterprise AI Platform</p>
    <Countdown />
    <div className={styles.badges}>
      {stack.map((tech) => (
        <TechBadge key={tech.label} {...tech} />
      ))}
    </div>
    <div className={styles.animation}>
      <LottiePlayer />
    </div>
    <GithubButton />
  </div>
);
