import Dash from "~/icons/dash.svg";
import Check from "~/icons/check.svg";

import * as styles from "./Checkbox.css";
import { useCheckbox } from "./useCheckbox";

type CheckboxProps = {
  label?: string;
  isIndeterminate?: boolean;
  isSelected?: boolean;
  value?: string;
  onChange?: (value: boolean) => void;
};

export function Checkbox({
  label,
  isIndeterminate = false,
  isSelected,
  onChange,
  value,
}: CheckboxProps) {
  const {
    isCheckmarkVisible,
    isFocusVisible,
    hasCheckmarkWrapperBackground,
    inputProps,
    inputRef,
  } = useCheckbox({ isIndeterminate, onChange, isSelected, label, value });

  return (
    <label className={styles.label}>
      <input {...inputProps} className={styles.input} ref={inputRef} />
      <div
        className={styles.checkmarkWrapper({
          withFocus: isFocusVisible,
          withBackground: hasCheckmarkWrapperBackground,
        })}
      >
        {isCheckmarkVisible && <Check />}
        {isIndeterminate && <Dash />}
      </div>
      {label}
    </label>
  );
}
