import { useEffect } from "react";

import { useFullscreenMenuAnimation } from "./useFullscreenMenuAnimation";

export function useFullscreenMenu(isVisible: boolean) {
  const { wrapperStyle, isAnimatingOut, setIsAnimatingOut } =
    useFullscreenMenuAnimation(isVisible);

  useEffect(() => {
    if (isVisible) {
      setIsAnimatingOut(false);
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => {
      enableBodyScroll();
    };
  }, [isVisible, setIsAnimatingOut]);

  return {
    isAnimatingOut,
    setIsAnimatingOut,
    wrapperStyle,
  };
}

function disableBodyScroll() {
  document.body.style.overflow = "hidden";
}

function enableBodyScroll() {
  document.body.style.overflow = "";
}
