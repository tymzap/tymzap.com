import { useTextField } from "react-aria";
import { useRef } from "react";

import * as styles from "./Input.css";

type InputProps = {
  label?: string;
  error?: string;
  color?: "white" | "black";
};

export function Input({ label, error, color = "white" }: InputProps) {
  const ref = useRef(null);
  const { inputProps, labelProps, errorMessageProps } = useTextField(
    { label, errorMessage: error, isInvalid: Boolean(error) },
    ref,
  );

  return (
    <div className={styles.wrapper({ color })}>
      {label ? (
        <label {...labelProps} className={styles.label}>
          {label}
        </label>
      ) : null}
      <input {...inputProps} className={styles.input} />
      {error ? (
        <span {...errorMessageProps} className={styles.errorMessage}>
          {error}
        </span>
      ) : null}
    </div>
  );
}
