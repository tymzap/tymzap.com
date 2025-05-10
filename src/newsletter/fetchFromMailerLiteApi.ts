import { JsonObject } from "type-fest";

import { SERVER_ENV } from "~/config/env/server";

export async function fetchFromMailerLiteApi(
  path: string,
  params: FetchParams = {},
) {
  const url = `${SERVER_ENV.MAILER_LITE_API_URL}/${path}`;

  return fetch(url, prepareRequestInit(params)).then((response) =>
    response.json(),
  );
}

function prepareRequestInit({ method, body }: FetchParams = {}) {
  const requestInit: RequestInit = {
    headers: prepareHeaders(),
  };

  if (method) {
    requestInit.method = method;
  }

  if (body) {
    requestInit.body = JSON.stringify(body);
  }

  return requestInit;
}

function prepareHeaders() {
  return {
    "content-type": "application/json",
    accept: "application/json",
    authorization: `Bearer ${SERVER_ENV.MAILER_LITE_API_TOKEN}`,
  };
}

type FetchParams = {
  method?: string;
  body?: JsonObject;
};
