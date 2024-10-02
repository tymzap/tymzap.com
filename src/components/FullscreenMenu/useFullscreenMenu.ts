import { useEffect, useState } from "react";

export function useFullscreenMenu(isVisible: boolean) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(!isVisible);

  useEffect(() => {
    if (isVisible) {
      setIsAnimatingOut(false);
    }
  }, [isVisible]);

  return {
    isAnimatingOut,
    setIsAnimatingOut,
  };
}
