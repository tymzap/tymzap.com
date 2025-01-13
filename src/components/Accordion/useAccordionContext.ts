"use client";

import { useContext } from "react";

import { AccordionContext } from "./AccordionContext";

export function useAccordionContext() {
  const contextValue = useContext(AccordionContext);

  if (!contextValue) {
    throw new Error("useAccordionContext should be used inside Accordion");
  }

  return contextValue;
}
