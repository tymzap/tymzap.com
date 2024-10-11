import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { breakpoints } from "~/styles/breakpoints";

export function useNavbar() {
  const pathname = usePathname();

  const [isFullscreenMenuVisible, setIsFullscreenMenuVisible] = useState(false);

  const toggleIsFullscreenMenuVisible = () => {
    setIsFullscreenMenuVisible((previousState) => !previousState);
  };

  useEffect(() => {
    setIsFullscreenMenuVisible(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > breakpoints.laptop) {
        setIsFullscreenMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isFullscreenMenuVisible,
    toggleIsFullscreenMenuVisible,
  };
}
