import { ToggleState } from "@react-stately/toggle";

import { useCheckboxGroupContext } from "./CheckboxGroup";

type UseIsCheckboxSelected = {
  toggleState: ToggleState;
  value?: string;
};

export function useIsCheckboxSelected({
  toggleState,
  value,
}: UseIsCheckboxSelected) {
  const groupState = useCheckboxGroupContext();

  const isSelected = groupState
    ? groupState?.value?.includes(value ?? "")
    : toggleState.isSelected;

  return isSelected;
}
