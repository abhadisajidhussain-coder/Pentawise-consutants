
"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function Counter({
  end,
  duration = 2000,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <>
      {count.toLocaleString("en-US")}
      {suffix}
    </>
  );
}
