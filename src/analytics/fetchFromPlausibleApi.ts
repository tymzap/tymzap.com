import { JsonObject } from "type-fest";

import { SERVER_ENV } from "~/config/env/server";

export async function fetchFromPlausibleApi(
  path: string,
  params: FetchParams = {},
) {
  const url = `${SERVER_ENV.PLAUSIBLE_API_URL}/${path}`;

  const response = await fetch(url, prepareRequestInit(params));
  const data = await response.json();

  if (!response.ok) {
    const errorMessage = data.error || response.statusText;

    throw new Error(errorMessage);
  }

  return data;
}

function prepareRequestInit({ method, body }: FetchParams = {}) {
  const requestInit: RequestInit = {
    headers: prepareHeaders(),
    body: prepareBody(body),
  };

  if (method) {
    requestInit.method = method;
  }

  return requestInit;
}

function prepareBody(body?: JsonObject) {
  const initialBody = {
    site_id: SERVER_ENV.PLAUSIBLE_SITE_ID,
  };

  if (!body) {
    return JSON.stringify(initialBody);
  }

  return JSON.stringify({ ...initialBody, ...body });
}

function prepareHeaders() {
  return {
    "content-type": "application/json",
    accept: "application/json",
    authorization: `Bearer ${SERVER_ENV.PLAUSIBLE_API_KEY}`,
  };
}

type FetchParams = {
  method?: string;
  body?: JsonObject;
};
