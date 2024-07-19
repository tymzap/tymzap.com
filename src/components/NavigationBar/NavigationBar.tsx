"use client";

import { ReactNode } from "react";

import { Logo } from "~/components/Logo";
import { HamburgerButton } from "~/components/HamburgerButton";

import * as styles from "./NavigationBar.css";
import { NavigationWrapper } from "./NavigationWrapper";
import { useNavigationBar } from "./useNavigationBar";

type NavigationBarProps = {
  navigation: ReactNode;
};

export function NavigationBar({ navigation }: NavigationBarProps) {
  const { toggleIsNavigationVisible, isNavigationVisible } = useNavigationBar();

  return (
    <>
      <div className={styles.spacer} />
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <Logo />
          <div className={styles.hamburgerButtonWrapper}>
            <HamburgerButton
              onPress={toggleIsNavigationVisible}
              isPressed={isNavigationVisible}
            />
          </div>
        </div>
        <NavigationWrapper isVisible={isNavigationVisible}>
          {navigation}
        </NavigationWrapper>
      </div>
    </>
  );
}
