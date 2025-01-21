import { flag } from "@vercel/flags/next";

import { SERVER_ENV } from "~/config/env/server";
import { FEATURE_FLAG_KEYS } from "~/constants/featureFlagKeys";

export const newsletterFlag = flag({
  key: FEATURE_FLAG_KEYS.NEWSLETTER,
  decide: () => SERVER_ENV.ENABLE_NEWSLETTER,
});
