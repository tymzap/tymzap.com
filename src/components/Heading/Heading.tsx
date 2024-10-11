import { PropsWithChildren } from "react";
import cn from "classnames";

import * as styles from "./Heading.css";

type HeadingProps = PropsWithChildren<{
  level: Level;
  id?: string;
  as?: Element;
  hasExtendedTopMargin?: boolean;
}>;

export function Heading({
  level,
  id,
  as,
  children,
  hasExtendedTopMargin,
}: HeadingProps) {
  const Element = as ?? getElement(level);

  return (
    <Element
      className={cn(styles.heading[level], {
        [styles.withExtendedTopMargin[level]]: hasExtendedTopMargin,
      })}
      id={id}
    >
      {children}
    </Element>
  );
}

type Level = 2 | 3 | 4 | 5;

type Element = "h2" | "h3" | "h4" | "h5";

function getElement(level: Level): Element {
  const dictionary = {
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
  } as const;

  return dictionary[level];
}
