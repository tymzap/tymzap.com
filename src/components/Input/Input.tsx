import { useTextField } from "react-aria";
import { useRef, Ref, RefObject } from "react";

import * as styles from "./Input.css";

export type InputProps = {
  onChange?: (value?: string) => void;
  value?: string;
  label?: string;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  isLabelVisible?: boolean;
  ref?: Ref<HTMLInputElement>;
};

export function Input({
  label,
  error,
  placeholder,
  isLabelVisible = true,
  value,
  onBlur,
  onChange,
  ref: refProp,
}: InputProps) {
  const innerRef = useRef(null);
  const ref = (refProp ?? innerRef) as RefObject<HTMLInputElement>;
  const { inputProps, labelProps, errorMessageProps } = useTextField(
    {
      label,
      value,
      onChange,
      onBlur,
      errorMessage: error,
      isInvalid: Boolean(error),
      placeholder,
    },
    ref,
  );

  return (
    <div className={styles.wrapper}>
      {label ? (
        <label
          {...labelProps}
          className={styles.label({ hidden: !isLabelVisible })}
        >
          {label}
        </label>
      ) : null}
      <input {...inputProps} className={styles.input} />
      <span {...errorMessageProps} className={styles.errorMessage}>
        {error}
      </span>
    </div>
  );
}
