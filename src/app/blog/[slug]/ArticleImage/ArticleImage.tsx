import Image from "next/image";

import * as styles from "./ArticleImage.css";

type ArticleImageProps = {
  imageSrc: string;
};

export function ArticleImage({ imageSrc }: ArticleImageProps) {
  return (
    <Image
      src={imageSrc}
      alt=""
      layout="responsive"
      width={100}
      height={50}
      objectFit="cover"
      className={styles.image}
    />
  );
}
