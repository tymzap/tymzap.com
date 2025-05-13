import { useTranslations } from "next-intl";

import { Text } from "~/components/Text";
import { List, ListItem } from "~/components/List";
import { Heading } from "~/components/Heading";
import { TextLink } from "~/components/TextLink";

import * as styles from "./Projects.css";

export function Projects() {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <Heading level={2}>{t("projects")}</Heading>
      <Text>
        {t("iEnjoyTurningIdeasIntoUsefulThingsHereAreTheKeyProjects")}
      </Text>
      <List>
        <ListItem>
          <TextLink href={COLORFUL_BUDGET_URL}>Colorful Budget</TextLink> –{" "}
          {t("completeBudgetingSolutionForBusinessesUsingTrelloEcosystem")}
        </ListItem>
        <ListItem>
          <TextLink href={HEROES_III_POLISH_CHAMPIONSHIP_URL}>
            Heroes III Polish Championship
          </TextLink>{" "}
          – {t("communityDrivenPlatformUsedForHostingNationalGamingTournament")}
        </ListItem>
      </List>
    </div>
  );
}

const COLORFUL_BUDGET_URL = "https://colorfulbudget.com";

const HEROES_III_POLISH_CHAMPIONSHIP_URL = "https://mistrzostwa.heroes.net.pl";
