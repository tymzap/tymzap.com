import { Text } from "~/components/Text";
import { List } from "~/components/List";
import { Heading } from "~/components/Heading";
import { TextLink } from "~/components/TextLink";

import * as styles from "./Projects.css";

export function Projects() {
  return (
    <div className={styles.wrapper}>
      <Heading level={2}>Projects</Heading>
      <Text>
        {`I enjoy turning ideas into useful things. Here are the key projects I've
        built and launched:`}
      </Text>
      <List>
        <List.Item>
          <TextLink href={COLORFUL_BUDGET_URL}>Colorful Budget</TextLink> –
          complete budgeting solution for businesses using Trello ecosystem
        </List.Item>
        <List.Item>
          <TextLink href={HEROES_III_POLISH_CHAMPIONSHIP_URL}>
            Heroes III Polish Championship
          </TextLink>{" "}
          – community-driven platform used for hosting national gaming
          tournament
        </List.Item>
      </List>
    </div>
  );
}

const COLORFUL_BUDGET_URL = "https://colorfulbudget.com";

const HEROES_III_POLISH_CHAMPIONSHIP_URL = "https://mistrzostwa.heroes.net.pl";
