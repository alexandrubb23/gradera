import styles from "./PageHeader.module.css";

export const PageHeader = () => (
  <>
    <h1 className={styles.heading}>Let's Build Something</h1>
    <div className={styles.divider} />
    <p className={styles.subtitle}>Enterprise AI Platform</p>
  </>
);
