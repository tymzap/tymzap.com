import PlausibleProvider from "next-plausible";
import { PropsWithChildren } from "react";

type AnalyticsProviderProps = PropsWithChildren;

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return (
    <PlausibleProvider domain={DOMAIN} taggedEvents={true}>
      {children}
    </PlausibleProvider>
  );
}

const DOMAIN = "tymzap.com";
