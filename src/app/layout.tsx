import "sanitize.css";
import { PropsWithChildren } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import cn from "classnames";

import { ThemeProvider } from "~/theme/ThemeProvider";
import "~/styles/global.css";
import "~/config/yupLocale";
import { TopLoader } from "~/components/TopLoader";
import { firaMono, openSans, sourceSans3 } from "~/styles/fonts";
import { AnalyticsProvider } from "~/analytics/AnalyticsProvider";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ContentWrapper } from "./ContentWrapper";

export { generateMetadata } from "./generateMetadata";

type LayoutProps = PropsWithChildren;

export default async function Layout({ children }: LayoutProps) {
  const locale = await getLocale();
  const translations = await getMessages();

  const fonts = cn(sourceSans3.variable, firaMono.variable, openSans.variable);

  return (
    <html lang={locale} className={fonts} suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider>
          <AnalyticsProvider>
            <TopLoader />
            <NextIntlClientProvider locale={locale} messages={translations}>
              <Navbar />
              <ContentWrapper>{children}</ContentWrapper>
              <Footer />
            </NextIntlClientProvider>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
