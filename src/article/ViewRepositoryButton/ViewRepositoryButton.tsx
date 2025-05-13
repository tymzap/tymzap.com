"use client";

import { useTranslations } from "next-intl";

import Github from "~/icons/github.svg";
import { Button, ButtonIcon } from "~/components/Button";

export type ViewRepositoryButtonProps = {
  repository: string;
};

export function ViewRepositoryButton({
  repository,
}: ViewRepositoryButtonProps) {
  const t = useTranslations();

  const repositoryUrl = `https://github.com/${repository}`;

  const handlePress = () => {
    window.open(repositoryUrl);
  };

  return (
    <Button onPress={handlePress}>
      {t("seeFullCodeOnGitHub")}
      <ButtonIcon icon={Github} />
    </Button>
  );
}
