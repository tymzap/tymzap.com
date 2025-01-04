"use client";

import { useTranslations } from "next-intl";

import { Dialog } from "~/components/Dialog";
import { NewsletterSignUpForm } from "~/components/NewsletterSignUpForm";

import { useNewsletterSignUp } from "./useNewsletterSignUp";
import * as styles from "./NewsletterSignUp.css";

type NewsletterSignUpProps = {
  isVisible: boolean;
};

export function NewsletterSignUp({ isVisible }: NewsletterSignUpProps) {
  const t = useTranslations();

  const { handleSubmit, isConfirmationDialogOpened, closeConfirmationDialog } =
    useNewsletterSignUp();

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <NewsletterSignUpForm
          title={t("hungryForMoreReactTips")}
          description={t("joinTheFreeCleanReactForgeNewsletter")}
          onSubmit={handleSubmit}
        />
      </div>
      <Dialog
        isOpened={isConfirmationDialogOpened}
        onClose={closeConfirmationDialog}
      >
        {t("almostDoneConfirmationEmailWasSentToYourInbox")}
      </Dialog>
    </>
  );
}
