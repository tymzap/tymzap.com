import { useState } from "react";

export function useNavbar() {
  const [isFullscreenMenuVisible, setIsFullscreenMenuVisible] = useState(false);

  const toggleIsFullscreenMenuVisible = () => {
    setIsFullscreenMenuVisible((previousState) => !previousState);
  };

  return {
    isFullscreenMenuVisible,
    toggleIsFullscreenMenuVisible,
  };
}
