import { Logo } from "~/components/Logo";
import { HamburgerButton } from "~/components/HamburgerButton";
import { ThemeButton } from "~/theme/ThemeButton";
import { ThemeOverride } from "~/theme/ThemeOverride";

import { NavbarLink } from "../NavbarLink";
import { MenuLink } from "../MenuLink";
import * as styles from "./NavbarContent.css";

type NavbarContentProps = {
  menuLinks: MenuLink[];
  isHamburgerButtonPressed: boolean;
  onHamburgerButtonPress: () => void;
  onThemeButtonPress: () => void;
};

export function NavbarContent({
  menuLinks,
  onHamburgerButtonPress,
  isHamburgerButtonPressed,
  onThemeButtonPress,
}: NavbarContentProps) {
  return (
    <ThemeOverride theme={isHamburgerButtonPressed ? "dark" : undefined}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.buttonsWrapper}>
          <ThemeButton onPress={onThemeButtonPress} />
          <HamburgerButton
            onPress={onHamburgerButtonPress}
            isPressed={isHamburgerButtonPressed}
          />
        </div>
        <div className={styles.themeButtonAndLinksWrapper}>
          <ThemeButton onPress={onThemeButtonPress} />
          <div className={styles.linksWrapper}>
            {menuLinks.map(({ label, href }) => (
              <NavbarLink href={href} key={href}>
                {label}
              </NavbarLink>
            ))}
          </div>
        </div>
      </div>
    </ThemeOverride>
  );
}
