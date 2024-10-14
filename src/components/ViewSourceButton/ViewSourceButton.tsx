"use client";

import { useTranslations } from "next-intl";

import Github from "~/icons/github.svg";
import { Button } from "~/components/Button";

import * as styles from "./ViewSourceButton.css";

type ViewSourceButtonProps = {
  repository: string;
};

export function ViewSourceButton({ repository }: ViewSourceButtonProps) {
  const t = useTranslations();

  const repositoryUrl = `https://github.com/${repository}`;

  const handlePress = () => {
    window.open(repositoryUrl);
  };

  return (
    <span className={styles.wrapper}>
      <Button onPress={handlePress}>
        {t("seeFullCodeOnGitHub")}
        <Button.Icon icon={Github} />
      </Button>
    </span>
  );
}
