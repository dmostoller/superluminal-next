import { Metadata } from "next";
import { Suspense } from "react";
import ReleaseInfo from "@/components/ReleaseInfo";
import ReleaseLoading from "@/components/release-loading";
import { notFound } from "next/navigation";
import { Release } from "@/types/release";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    const resolvedParams = await Promise.resolve(params);
    const id = resolvedParams.id;
    console.log("Production URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
    const url = new URL(`/api/releases/${id}`, API_BASE_URL).toString();
    console.log("Fetching from URL:", url);

    const res = await fetch(url, {
      next: { revalidate: 0 },
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    if (!res.ok) {
      console.error(
        `Failed to fetch release metadata: ${res.status} ${res.statusText}`,
      );
      console.error("Response:", await res.text());
      throw new Error(`Failed to fetch release metadata: ${res.status}`);
    }

    const release: Release = await res.json();

    if (!release) {
      console.error("No release data received for metadata");
      throw new Error("No release data received for metadata");
    }

    const metadata: Metadata = {
      metadataBase: new URL(API_BASE_URL),
      title: `${release.title} by ${release.artist}`,
      description: release.description || undefined,
      openGraph: {
        title: `${release.title} by ${release.artist}`,
        description: release.description || undefined,
        images: release.image
          ? [
              {
                url: new URL(release.image, API_BASE_URL).toString(),
                width: 1200,
                height: 630,
                alt: `${release.title} by ${release.artist}`,
              },
            ]
          : [],
        type: "music.album",
        siteName: "Superluminal Music",
      },
      twitter: {
        card: "summary_large_image",
        title: `${release.title} by ${release.artist}`,
        description: release.description || undefined,
        images: release.image
          ? [new URL(release.image, API_BASE_URL).toString()]
          : [],
        creator: "@superluminalpsy",
      },
    };

    return metadata;
  } catch (error) {
    console.error("Metadata generation error in production:", error);
    throw error;
  }
}

export default async function ReleasePage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const id = Number(resolvedParams.id);

  if (!id) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center">
        <Suspense fallback={<ReleaseLoading />}>
          <ReleaseInfo id={resolvedParams.id} />
        </Suspense>
      </div>
    </div>
  );
}
