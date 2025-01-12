import { getCookie } from "cookies-next/server";
import { cookies } from "next/headers";

import { COOKIE_KEYS } from "~/constants/cookieKeys";
import { normalizeTheme } from "~/theme/normalizeTheme";

export async function getServerTheme() {
  const cookieValue = await getCookie(COOKIE_KEYS.THEME, { cookies });

  return normalizeTheme(cookieValue);
}
