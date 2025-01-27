import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const TrackResponseSchema = z.object({
  id: z.number(),
  title: z.string(),
  artist_names: z.string(),
  bpm: z.number().nullable(),
  audio: z.string(),
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const releaseId = parseInt(searchParams.get("releaseId") || "");

    if (isNaN(releaseId)) {
      return NextResponse.json(
        { error: "Invalid release ID" },
        { status: 400 },
      );
    }

    const tracks = await prisma.tracks.findMany({
      where: {
        release_id: releaseId,
      },
      select: {
        id: true,
        title: true,
        artist_names: true,
        bpm: true,
        audio: true,
      },
    });

    const validated = z.array(TrackResponseSchema).safeParse(tracks);

    if (!validated.success) {
      return NextResponse.json(
        { error: "Invalid track data" },
        { status: 500 },
      );
    }

    return NextResponse.json(validated.data);
  } catch (error) {
    console.error("[TRACKS_GET]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
