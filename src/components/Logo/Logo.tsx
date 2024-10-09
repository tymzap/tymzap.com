import Link from "next/link";

import * as styles from "./Logo.css";

type LogoProps = {
  color?: "black" | "white";
};

export function Logo({ color = "black" }: LogoProps) {
  return (
    <Link href={HOME_URL} className={styles.link}>
      <h1 className={styles.logo({ color })}>Tymek Zapała</h1>
    </Link>
  );
}

const HOME_URL = "/";
