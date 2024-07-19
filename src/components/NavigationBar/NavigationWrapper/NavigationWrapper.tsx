import { PropsWithChildren } from "react";
import { animated, useSpring } from "@react-spring/web";

import * as styles from "./NavigationWrapper.css";

type NavigationWrapperProps = PropsWithChildren<{
  isVisible: boolean;
}>;

export function NavigationWrapper({
  children,
  isVisible,
}: NavigationWrapperProps) {
  const spring = useSpring({
    transform: isVisible ? "translateY(0%)" : "translateY(-100%)",
  });

  return (
    <animated.div className={styles.wrapper} style={spring}>
      {children}
    </animated.div>
  );
}
