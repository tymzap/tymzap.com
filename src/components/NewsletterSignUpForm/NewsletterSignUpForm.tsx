"use client";

import * as yup from "yup";
import { useTranslations } from "next-intl";

import { Form } from "~/components/Form";
import { FormInput } from "~/components/Input";
import { Button } from "~/components/Button";
import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";

import { NewsletterSignUpFormValues } from "./NewsletterSignUpFormValues";
import * as styles from "./NewsletterSignUpForm.css";

type NewsletterSignUpFormProps = {
  title: string;
  description: string;
  onSubmit: (values: NewsletterSignUpFormValues) => void;
};

export function NewsletterSignUpForm({
  description,
  title,
  onSubmit,
}: NewsletterSignUpFormProps) {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Heading level={2}>{title}</Heading>
        <Text>{description}</Text>
      </div>
      <Form<NewsletterSignUpFormValues>
        onSubmit={onSubmit}
        defaultValues={DEFAULT_VALUES}
        schema={SCHEMA}
        className={styles.form}
      >
        <FormInput
          name={"email"}
          label={t("email")}
          placeholder={t("email")}
          isLabelVisible={false}
        />
        <Button variant={"secondary"} type={"submit"}>
          {t("signUp")}
        </Button>
      </Form>
    </div>
  );
}

const DEFAULT_VALUES = { email: "" };

const SCHEMA = yup.object({
  email: yup.string().email().required(),
});
