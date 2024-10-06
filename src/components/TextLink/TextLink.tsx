import NextLink from "next/link";
import { ComponentType, PropsWithChildren, SVGProps } from "react";

import * as styles from "./TextLink.css";

type TextLinkProps = PropsWithChildren<{
  href: string;
  icon?: ComponentType<SVGProps<SVGElement>>;
}>;

export function TextLink({ children, href, icon: Icon }: TextLinkProps) {
  return (
    <NextLink href={href} className={styles.link}>
      {children}
      {Icon ? <Icon className={styles.icon} /> : null}
    </NextLink>
  );
}
