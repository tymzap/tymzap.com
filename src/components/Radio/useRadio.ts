import { useRef } from "react";
import { useFocusRing, useRadio as useBaseRadio, mergeProps } from "react-aria";

import { useRadioGroupContext } from "./RadioGroup";

type UseRadioParams = {
  value: string;
  label?: string;
};

export function useRadio({ value, label }: UseRadioParams) {
  const state = useRadioGroupContext();

  const inputRef = useRef(null);

  const { inputProps: baseInputProps, labelProps } = useBaseRadio(
    { value, children: label },
    state,
    inputRef,
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  const inputProps = mergeProps(baseInputProps, focusProps);

  const isSelected = state.selectedValue === value;

  return {
    isSelected,
    isFocusVisible,
    inputProps,
    labelProps,
    inputRef,
  };
}
