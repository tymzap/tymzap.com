import { useCheckboxGroupState } from "@react-stately/checkbox";
import { useCheckboxGroup } from "react-aria";
import { PropsWithChildren } from "react";

import * as styles from "./CheckboxGroup.css";
import { CheckboxGroupContext } from "./CheckboxGroupContext";

type CheckboxGroupProps = PropsWithChildren<{
  label?: string;
  onChange?: (value: string[]) => void;
  value?: string[];
}>;

export function CheckboxGroup({
  label,
  children,
  value,
  onChange,
}: CheckboxGroupProps) {
  const state = useCheckboxGroupState({ value, onChange });

  const { groupProps, labelProps } = useCheckboxGroup({ label }, state);

  return (
    <div {...groupProps} className={styles.wrapper}>
      <label {...labelProps}>{label}</label>
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
    </div>
  );
}
