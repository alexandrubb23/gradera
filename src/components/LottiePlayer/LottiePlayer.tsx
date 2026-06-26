import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./LottiePlayer.module.css";

export const LottiePlayer = () => (
  <div className={styles.wrapper}>
    <DotLottieReact src="/ai.lottie" loop autoplay />
  </div>
);
