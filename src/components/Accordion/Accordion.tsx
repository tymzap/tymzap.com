import { PropsWithChildren } from "react";
import { useDisclosureGroupState } from "@react-stately/disclosure";

import { AccordionContext } from "./AccordionContext";
import { AccordionItem } from "./AccordionItem";

type AccordionProps = PropsWithChildren;

export function Accordion({ children }: AccordionProps) {
  const state = useDisclosureGroupState({});

  return (
    <AccordionContext.Provider value={state}>
      {children}
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
