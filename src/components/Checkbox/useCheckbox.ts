import { useRef } from "react";
import { useFocusRing, mergeProps } from "react-aria";
import { useToggleState } from "@react-stately/toggle";

import { useIsCheckboxSelected } from "./useIsCheckboxSelected";
import { useCheckboxInputProps } from "./useCheckboxInputProps";

type UseCheckboxParams = {
  label?: string;
  isIndeterminate?: boolean;
  isSelected?: boolean;
  value?: string;
  onChange?: (value: boolean) => void;
};

export function useCheckbox({
  onChange,
  isSelected: isSelectedProp,
  value,
  isIndeterminate,
  label,
}: UseCheckboxParams) {
  const inputRef = useRef(null);

  const toggleState = useToggleState({ isSelected: isSelectedProp, onChange });

  const baseInputProps = useCheckboxInputProps({
    value,
    label,
    inputRef,
    toggleState,
  });

  const { isFocusVisible, focusProps } = useFocusRing();

  const inputProps = mergeProps(baseInputProps, focusProps);

  const isSelected = useIsCheckboxSelected({ value, toggleState });
  const isCheckmarkVisible = isSelected && !isIndeterminate;
  const hasCheckmarkWrapperBackground = isSelected || isIndeterminate;

  return {
    isFocusVisible,
    isCheckmarkVisible,
    hasCheckmarkWrapperBackground,
    inputProps,
    inputRef,
  };
}
