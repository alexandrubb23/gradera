import { Avatar } from "@/components/Avatar/Avatar";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Countdown } from "@/components/Countdown/Countdown";
import { TechStack } from "@/components/TechStack/TechStack";
import { AnimatedLottiePlayer } from "@/components/AnimatedLottiePlayer/AnimatedLottiePlayer";
import { GithubButton } from "@/components/GithubButton/GithubButton";
import styles from "./WelcomeScreen.module.css";

export const WelcomeScreen = () => (
  <div className={styles.container}>
    <Avatar />
    <PageHeader />
    <Countdown />
    <TechStack />
    <AnimatedLottiePlayer />
    <GithubButton />
  </div>
);
