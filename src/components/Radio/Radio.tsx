import Bullet from "~/icons/bullet.svg";

import * as styles from "./Radio.css";
import { useRadio } from "./useRadio";

type RadioProps = {
  value: string;
  label?: string;
};

export function Radio({ label, value }: RadioProps) {
  const { isFocusVisible, labelProps, isSelected, inputProps, inputRef } =
    useRadio({ value, label });

  return (
    <label {...labelProps} className={styles.label}>
      <input
        {...inputProps}
        value={value}
        className={styles.input}
        ref={inputRef}
      />
      <div
        className={styles.bulletWrapper({
          withBackground: isSelected,
          withFocus: isFocusVisible,
        })}
      >
        {isSelected && <Bullet />}
      </div>
      {label}
    </label>
  );
}
