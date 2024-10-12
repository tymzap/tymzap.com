import Image from "next/image";

import * as styles from "./CoverImage.css";

type CoverImageProps = {
  imageSrc: string;
};

export function CoverImage({ imageSrc }: CoverImageProps) {
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
