import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useNavbar() {
  const pathname = usePathname();

  const [isFullscreenMenuVisible, setIsFullscreenMenuVisible] = useState(false);

  const toggleIsFullscreenMenuVisible = () => {
    setIsFullscreenMenuVisible((previousState) => !previousState);
  };

  useEffect(() => {
    setIsFullscreenMenuVisible(false);
  }, [pathname]);

  return {
    isFullscreenMenuVisible,
    toggleIsFullscreenMenuVisible,
  };
}
