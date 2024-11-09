import { useRef } from "react";
import { useCheckbox, useFocusRing, mergeProps } from "react-aria";
import { useToggleState } from "@react-stately/toggle";

import Dash from "~/icons/dash.svg";
import Checkmark from "~/icons/checkmark.svg";

import * as styles from "./Checkbox.css";

type CheckboxProps = {
  label?: string;
  isIndeterminate?: boolean;
};

export function Checkbox({ label, isIndeterminate = false }: CheckboxProps) {
  const state = useToggleState();
  const ref = useRef(null);
  const { inputProps } = useCheckbox({ children: label }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const isCheckmarkVisible = state.isSelected && !isIndeterminate;

  return (
    <label className={styles.label}>
      <input
        {...mergeProps(inputProps, focusProps)}
        className={styles.input}
        ref={ref}
      />
      <div
        className={styles.checkmarkWrapper({
          withFocus: isFocusVisible,
          withBackground: state.isSelected || isIndeterminate,
        })}
      >
        {isCheckmarkVisible && <Checkmark />}
        {isIndeterminate && <Dash />}
      </div>
      {label}
    </label>
  );
}
