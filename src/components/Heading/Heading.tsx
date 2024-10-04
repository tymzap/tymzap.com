import { PropsWithChildren } from "react";
import cn from "classnames";

import * as styles from "./Heading.css";

type HeadingProps = PropsWithChildren<{
  level: Level;
}>;

export function Heading({ level, children }: HeadingProps) {
  const Element = getElement(level);

  return <Element className={cn(styles.heading[level])}>{children}</Element>;
}

type Level = 1 | 2 | 3 | 4 | 5 | 6;

function getElement(level: Level) {
  const dictionary = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  } as const;

  return dictionary[level];
}
