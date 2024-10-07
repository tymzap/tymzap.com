import NextLink from "next/link";
import { ComponentType, PropsWithChildren, SVGProps } from "react";
import cn from "classnames";

import * as styles from "./TextLink.css";

type TextLinkProps = PropsWithChildren<{
  href: string;
  icon?: ComponentType<SVGProps<SVGElement>>;
  hasUnderline?: boolean;
}>;

export function TextLink({
  children,
  href,
  icon: Icon,
  hasUnderline = true,
}: TextLinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(styles.link, { [styles.withUnderline]: hasUnderline })}
    >
      {children}
      {Icon ? <Icon className={styles.icon} /> : null}
    </NextLink>
  );
}
