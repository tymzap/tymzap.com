import { Heading } from "~/components/Heading";
import { TextLink } from "~/components/TextLink";
import ArrowRight from "~/icons/arrow-right.svg";

import * as styles from "./LatestArticlesHeader.css";

export function LatestArticlesHeader() {
  return (
    <div className={styles.wrapper}>
      <Heading level={2}>Latest blog posts</Heading>
      <TextLink href={"/blog"} icon={ArrowRight} hasUnderline={false}>
        See all posts
      </TextLink>
    </div>
  );
}
