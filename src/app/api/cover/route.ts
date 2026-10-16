import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") || "";
  const file = req.nextUrl.searchParams.get("file") || "";


  if (!/^[a-f0-9-]+$/i.test(id) || !/^[\w.-]+$/.test(file)) {
    return new Response("Bad request", { status: 400 });
  }

  const res = await fetch(
    `https://uploads.mangadex.org/covers/${id}/${file}.512.jpg`,
    { headers: { "User-Agent": "MangaAtlas/1.0" } }
  );

  if (!res.ok) return new Response("Not found", { status: 404 });

  return new Response(res.body, {
    headers: {
      "Content-Type": res.headers.get("Content-Type") || "image/jpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}