import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 9;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const artist = searchParams.get("artist");
  const cursor = parseInt(searchParams.get("cursor") || "0");

  try {
    const releases = await prisma.releases.findMany({
      where: artist
        ? {
            artist: {
              contains: artist,
              mode: "insensitive",
            },
          }
        : undefined,
      orderBy: {
        date_released: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: cursor,
    });

    const nextCursor =
      releases.length === ITEMS_PER_PAGE ? cursor + ITEMS_PER_PAGE : undefined;

    return NextResponse.json({
      releases,
      nextCursor,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch releases" + error },
      { status: 500 },
    );
  }
}
