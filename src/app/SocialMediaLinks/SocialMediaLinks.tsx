import { SOCIAL_MEDIA_URLS } from "~/constants/socialMedia";
import X from "~/icons/x.svg";
import LinkedIn from "~/icons/linkedin.svg";
import ProductHunt from "~/icons/product-hunt.svg";
import GitHub from "~/icons/github.svg";
import { IconLink } from "~/components/IconLink";

import * as styles from "./SocialMediaLinks.css";

type SocialMediaLinksProps = {
  iconSize?: number;
};

export function SocialMediaLinks({ iconSize }: SocialMediaLinksProps) {
  return (
    <div className={styles.wrapper}>
      {LINKS.map(({ href, icon, label }) => (
        <IconLink
          color={"white"}
          size={iconSize}
          href={href}
          icon={icon}
          label={label}
          key={href}
        />
      ))}
    </div>
  );
}

const LINKS = [
  {
    href: SOCIAL_MEDIA_URLS.X,
    label: "X",
    icon: X,
  },
  {
    href: SOCIAL_MEDIA_URLS.LINKED_IN,
    label: "LinkedIn",
    icon: LinkedIn,
  },
  {
    href: SOCIAL_MEDIA_URLS.PRODUCT_HUNT,
    label: "Product Hunt",
    icon: ProductHunt,
  },
  {
    href: SOCIAL_MEDIA_URLS.GITHUB,
    label: "GitHub",
    icon: GitHub,
  },
];
