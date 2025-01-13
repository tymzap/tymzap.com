import { useId, useRef } from "react";
import { useDisclosureState } from "@react-stately/disclosure";
import { useButton, useDisclosure, useFocusRing, mergeProps } from "react-aria";

import { useAccordionContext } from "../useAccordionContext";
import { useAccordionItemAnimation } from "./useAccordionItemAnimation";

export function useAccordionItem() {
  const groupState = useAccordionContext();

  const key = useId();
  const isExpanded = groupState.expandedKeys.has(key);

  const state = useDisclosureState({
    isExpanded,
    onExpandedChange: () => {
      groupState.toggleKey(key);
    },
  });

  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const { buttonProps, panelProps } = useDisclosure({}, state, panelRef);
  const { buttonProps: baseTriggerProps } = useButton(
    { ...buttonProps },
    triggerRef,
  );
  const {
    focusProps: triggerFocusProps,
    isFocusVisible: isTriggerFocusVisible,
  } = useFocusRing();
  const triggerProps = mergeProps(baseTriggerProps, triggerFocusProps);

  const { panelStyle } = useAccordionItemAnimation({ panelRef, isExpanded });

  return {
    panelProps,
    panelRef,
    panelStyle,
    triggerProps,
    triggerRef,
    isTriggerFocusVisible,
  };
}
