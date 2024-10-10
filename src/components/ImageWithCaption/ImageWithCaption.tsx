import Image from "next/image";
import { useId } from "react";

import * as styles from "./ImageWithCaption.css";

type ImageWithCaptionProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImageWithCaption({ alt, src, caption }: ImageWithCaptionProps) {
  const captionId = useId();

  return (
    <span
      className={styles.wrapper}
      role={caption ? "figure" : undefined}
      aria-labelledby={caption ? captionId : undefined}
    >
      <Image
        src={src}
        alt={alt}
        title={caption}
        layout="responsive"
        width={100}
        height={50}
        objectFit="cover"
      />
      {caption ? (
        <span id={captionId} className={styles.caption}>
          {caption}
        </span>
      ) : null}
    </span>
  );
}
