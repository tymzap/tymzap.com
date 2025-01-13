import { useState } from "react";
import { useSpring } from "@react-spring/web";

export function useFullscreenMenuAnimation(isVisible: boolean) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(!isVisible);

  const wrapperStyle = useSpring({
    transform: isVisible ? "translateX(0%)" : "translateX(-100%)",
    onRest: () => {
      if (!isVisible) {
        setIsAnimatingOut(true);
      }
    },
  });

  return {
    wrapperStyle,
    isAnimatingOut,
    setIsAnimatingOut,
  };
}
