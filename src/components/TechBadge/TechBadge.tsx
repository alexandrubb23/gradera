import type { IconType } from "react-icons";
import styles from "./TechBadge.module.css";

export type TechBadgeProps = {
  icon: IconType;
  label: string;
  version: string;
  color: string;
};

export const TechBadge = ({
  icon: Icon,
  label,
  version,
  color,
}: TechBadgeProps) => (
  <span
    className={styles.badge}
    style={
      {
        "--badge-color": color,
        "--badge-border": `${color}28`,
        "--badge-bg": `${color}0a`,
        "--badge-glow": `${color}14`,
      } as React.CSSProperties
    }
  >
    <Icon className={styles.icon} />
    {label} {version}
  </span>
);
