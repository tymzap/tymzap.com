import { useToggleState } from "@react-stately/toggle";
import { useRef } from "react";
import {
  useFocusRing,
  useCheckbox as useBaseCheckbox,
  mergeProps,
} from "react-aria";

type UseCheckboxParams = {
  label?: string;
  isIndeterminate?: boolean;
  isSelected?: boolean;
  onChange?: (value: boolean) => void;
};

export function useCheckbox({
  onChange,
  isSelected,
  isIndeterminate,
  label,
}: UseCheckboxParams) {
  const state = useToggleState({ isSelected, onChange });
  const inputRef = useRef(null);
  const { inputProps: baseInputProps } = useBaseCheckbox(
    { children: label },
    state,
    inputRef,
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  const inputProps = mergeProps(baseInputProps, focusProps);

  const isCheckmarkVisible = state.isSelected && !isIndeterminate;
  const hasCheckmarkWrapperBackground = state.isSelected || isIndeterminate;

  return {
    isFocusVisible,
    isCheckmarkVisible,
    hasCheckmarkWrapperBackground,
    inputProps,
    inputRef,
  };
}
