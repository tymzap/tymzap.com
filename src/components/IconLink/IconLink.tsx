import Link from "next/link";
import { ComponentType, SVGProps } from "react";

import * as styles from "./IconLink.css";

type IconLinkProps = {
  href: string;
  icon: ComponentType<SVGProps<SVGElement>>;
  color?: "black" | "white";
  label: string;
};

export function IconLink({
  href,
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
      <Icon width={ICON_SIZE} height={ICON_SIZE} />
    </Link>
  );
}

const ICON_SIZE = 32;
