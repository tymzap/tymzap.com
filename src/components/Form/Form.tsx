import {
  FormProvider,
  useForm,
  FieldValues,
  DefaultValues,
  SubmitHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PropsWithChildren } from "react";
import { ObjectSchema } from "yup";

type FormProps<Values extends FieldValues> = PropsWithChildren<{
  schema?: ObjectSchema<any>;
  onSubmit: SubmitHandler<Values>;
  defaultValues: DefaultValues<Values>;
  className?: string;
}>;

export function Form<Values extends FieldValues>({
  children,
  schema,
  onSubmit,
  defaultValues,
  className,
}: FormProps<Values>) {
  const resolver = schema ? yupResolver(schema) : undefined;

  const form = useForm<Values>({ defaultValues, resolver });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
