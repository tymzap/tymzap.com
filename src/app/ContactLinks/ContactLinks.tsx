import X from "~/icons/x.svg";
import LinkedIn from "~/icons/linkedin.svg";
import Gmail from "~/icons/gmail.svg";
import GitHub from "~/icons/github.svg";
import { IconLink } from "~/components/IconLink";
import { CONTACT_URLS } from "~/constants/contact";

import * as styles from "./ContactLinks.css";

type ContactLinksProps = {
  iconSize?: number;
};

export function ContactLinks({ iconSize }: ContactLinksProps) {
  return (
    <div className={styles.wrapper}>
      {LINKS.map(({ href, icon, label }) => (
        <IconLink
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
    href: CONTACT_URLS.X,
    label: "X",
    icon: X,
  },
  {
    href: CONTACT_URLS.LINKED_IN,
    label: "LinkedIn",
    icon: LinkedIn,
  },
  {
    href: CONTACT_URLS.GITHUB,
    label: "GitHub",
    icon: GitHub,
  },
  {
    href: CONTACT_URLS.EMAIL,
    label: "Email",
    icon: Gmail,
  },
];
