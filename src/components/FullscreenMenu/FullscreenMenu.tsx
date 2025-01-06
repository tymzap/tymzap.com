"use client";

import { ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";

import { dark } from "~/styles/themes/dark.css";
import { ThemeOverride } from "~/lib/ThemeOverride";

import * as styles from "./FullscreenMenu.css";
import { useFullscreenMenu } from "./useFullscreenMenu";
import { FullscreenMenuLink } from "./FullscreenMenuLink";

type FullscreenMenuProps = {
  isVisible: boolean;
  menuLinks: ReactNode;
  contactLinks: ReactNode;
};

export function FullscreenMenu({
  menuLinks,
  contactLinks,
  isVisible,
}: FullscreenMenuProps) {
  const { isAnimatingOut, setIsAnimatingOut } = useFullscreenMenu(isVisible);

  const spring = useSpring({
    transform: isVisible ? "translateX(0%)" : "translateX(-100%)",
    onRest: () => {
      if (!isVisible) {
        setIsAnimatingOut(true);
      }
    },
  });

  if (isAnimatingOut) {
    return null;
  }

  return (
    <ThemeOverride theme={dark}>
      {/* todo remove the @ts-ignore after React 19 support is added in react-spring */}
      {/* issue: https://github.com/pmndrs/react-spring/issues/2341 */}
      {/* @ts-ignore */}
      <animated.div className={styles.wrapper} style={spring}>
        <div className={styles.linksWrapper}>
          <div className={styles.menuLinksWrapper}>{menuLinks}</div>
          <div className={styles.contactLinksWrapper}>{contactLinks}</div>
        </div>
      </animated.div>
    </ThemeOverride>
  );
}

FullscreenMenu.Link = FullscreenMenuLink;
