import { ComponentType, SVGProps } from "react";

import * as styles from "./ButtonIcon.css";

type ButtonIconProps = {
  icon: ComponentType<SVGProps<SVGElement>>;
};

export function ButtonIcon({ icon: Icon }: ButtonIconProps) {
  return <Icon className={styles.icon} />;
}
