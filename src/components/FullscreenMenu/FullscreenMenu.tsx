"use client";

import { ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";

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
    <animated.div className={styles.wrapper} style={spring}>
      <div className={styles.linksWrapper}>
        <div className={styles.menuLinksWrapper}>{menuLinks}</div>
        <div className={styles.contactLinksWrapper}>{contactLinks}</div>
      </div>
    </animated.div>
  );
}

FullscreenMenu.Link = FullscreenMenuLink;
