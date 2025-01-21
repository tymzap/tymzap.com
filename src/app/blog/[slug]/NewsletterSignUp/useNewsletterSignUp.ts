import { useState } from "react";

import { NewsletterSignUpFormValues } from "~/newsletter/NewsletterSignUpForm";

export function useNewsletterSignUp() {
  const [isConfirmationDialogOpened, setIsConfirmationDialogOpened] =
    useState(false);

  const handleSubmit = async (values: NewsletterSignUpFormValues) => {
    console.log(values);
  };

  const closeConfirmationDialog = () => setIsConfirmationDialogOpened(false);

  return {
    handleSubmit,
    isConfirmationDialogOpened,
    closeConfirmationDialog,
  };
}
