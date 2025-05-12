import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";

import * as styles from "./Hero.css";

export async function Hero() {
  const t = await getTranslations();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Heading level={2}>{t("softwareEngineer&Maker")}</Heading>
        <Text as={"p"}>
          {t.rich("helloImTymekImASoftwareEngineerAndProductMaker", {
            br: () => <br />,
            strong: (children) => <Text isBold={true}>{children}</Text>,
          })}
        </Text>
      </div>
      <Image
        src={"/profile-iceland.webp"}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        alt={t("photoOfTymekZapała")}
        className={styles.image}
      />
    </div>
  );
}

const IMAGE_SIZE = 220;
