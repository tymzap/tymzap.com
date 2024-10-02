import { Logo } from "~/components/Logo";
import { HamburgerButton } from "~/components/HamburgerButton";
import { NavbarLink } from "~/components/Navbar/NavbarLink";

import { MenuLink } from "../MenuLink";
import * as styles from "./NavbarContent.css";

type NavbarContentProps = {
  menuLinks: MenuLink[];
  isHamburgerButtonPressed: boolean;
  onPressHamburgerButton: () => void;
};

export function NavbarContent({
  menuLinks,
  onPressHamburgerButton,
  isHamburgerButtonPressed,
}: NavbarContentProps) {
  const textColor = isHamburgerButtonPressed ? "white" : "black";

  return (
    <div className={styles.wrapper}>
      <Logo color={textColor} />
      <div className={styles.hamburgerButtonWrapper}>
        <HamburgerButton
          onPress={onPressHamburgerButton}
          isPressed={isHamburgerButtonPressed}
          color={textColor}
        />
      </div>
      <div className={styles.linksWrapper}>
        <>
          {menuLinks.map(({ label, href }) => (
            <NavbarLink href={href} key={href}>
              {label}
            </NavbarLink>
          ))}
        </>
      </div>
    </div>
  );
}
