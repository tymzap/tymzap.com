import { createHmac } from "node:crypto";

export function getApiToken(dataToEncode: any): string {
  const secret = process.env.API_TOKEN_SECRET as string;

  const hmac = createHmac("sha256", secret);

  hmac.update(JSON.stringify(dataToEncode));

  return hmac.digest("hex");
}
