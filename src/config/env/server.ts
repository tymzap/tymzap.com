import * as yup from "yup";

export type ServerEnv = {
  API_TOKEN_SECRET: string;
  MAILER_LITE_API_URL: string;
  MAILER_LITE_API_TOKEN: string;
  MAILER_LITE_GROUP_ID: string;
  ENABLE_NEWSLETTER: boolean;
};

const schema: yup.Schema<ServerEnv> = yup.object({
  API_TOKEN_SECRET: yup.string().required(),
  MAILER_LITE_API_URL: yup.string().required(),
  MAILER_LITE_API_TOKEN: yup.string().required(),
  MAILER_LITE_GROUP_ID: yup.string().required(),
  ENABLE_NEWSLETTER: yup.boolean().required(),
});

export const SERVER_ENV = schema.validateSync(process.env, {
  stripUnknown: true,
});
