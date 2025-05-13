import NextLink from "next/link";
import { PropsWithChildren } from "react";
import cn from "classnames";

import * as styles from "./TextLink.css";

type TextLinkProps = PropsWithChildren<{
  href: string;
  hasUnderline?: boolean;
}>;

export function TextLink({
  children,
  href,
  hasUnderline = true,
}: TextLinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(styles.link, { [styles.withUnderline]: hasUnderline })}
    >
      {children}
    </NextLink>
  );
}
