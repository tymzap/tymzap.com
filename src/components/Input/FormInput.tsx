import { Controller, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Input, InputProps } from "./Input";

type FormInputProps = {
  name: string;
} & Pick<InputProps, "label" | "placeholder" | "isLabelVisible">;

export function FormInput({ name, ...inputProps }: FormInputProps) {
  const { control } = useFormContext();

  const t = useTranslations();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const translatedError = error ? t(error?.message) : undefined;

        return <Input {...field} {...inputProps} error={translatedError} />;
      }}
    />
  );
}
