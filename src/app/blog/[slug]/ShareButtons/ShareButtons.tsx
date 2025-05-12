"use client";

import { useTranslations } from "next-intl";

import X from "~/icons/x.svg";
import LinkedIn from "~/icons/linkedin.svg";
import { IconButton } from "~/components/IconButton/IconButton";

import { useShareButtons } from "./useShareButtons";
import * as styles from "./ShareButtons.css";

export function ShareButtons() {
  const t = useTranslations();

  const { isVisible, shareOnX, shareOnLinkedIn } = useShareButtons();

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>{t("shareThisPost")}:</span>
      <div className={styles.buttons}>
        <IconButton icon={X} label={t("shareOnX")} onPress={shareOnX} />
        <IconButton
          icon={LinkedIn}
          label={t("shareOnLinkedIn")}
          onPress={shareOnLinkedIn}
        />
      </div>
    </div>
  );
}
