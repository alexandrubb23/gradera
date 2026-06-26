import { useCountdown } from "@/hooks/useCountdown";
import styles from "./Countdown.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export const Countdown = () => {
  const { hours, minutes, seconds, done } = useCountdown();

  if (done) {
    return <p className={styles.done}>{"> session initialised — good luck"}</p>;
  }

  return (
    <p className={styles.countdown}>
      <span className={styles.prompt}>{">"}</span>
      <span>session begins in</span>
      <span className={styles.time}>
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </span>
      <span className={styles.cursor} aria-hidden="true" />
    </p>
  );
};
