import NextLink from "next/link";
import { PropsWithChildren } from "react";
import cn from "classnames";

import * as styles from "./TextLink.css";

type TextLinkProps = PropsWithChildren<{
  href: string;
  hasUnderline?: boolean;
  onPress?: () => void;
}>;

export function TextLink({
  children,
  href,
  hasUnderline = true,
  onPress,
}: TextLinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(styles.link, { [styles.withUnderline]: hasUnderline })}
      onClick={onPress}
    >
      {children}
    </NextLink>
  );
}
