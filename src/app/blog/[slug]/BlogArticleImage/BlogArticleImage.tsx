import Image from "next/image";

import * as styles from "./BlogArticleImage.css";

type BlogArticleImageProps = {
  imageSrc: string;
};

export function BlogArticleImage({ imageSrc }: BlogArticleImageProps) {
  return (
    <Image
      src={imageSrc}
      alt=""
      layout="responsive"
      priority={true}
      width={100}
      height={50}
      objectFit="cover"
      className={styles.image}
    />
  );
}
