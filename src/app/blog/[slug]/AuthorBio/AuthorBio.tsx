import Image from "next/image";
import { useTranslations } from "next-intl";

import { Text } from "~/components/Text";

import * as styles from "./AuthorBio.css";

export function AuthorBio() {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <Image
        src={"/profile.png"}
        width={120}
        height={120}
        alt={"Tymek Zapała"}
      />
      <div className={styles.contentWrapper}>
        <span className={styles.heading}>{t("writtenByTymek")}</span>
        <Text as={"p"}>{t("imASoftwareEngineerAndStartupFounder")}</Text>
      </div>
    </div>
  );
}
