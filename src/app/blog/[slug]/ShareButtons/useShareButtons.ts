import { useTranslations } from "next-intl";

import { useIsClient } from "~/lib/useIsClient";

export function useShareButtons() {
  const isClient = useIsClient();
  const t = useTranslations();

  const shareUrl = isClient ? window.location.href : "";
  const shareText = `${t("checkOutThisBlogPost")}:`;

  const shareOnX = () => {
    window.open(getXUrl(shareUrl, shareText), "_blank", "noopener,noreferrer");
  };

  const shareOnLinkedIn = () => {
    window.open(
      getLinkedInUrl(shareUrl, shareText),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return {
    isVisible: isClient,
    shareOnX,
    shareOnLinkedIn,
  };
}

function getXUrl(shareUrl: string, shareText: string) {
  const baseUrl = "https://x.com/intent/tweet";

  return `${baseUrl}?url=${encodeURIComponent(
    shareUrl,
  )}&text=${encodeURIComponent(shareText)}`;
}

function getLinkedInUrl(shareUrl: string, shareText: string) {
  const baseUrl = "https://www.linkedin.com/sharing/share-offsite";

  return `${baseUrl}?url=${encodeURIComponent(
    shareUrl,
  )}&text=${encodeURIComponent(shareText)}`;
}
