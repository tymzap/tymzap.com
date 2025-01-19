import "sanitize.css";
import { PropsWithChildren } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import PlausibleProvider from "next-plausible";
import cn from "classnames";

import { ThemeProvider } from "~/theme/ThemeProvider";
import "~/styles/global.css";
import "~/config/yupLocale";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { TopLoader } from "~/components/TopLoader";
import { firaMono, openSans, sourceSans3 } from "~/styles/fonts";

import { getMenuLinks } from "./getMenuLinks";
import { ContactLinks } from "./ContactLinks";
import { ContentWrapper } from "./ContentWrapper";

export { generateMetadata } from "./generateMetadata";

type LayoutProps = PropsWithChildren;

export default async function Layout({ children }: LayoutProps) {
  const locale = await getLocale();
  const translations = await getMessages();

  const menuLinks = await getMenuLinks();

  const fonts = cn(sourceSans3.variable, firaMono.variable, openSans.variable);

  return (
    <html lang={locale} className={fonts} suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider>
          <PlausibleProvider domain={DOMAIN}>
            <TopLoader />
            <NextIntlClientProvider locale={locale} messages={translations}>
              <Navbar
                menuLinks={menuLinks}
                contactLinks={
                  <ContactLinks iconSize={NAVBAR_SOCIAL_MEDIA_LINK_ICON_SIZE} />
                }
              />
              <ContentWrapper>{children}</ContentWrapper>
              <Footer contactLinks={<ContactLinks />} />
            </NextIntlClientProvider>
          </PlausibleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

const DOMAIN = "tymzap.com";

const NAVBAR_SOCIAL_MEDIA_LINK_ICON_SIZE = 40;
