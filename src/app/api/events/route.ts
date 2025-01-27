import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";

export async function GET() {
  try {
    const events = await prisma.events.findMany({
      orderBy: {
        event_date: "desc",
      },
    });

    if (!events) {
      return NextResponse.json({ error: "No events found" }, { status: 404 });
    }

    return NextResponse.json(events);
  } catch (error) {
    if (error instanceof PrismaClientInitializationError) {
      console.error("Database connection failed:", error);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 503 },
      );
    }

    console.error("Failed to fetch events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 },
    );
  }
}
