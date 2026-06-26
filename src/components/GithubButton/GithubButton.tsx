import { SiGithub } from "react-icons/si";
import styles from "./GithubButton.module.css";

export const GithubButton = () => (
  <a
    href="https://github.com/alexandrubb23/gradera"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
  >
    <SiGithub className={styles.icon} />
    Source Code
  </a>
);
