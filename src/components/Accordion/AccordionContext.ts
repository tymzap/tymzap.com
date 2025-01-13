import { createContext } from "react";
import { DisclosureGroupState } from "@react-stately/disclosure";

export const AccordionContext = createContext<DisclosureGroupState | null>(
  null,
);
