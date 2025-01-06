import Link from "next/link";
import { ComponentType, SVGProps } from "react";

import * as styles from "./IconLink.css";

type IconLinkProps = {
  href: string;
  icon: ComponentType<SVGProps<SVGElement>>;
  size?: number;
  label: string;
};

export function IconLink({
  href,
  size = DEFAULT_SIZE,
  icon: Icon,
  label,
}: IconLinkProps) {
  return (
    <Link href={href} className={styles.link} aria-label={label} title={label}>
      <Icon width={size} height={size} />
    </Link>
  );
}

const DEFAULT_SIZE = 32;
