import { Logo } from "~/components/Logo";
import { HamburgerButton } from "~/components/HamburgerButton";
import { NavbarLink } from "~/components/Navbar/NavbarLink";
import { dark } from "~/styles/themes/dark.css";
import { ThemeOverride } from "~/lib/ThemeOverride";

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
  const theme = isHamburgerButtonPressed ? dark : undefined;

  return (
    <ThemeOverride theme={theme}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.hamburgerButtonWrapper}>
          <HamburgerButton
            onPress={onPressHamburgerButton}
            isPressed={isHamburgerButtonPressed}
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
    </ThemeOverride>
  );
}
