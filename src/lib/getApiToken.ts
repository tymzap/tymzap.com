import { createHmac } from "node:crypto";

import { SERVER_ENV } from "~/config/env/server";

export function getApiToken(dataToEncode: any): string {
  const hmac = createHmac("sha256", SERVER_ENV.API_TOKEN_SECRET);

  hmac.update(JSON.stringify(dataToEncode));

  return hmac.digest("hex");
}
