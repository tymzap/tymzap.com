"use client";

import { ReactNode } from "react";
import { animated } from "@react-spring/web";

import { ThemeOverride } from "~/theme/ThemeOverride";

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
  const { isAnimatingOut, wrapperStyle } = useFullscreenMenu(isVisible);

  if (isAnimatingOut) {
    return null;
  }

  return (
    <ThemeOverride theme={"dark"}>
      {/* todo remove the @ts-ignore after React 19 support is added in react-spring */}
      {/* https://github.com/pmndrs/react-spring/issues/2341 */}
      {/* @ts-ignore */}
      <animated.div className={styles.wrapper} style={wrapperStyle}>
        <div className={styles.linksWrapper}>
          <div className={styles.menuLinksWrapper}>{menuLinks}</div>
          <div className={styles.contactLinksWrapper}>{contactLinks}</div>
        </div>
      </animated.div>
    </ThemeOverride>
  );
}

FullscreenMenu.Link = FullscreenMenuLink;
