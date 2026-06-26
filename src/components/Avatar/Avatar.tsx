import styles from "./Avatar.module.css";

export const Avatar = () => (
  <div className={styles.wrapper}>
    <div className={styles.ring} aria-hidden="true" />
    <img src="/avatar.png" alt="Alexandru Barbulescu" className={styles.img} />
  </div>
);
