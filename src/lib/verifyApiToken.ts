export async function verifyApiToken(encodedData: any) {
  const key = await getKey();
  const data = new TextEncoder().encode(JSON.stringify(encodedData));

  return arrayBufferToHex(await crypto.subtle.sign("HMAC", key, data));
}

async function getKey() {
  const secret = process.env.API_TOKEN_SECRET as string;
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
