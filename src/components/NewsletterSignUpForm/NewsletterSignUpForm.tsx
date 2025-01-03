"use client";

import { useTranslations } from "next-intl";

import { Input } from "~/components/Input";
import { Button } from "~/components/Button";
import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";

import { NewsletterSignUpFormValues } from "./NewsletterSignUpFormValues";
import * as styles from "./NewsletterSignUpForm.css";

type NewsletterSignUpFormProps = {
  title: string;
  description: string;
  onSubmit?: (values: NewsletterSignUpFormValues) => void;
};

export function NewsletterSignUpForm({
  description,
  title,
}: NewsletterSignUpFormProps) {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Heading level={2}>{title}</Heading>
        <Text>{description}</Text>
      </div>
      <form className={styles.form}>
        <Input
          placeholder={t("email")}
          label={t("email")}
          isLabelVisible={false}
        />
        <Button variant={"secondary"}>{t("signUp")}</Button>
      </form>
    </div>
  );
}
