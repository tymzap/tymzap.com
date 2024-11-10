import { useRadioGroup } from "react-aria";
import { PropsWithChildren } from "react";
import { useRadioGroupState } from "@react-stately/radio";

import * as styles from "./RadioGroup.css";
import { RadioGroupContext } from "./RadioGroupContext";

type RadioGroupProps = PropsWithChildren<{
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
}>;

export function RadioGroup({
  children,
  label,
  onChange,
  value,
}: RadioGroupProps) {
  const state = useRadioGroupState({ onChange, value });

  const { radioGroupProps, labelProps } = useRadioGroup({ label }, state);

  return (
    <div {...radioGroupProps} className={styles.wrapper}>
      <span {...labelProps}>{label}</span>
      <RadioGroupContext.Provider value={state}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
}
