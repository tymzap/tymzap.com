import cn from "classnames";
import "sanitize.css";
import { PropsWithChildren } from "react";
import { Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";

import "~/styles/global.css";
import { sourceSans3, firaMono, openSans } from "~/styles/fonts";
import { theme } from "~/styles/theme.css";
import { MenuLink, Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { TopLoader } from "~/components/TopLoader";

import { SocialMediaLinks } from "./SocialMediaLinks";
import { ContentWrapper } from "./ContentWrapper";

export { generateMetadata } from "./generateMetadata";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type HomeLayoutProps = PropsWithChildren;

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <html lang="en">
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
        <TopLoader />
        <NextIntlClientProvider>
          <Navbar
            menuLinks={MENU_LINKS}
            socialMediaLinks={
              <SocialMediaLinks iconSize={NAVBAR_SOCIAL_MEDIA_LINK_ICON_SIZE} />
            }
          />
          <ContentWrapper>{children}</ContentWrapper>
          <Footer socialMediaLinks={<SocialMediaLinks />} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

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
