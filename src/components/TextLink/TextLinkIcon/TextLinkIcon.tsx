import cn from "classnames";
import { ComponentType, SVGProps } from "react";

import * as styles from "./TextLinkIcon.css";

type TextLinkIconProps = {
  icon: ComponentType<SVGProps<SVGElement>>;
  hoverAnimation?: "slide-right" | "slide-left" | "rotate";
};

export function TextLinkIcon({
  icon: Icon,
  hoverAnimation,
}: TextLinkIconProps) {
  return (
    <Icon
      className={cn(styles.icon, {
        [styles.withSlideLeftAnimation]: hoverAnimation === "slide-left",
        [styles.withSlideRightAnimation]: hoverAnimation === "slide-right",
        [styles.withRotateAnimation]: hoverAnimation === "rotate",
      })}
    />
  );
}
