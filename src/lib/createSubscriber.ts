import { fetchFromMailerLiteApi } from "~/lib/fetchFromMailerLiteApi";

export function createSubscriber(email: string) {
  return fetchFromMailerLiteApi("subscribers", {
    method: "POST",
    body: {
      email,
      groups: [GROUP_ID],
    },
  });
}

const GROUP_ID = process.env.MAILER_LITE_GROUP_ID as string;
