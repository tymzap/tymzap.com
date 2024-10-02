import * as styles from "./Logo.css";

type LogoProps = {
  color?: "black" | "white";
};

export function Logo({ color = "black" }: LogoProps) {
  return <span className={styles.logo({ color })}>Tymek Zapała</span>;
}
