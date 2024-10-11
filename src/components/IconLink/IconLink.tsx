import Link from "next/link";
import { ComponentType, SVGProps } from "react";

import * as styles from "./IconLink.css";

type IconLinkProps = {
  href: string;
  icon: ComponentType<SVGProps<SVGElement>>;
  size?: number;
  color?: "black" | "white";
  label: string;
};

export function IconLink({
  href,
  size = DEFAULT_SIZE,
  icon: Icon,
  color = "black",
  label,
}: IconLinkProps) {
  return (
    <Link
      href={href}
      className={styles.link({ color })}
      aria-label={label}
      title={label}
    >
      <Icon width={size} height={size} />
    </Link>
  );
}

const DEFAULT_SIZE = 32;
