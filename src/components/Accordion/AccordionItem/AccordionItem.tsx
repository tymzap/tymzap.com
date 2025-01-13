import { PropsWithChildren, ReactNode } from "react";
import { animated } from "@react-spring/web";

import Plus from "~/icons/plus.svg";

import { useAccordionItem } from "./useAccordionItem";
import * as styles from "./AccordionItem.css";

type AccordionItemProps = PropsWithChildren<{
  label: ReactNode;
}>;

export function AccordionItem({ label, children }: AccordionItemProps) {
  const {
    panelProps,
    panelRef,
    panelStyle,
    triggerProps,
    triggerRef,
    isTriggerFocusVisible,
  } = useAccordionItem();

  return (
    <div className={styles.wrapper}>
      <button
        {...triggerProps}
        ref={triggerRef}
        className={styles.trigger({ withFocusRing: isTriggerFocusVisible })}
      >
        {label}
        <Plus className={styles.icon} />
      </button>
      {/* todo remove the @ts-ignore after React 19 support is added in react-spring */}
      {/* https://github.com/pmndrs/react-spring/issues/2341 */}
      {/* @ts-ignore */}
      <animated.div
        {...panelProps}
        style={panelStyle}
        ref={panelRef}
        className={styles.panel}
      >
        <div className={styles.panelContent}>{children}</div>
      </animated.div>
    </div>
  );
}
