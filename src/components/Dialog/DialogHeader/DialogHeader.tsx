import { ReactNode } from "react";
import { DOMAttributes } from "@react-types/shared";
import { useTranslations } from "next-intl";

import { IconButton } from "~/components/IconButton";
import Close from "~/icons/close.svg";

import * as styles from "./DialogHeader.css";

type DialogHeaderProps = {
  title?: ReactNode;
  titleProps?: DOMAttributes;
  onClose?: () => void;
};

export function DialogHeader({
  titleProps,
  title,
  onClose,
}: DialogHeaderProps) {
  const t = useTranslations();

  if (!title && !onClose) {
    return null;
  }

  if (!title) {
    return (
      <header
        className={styles.header({ withTitle: false, withCloseButton: true })}
      >
        <IconButton
          icon={Close}
          onPress={onClose}
          size={ICON_BUTTON_SIZE}
          label={t("close")}
        />
      </header>
    );
  }

  if (!onClose) {
    return (
      <header
        className={styles.header({ withTitle: true, withCloseButton: false })}
      >
        <h2 {...titleProps} className={styles.title}>
          {title}
        </h2>
      </header>
    );
  }

  return (
    <header
      className={styles.header({ withTitle: true, withCloseButton: true })}
    >
      <h2 {...titleProps} className={styles.title}>
        {title}
      </h2>
      <IconButton
        icon={Close}
        onPress={onClose}
        size={ICON_BUTTON_SIZE}
        label={t("close")}
      />
    </header>
  );
}

const ICON_BUTTON_SIZE = 22;
