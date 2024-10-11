import { useTranslations } from "next-intl";

import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";

import * as styles from "./Hero.css";

export function Hero() {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <Heading level={2}>{t("softwareEngineer&Maker")}</Heading>
      <Text as={"p"}>
        {t.rich("helloImTymekImASoftwareEngineerAndStartupFounder", {
          br: () => <br />,
          strong: (children) => <Text isBold={true}>{children}</Text>,
        })}
      </Text>
    </div>
  );
}
