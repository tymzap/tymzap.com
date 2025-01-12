import { Logo } from "~/components/Logo";
import { HamburgerButton } from "~/components/HamburgerButton";
import { ThemeButton } from "~/theme/ThemeButton";
import { Theme } from "~/theme/Theme";
import { ThemeOverride } from "~/theme/ThemeOverride";

import { NavbarLink } from "../NavbarLink";
import { MenuLink } from "../MenuLink";
import * as styles from "./NavbarContent.css";

type NavbarContentProps = {
  menuLinks: MenuLink[];
  isHamburgerButtonPressed: boolean;
  theme: Theme | undefined;
  onHamburgerButtonPress: () => void;
  onThemeButtonPress: () => void;
};

export function NavbarContent({
  menuLinks,
  onHamburgerButtonPress,
  theme,
  isHamburgerButtonPressed,
  onThemeButtonPress,
}: NavbarContentProps) {
  return (
    <ThemeOverride theme={isHamburgerButtonPressed ? "dark" : undefined}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.buttonsWrapper}>
          <ThemeButton theme={theme} onPress={onThemeButtonPress} />
          <HamburgerButton
            onPress={onHamburgerButtonPress}
            isPressed={isHamburgerButtonPressed}
          />
        </div>
        <div className={styles.linksWrapper}>
          <ThemeButton theme={theme} onPress={onThemeButtonPress} />
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
