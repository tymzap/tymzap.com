import { SERVER_ENV } from "~/config/env/server";

export async function verifyApiToken(encodedData: any) {
  const key = await getKey();
  const data = new TextEncoder().encode(JSON.stringify(encodedData));

  return arrayBufferToHex(await crypto.subtle.sign("HMAC", key, data));
}

async function getKey() {
  const secret = SERVER_ENV.API_TOKEN_SECRET;
  const algorithm = { name: "HMAC", hash: { name: "SHA-256" } };

  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    algorithm,
    false,
    ["sign"],
  );
}

function arrayBufferToHex(arrayBuffer: ArrayBuffer) {
  return Array.prototype.map
    .call(new Uint8Array(arrayBuffer), (byte) =>
      byte.toString(16).padStart(2, "0"),
    )
    .join("");
}
