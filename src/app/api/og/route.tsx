import { ImageResponse } from "next/og";

import { verifyApiToken } from "~/lib/verifyApiToken";

import { ArticleOgImage } from "./ArticleOgImage";
import { loadFonts } from "./loadFonts";
import { loadProfileImage } from "./loadProfileImage";

export const runtime = "edge";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const token = searchParams.get("token");

  if (!title) {
    return new Response("title param missing", { status: 404 });
  }

  const verifiedToken = await verifyApiToken({ title });

  if (token !== verifiedToken) {
    return new Response("invalid token", { status: 401 });
  }

  const profileImage = await loadProfileImage();
  const fonts = await loadFonts();

  return new ImageResponse(
    <ArticleOgImage profileImageSrc={profileImage} title={title} />,
    {
      fonts,
    },
  );
}
