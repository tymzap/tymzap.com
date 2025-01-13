import { RefObject } from "react";
import { useSpring, config } from "@react-spring/web";

type UseAccordionItemAnimationParams = {
  panelRef: RefObject<HTMLDivElement | null>;
  isExpanded: boolean;
};

export function useAccordionItemAnimation({
  panelRef,
  isExpanded,
}: UseAccordionItemAnimationParams) {
  const overrideReactAriaHiddenAttribute = () => {
    if (!isExpanded) {
      panelRef.current?.removeAttribute("hidden");
    }
  };

  const panelHeight = panelRef.current?.scrollHeight;

  const panelStyle = useSpring({
    maxHeight: isExpanded ? panelHeight : 0,
    config: config.stiff,
    onProps: overrideReactAriaHiddenAttribute,
  });

  return {
    panelStyle,
  };
}
