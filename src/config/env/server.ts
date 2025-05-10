import * as yup from "yup";

export type ServerEnv = {
  API_TOKEN_SECRET: string;
  PLAUSIBLE_SITE_ID: string;
  PLAUSIBLE_API_URL: string;
  PLAUSIBLE_API_KEY: string;
  MAILER_LITE_API_URL: string;
  MAILER_LITE_API_TOKEN: string;
  MAILER_LITE_GROUP_ID: string;
  ENABLE_NEWSLETTER: boolean;
};

const schema: yup.Schema<ServerEnv> = yup.object({
  API_TOKEN_SECRET: yup.string().required(),
  PLAUSIBLE_SITE_ID: yup.string().required(),
  PLAUSIBLE_API_URL: yup.string().required(),
  PLAUSIBLE_API_KEY: yup.string().required(),
  MAILER_LITE_API_URL: yup.string().required(),
  MAILER_LITE_API_TOKEN: yup.string().required(),
  MAILER_LITE_GROUP_ID: yup.string().required(),
  ENABLE_NEWSLETTER: yup.boolean().required(),
});

export const SERVER_ENV = schema.validateSync(process.env, {
  stripUnknown: true,
});
