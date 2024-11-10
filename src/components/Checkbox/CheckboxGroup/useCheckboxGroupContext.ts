import { useContext } from "react";

import { CheckboxGroupContext } from "./CheckboxGroupContext";

export function useCheckboxGroupContext() {
  return useContext(CheckboxGroupContext);
}
