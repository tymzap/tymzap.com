import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";

import * as styles from "./Hero.css";

export function Hero() {
  return (
    <div className={styles.wrapper}>
      <Heading level={1}>Writing quality code that makes a real impact</Heading>
      <Text>
        {`Hi, I'm Tymek. 👋 I'm a software engineer and startup founder based in
        Cracow, Poland.`}
        <br />
        {`I like building things and sharing my knowledge.`}
        <br />
        {`I currently work for volt.io, where I develop UI for our financial
        platform.`}
      </Text>
    </div>
  );
}
