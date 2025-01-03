import { JsonObject } from "type-fest";

export async function fetchFromMailerLiteApi(
  path: string,
  params: FetchParams = {},
) {
  const url = `${API_URL}/${path}`;

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
    authorization: `Bearer ${API_TOKEN}`,
  };
}

type FetchParams = {
  method?: string;
  body?: JsonObject;
};

const API_URL = process.env.MAILER_LITE_API_URL as string;

const API_TOKEN = process.env.MAILER_LITE_API_TOKEN as string;
