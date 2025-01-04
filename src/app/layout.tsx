import cn from "classnames";
import "sanitize.css";
import { PropsWithChildren } from "react";
import { Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import PlausibleProvider from "next-plausible";

import "~/styles/global.css";
import "~/config/yupLocale";
import { sourceSans3, firaMono, openSans } from "~/styles/fonts";
import { theme } from "~/styles/theme.css";
import { MenuLink, Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { TopLoader } from "~/components/TopLoader";

import { ContactLinks } from "./ContactLinks";
import { ContentWrapper } from "./ContentWrapper";

export { generateMetadata } from "./generateMetadata";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type LayoutProps = PropsWithChildren;

export default async function Layout({ children }: LayoutProps) {
  const locale = await getLocale();
  const translations = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          theme,
          sourceSans3.variable,
          firaMono.variable,
          openSans.variable,
        )}
      >
        <PlausibleProvider domain={DOMAIN}>
          <TopLoader />
          <NextIntlClientProvider locale={locale} messages={translations}>
            <Navbar
              menuLinks={MENU_LINKS}
              contactLinks={
                <ContactLinks iconSize={NAVBAR_SOCIAL_MEDIA_LINK_ICON_SIZE} />
              }
            />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer contactLinks={<ContactLinks />} />
          </NextIntlClientProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}

const DOMAIN = "tymzap.com";

const NAVBAR_SOCIAL_MEDIA_LINK_ICON_SIZE = 40;

const MENU_LINKS: MenuLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];
