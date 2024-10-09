import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";

import { ArticleOgImage } from "./ArticleOgImage";
import { loadFonts } from "./loadFonts";
import { loadProfileImage } from "./loadProfileImage";

export const runtime = "edge";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title");

  if (!title) {
    return NextResponse.json("title param missing", { status: 404 });
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
