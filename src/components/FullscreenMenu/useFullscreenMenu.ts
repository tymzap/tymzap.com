import { useEffect, useState } from "react";

export function useFullscreenMenu(isVisible: boolean) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(!isVisible);

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
  }, [isVisible]);

  return {
    isAnimatingOut,
    setIsAnimatingOut,
  };
}

function disableBodyScroll() {
  document.body.style.overflow = "hidden";
}

function enableBodyScroll() {
  document.body.style.overflow = "";
}
