import { RefObject } from "react";
import {
  useCheckboxGroupItem,
  useCheckbox,
  useCheckboxGroup,
} from "react-aria";
import { ToggleState } from "@react-stately/toggle";
import { useCheckboxGroupState } from "@react-stately/checkbox";

import { useCheckboxGroupContext } from "./CheckboxGroup";

type UseCheckboxInputParams = {
  inputRef: RefObject<HTMLInputElement | null>;
  value?: string;
  label?: string;
  toggleState: ToggleState;
};

export function useCheckboxInputProps({
  value,
  inputRef,
  label,
  toggleState,
}: UseCheckboxInputParams) {
  const groupState = useCheckboxGroupContext();
  const fallbackGroupState = useFallbackGroupState();

  const { inputProps: checkboxInputProps } = useCheckbox(
    { children: label, value },
    toggleState,
    inputRef,
  );

  const { inputProps: groupItemInputProps } = useCheckboxGroupItem(
    {
      value: value ?? "",
      children: label,
    },
    groupState ?? fallbackGroupState,
    inputRef,
  );

  return groupState ? groupItemInputProps : checkboxInputProps;
}

function useFallbackGroupState() {
  const fallbackGroupState = useCheckboxGroupState();
  // useCheckboxGroup must be executed in pair with useCheckboxGroupState to avoid "Cannot destructure property" error
  useCheckboxGroup({}, fallbackGroupState);

  return fallbackGroupState;
}
