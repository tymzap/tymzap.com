import "sanitize.css";
import { PropsWithChildren } from "react";
import { Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import PlausibleProvider from "next-plausible";
import cn from "classnames";

import { ThemeProvider } from "~/theme/ThemeProvider";
import "~/styles/global.css";
import "~/config/yupLocale";
import { MenuLink, Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { TopLoader } from "~/components/TopLoader";
import { firaMono, openSans, sourceSans3 } from "~/styles/fonts";
import { getThemeClassName } from "~/theme/getThemeClassName";
import { getServerTheme } from "~/theme/getServerTheme";

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

  const fonts = cn(sourceSans3.variable, firaMono.variable, openSans.variable);
  const theme = await getServerTheme();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn(fonts, getThemeClassName(theme))}>
        <ThemeProvider>
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
        </ThemeProvider>
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
