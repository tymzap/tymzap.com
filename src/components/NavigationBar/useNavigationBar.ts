import { useState } from "react";

export function useNavigationBar() {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);

  const toggleIsNavigationVisible = () => {
    setIsNavigationVisible((isNavigationVisible) => !isNavigationVisible);
  };

  return {
    isNavigationVisible,
    toggleIsNavigationVisible,
  };
}
