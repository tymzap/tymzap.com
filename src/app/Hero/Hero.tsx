import { useTranslations } from "next-intl";

import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";

import * as styles from "./Hero.css";

export function Hero() {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <Heading level={1}>{t("writingQualityCodeThatMakesARealImpact")}</Heading>
      <Text>
        {t.rich("hiImTymekImASoftwareEngineerAndStartupFounder", {
          br: () => <br />,
        })}
      </Text>
    </div>
  );
}
