import { ReactNode } from "react";

import { ThemeOverride } from "~/theme/ThemeOverride";

import * as styles from "./Footer.css";

type FooterProps = {
  topText: ReactNode;
  bottomText: ReactNode;
  contactLinks: ReactNode;
};

export function Footer({ topText, bottomText, contactLinks }: FooterProps) {
  return (
    <ThemeOverride theme={"dark"}>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.topTextWrapper}>{topText}</div>
          <div className={styles.contactLinksWrapper}>{contactLinks}</div>
          <div className={styles.bottomTextWrapper}>{bottomText}</div>
        </div>
      </div>
    </ThemeOverride>
  );
}
