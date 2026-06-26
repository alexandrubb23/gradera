import { useState } from "react";
import { useInterval } from "usehooks-ts";

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

const getTimeLeft = (): TimeLeft => {
  const now = new Date();
  const target = new Date();
  target.setHours(17, 0, 0, 0);

  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, done: true };

  return {
    hours: Math.floor(diff / 1000 / 60 / 60),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
};

export const useCountdown = (): TimeLeft => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useInterval(() => setTimeLeft(getTimeLeft()), 1000);

  return timeLeft;
};
