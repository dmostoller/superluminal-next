import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const ReleaseResponseSchema = z.object({
  id: z.number(),
  title: z.string(),
  artist: z.string(),
  image: z.string(),
  description: z.string().nullable(),
  record_label: z.string(),
  date_released: z.string(),
  buy_link: z.string(),
});

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const resolvedParams = await Promise.resolve(params);
    const releaseId = parseInt(resolvedParams.id);
    if (isNaN(releaseId)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const release = await prisma.releases.findUnique({
      where: { id: releaseId },
      select: {
        id: true,
        title: true,
        artist: true,
        image: true,
        description: true,
        record_label: true,
        date_released: true,
        buy_link: true,
      },
    });

    if (!release) {
      return NextResponse.json({ error: "Release not found" }, { status: 404 });
    }

    const validated = ReleaseResponseSchema.safeParse(release);

    if (!validated.success) {
      return NextResponse.json(
        { error: "Invalid release data", details: validated.error },
        { status: 500 },
      );
    }

    return NextResponse.json(validated.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" + error },
      { status: 500 },
    );
  }
}
