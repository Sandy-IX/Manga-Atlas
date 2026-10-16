import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = await fetch(`https://api.mangadex.org/manga${req.nextUrl.search}`, {
    headers: { "User-Agent": "Yomiro/1.0" },
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}