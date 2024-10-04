"use client";

import { FullscreenMenu } from "~/components/FullscreenMenu";
import { IconLink } from "~/components/IconLink";

import { MenuLink } from "./MenuLink";
import { SocialMediaLink } from "./SocialMediaLink";
import { useNavbar } from "./useNavbar";
import * as styles from "./Navbar.css";
import { NavbarContent } from "./NavbarContent";

type NavbarProps = {
  menuLinks: MenuLink[];
  socialMediaLinks: SocialMediaLink[];
};

export function Navbar({ menuLinks, socialMediaLinks }: NavbarProps) {
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
        socialMediaLinks={
          <>
            {socialMediaLinks.map(({ href, icon, label }) => (
              <IconLink
                color={"white"}
                href={href}
                icon={icon}
                label={label}
                key={href}
              />
            ))}
          </>
        }
      />
    </div>
  );
}
