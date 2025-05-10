import { SERVER_ENV } from "~/config/env/server";

import { fetchFromMailerLiteApi } from "~/lib/fetchFromMailerLiteApi";

export function createSubscriber(email: string) {
  return fetchFromMailerLiteApi("subscribers", {
    method: "POST",
    body: {
      email,
      groups: [SERVER_ENV.MAILER_LITE_GROUP_ID],
    },
  });
}
