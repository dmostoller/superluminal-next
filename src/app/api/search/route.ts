import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query) {
      console.log("No query provided.");
      return NextResponse.json({ releases: [] });
    }

    console.log(`Searching for query: ${query}`);

    const releases = await prisma.releases.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { artist: { contains: query, mode: "insensitive" } },
          {
            tracks: {
              some: {
                title: { contains: query, mode: "insensitive" },
              },
            },
          },
        ],
      },
      include: {
        tracks: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      take: 5,
    });

    console.log(`Found ${releases.length} releases.`);

    const mappedReleases = releases.map((release) => ({
      id: release.id,
      title: release.title,
      artist: release.artist,
      image: release.image || null, // Ensure image is nullable
      tracks: release.tracks,
    }));

    console.log("Mapped Releases:", mappedReleases);

    return NextResponse.json({ releases: mappedReleases });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { releases: [], error: "Failed to perform search" },
      { status: 500 },
    );
  }
}
