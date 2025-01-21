import { fetchFromMailerLiteApi } from "~/lib/fetchFromMailerLiteApi";
import { SERVER_ENV } from "~/config/env/server";

export function createSubscriber(email: string) {
  return fetchFromMailerLiteApi("subscribers", {
    method: "POST",
    body: {
      email,
      groups: [SERVER_ENV.MAILER_LITE_GROUP_ID],
    },
  });
}
