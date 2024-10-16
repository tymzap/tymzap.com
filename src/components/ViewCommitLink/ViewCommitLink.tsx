import { useTranslations } from "next-intl";

import { TextLink } from "~/components/TextLink";
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
      <TextLink.Icon icon={Github} hoverAnimation={"rotate"} />
    </TextLink>
  );
}
