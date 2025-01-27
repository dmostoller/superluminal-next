"use client";

import { motion } from "framer-motion";
import { useRelease } from "@/hooks/useRelease";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReleaseLoading from "./release-loading";
import TrackList from "./TrackList";
import { ShareMenu } from "@/components/ShareMenu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ReleaseInfo({ id }: { id: string }) {
  const { data: release, isLoading, error } = useRelease(id);

  const origin =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  const shareUrl = `${origin}/music/${id}`;

  if (isLoading) return <ReleaseLoading />;
  if (error) {
    return (
      <Card className="w-full max-w-6xl p-6">
        <div className="text-red-500 text-center">
          {error instanceof Error ? error.message : "Failed to load release"}
        </div>
      </Card>
    );
  }
  if (!release) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-7xl space-y-6"
    >
      <Card className="bg-card/60 backdrop-blur">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-2 md:p-8">
          {/* Image Column */}
          <div className="w-full">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src={release.image ?? "/placeholder-image.jpg"}
                alt={release.title ?? "Release cover"}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{release.title}</h1>
              <h2 className="text-xl text-muted-foreground">
                {release.artist}
              </h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-sm font-medium text-foreground">
                  {release.record_label}
                </div>
                <div className="text-sm text-muted-foreground/80">
                  Release Date: {release.date_released}
                </div>
              </div>

              <p className="text-md text-muted-foreground">
                {release.description}
              </p>

              <div className="flex gap-2">
                <ShareMenu
                  url={shareUrl}
                  title={`${release.title} by ${release.artist}`}
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Buy
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56">
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={release.buy_link ?? "#"} target="_blank">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Buy from label
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://kabayun.bandcamp.com/"
                          target="_blank"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Buy direct from artist
                        </Link>
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <div className="col-span-full w-full max-w-7xl mx-auto px-0 sm:px-4">
            <TrackList releaseId={id} />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
