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
  const { isFullscreenMenuVisible, toggleIsFullscreenMenuVisible } =
    useNavbar();

  return (
    <div className={styles.wrapper}>
      <NavbarContent
        menuLinks={menuLinks}
        isHamburgerButtonPressed={isFullscreenMenuVisible}
        onPressHamburgerButton={toggleIsFullscreenMenuVisible}
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
