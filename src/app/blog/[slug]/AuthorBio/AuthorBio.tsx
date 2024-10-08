import Image from "next/image";

import { Text } from "~/components/Text";

import * as styles from "./AuthorBio.css";

export function AuthorBio() {
  return (
    <div className={styles.wrapper}>
      <Image
        src={"/profile.png"}
        width={120}
        height={120}
        alt={"Tymek Zapała"}
      />
      <div className={styles.contentWrapper}>
        <span className={styles.heading}>About the author</span>
        <Text as={"p"}>
          Tymek Zapała is a software engineer and startup founder based in
          Cracow, Poland. With extensive experience of building products from
          start to launch, he’s passionate about writing quality code and
          sharing his knowledge.
        </Text>
      </div>
    </div>
  );
}
