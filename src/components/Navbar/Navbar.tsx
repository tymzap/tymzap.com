"use client";

import { ReactNode } from "react";

import { FullscreenMenu } from "~/components/FullscreenMenu";

import { MenuLink } from "./MenuLink";
import { useNavbar } from "./useNavbar";
import * as styles from "./Navbar.css";
import { NavbarContent } from "./NavbarContent";

type NavbarProps = {
  menuLinks: MenuLink[];
  contactLinks: ReactNode;
};

export function Navbar({ menuLinks, contactLinks }: NavbarProps) {
  const {
    isFullscreenMenuVisible,
    toggleIsFullscreenMenuVisible,
    theme,
    handleThemeButtonPress,
  } = useNavbar();

  return (
    <div className={styles.wrapper}>
      <NavbarContent
        theme={theme}
        menuLinks={menuLinks}
        isHamburgerButtonPressed={isFullscreenMenuVisible}
        onHamburgerButtonPress={toggleIsFullscreenMenuVisible}
        onThemeButtonPress={handleThemeButtonPress}
      />
      <FullscreenMenu
        isVisible={isFullscreenMenuVisible}
        menuLinks={
          <>
            {menuLinks.map(({ label, href }) => (
              <FullscreenMenu.Link href={href} key={href}>
                {label}
              </FullscreenMenu.Link>
            ))}
          </>
        }
        contactLinks={contactLinks}
      />
    </div>
  );
}
