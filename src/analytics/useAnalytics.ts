import { usePlausible } from "next-plausible";
import { JsonObject } from "type-fest";

export function useAnalytics() {
  const plausible = usePlausible();

  const trackEvent = (event: string, props?: JsonObject) => {
    plausible(event, props);
  };

  return { trackEvent };
}
