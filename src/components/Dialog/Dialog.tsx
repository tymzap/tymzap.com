"use client";

import { useDialog } from "react-aria";
import { PropsWithChildren, ReactNode, useRef } from "react";

import { DialogHeader } from "./DialogHeader";
import * as styles from "./Dialog.css";

type DialogProps = PropsWithChildren<{
  isOpened: boolean;
  title?: ReactNode;
  onClose?: () => void;
}>;

export function Dialog({ children, isOpened, title, onClose }: DialogProps) {
  const ref = useRef(null);
  const { dialogProps, titleProps } = useDialog({ role: "dialog" }, ref);

  if (!isOpened) {
    return null;
  }

  return (
    <div {...dialogProps} className={styles.wrapper}>
      <DialogHeader title={title} onClose={onClose} titleProps={titleProps} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
