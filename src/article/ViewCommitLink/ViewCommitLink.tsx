import { useTranslations } from "next-intl";

import { TextLink, TextLinkIcon } from "~/components/TextLink";
import Github from "~/icons/github.svg";

export type ViewCommitLinkProps = {
  commit: string;
};

export function ViewCommitLink({ commit }: ViewCommitLinkProps) {
  const t = useTranslations();

  const commitUrl = `https://github.com/${commit}`;

  return (
    <TextLink href={commitUrl}>
      {t("followAlongWithTheCommit")}
      <TextLinkIcon icon={Github} hoverAnimation={"rotate"} />
    </TextLink>
  );
}
