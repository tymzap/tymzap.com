import { useTextField } from "react-aria";
import { useRef } from "react";

import * as styles from "./Input.css";

type InputProps = {
  label?: string;
  error?: string;
  placeholder?: string;
  isLabelVisible?: boolean;
};

export function Input({
  label,
  error,
  placeholder,
  isLabelVisible = true,
}: InputProps) {
  const ref = useRef(null);
  const { inputProps, labelProps, errorMessageProps } = useTextField(
    {
      label,
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
