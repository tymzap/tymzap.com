import { useContext } from "react";

import { RadioGroupContext } from "./RadioGroupContext";

export function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error("Missing RadioGroupContext");
  }

  return context;
}
