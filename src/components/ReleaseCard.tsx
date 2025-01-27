import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Release } from "@/types/release";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ReleaseCardProps {
  release?: Release;
  isLoading?: boolean;
}

export function ReleaseCard({ release, isLoading }: ReleaseCardProps) {
  if (isLoading) {
    return (
      <Card>
        <div className="relative aspect-square">
          <Skeleton className="h-full w-full rounded-t-lg" />
        </div>
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/4 mt-2" />
        </CardHeader>
      </Card>
    );
  }

  if (!release) return null;

  return (
    <Link href={`/music/${release.id}`} className="group block">
      <Card className="relative overflow-hidden transition-colors hover:bg-accent">
        <div className="relative aspect-square">
          {release.image && (
            <>
              <div className="absolute inset-0 z-10 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
              <Image
                src={release.image}
                alt={release.title || "Release cover"}
                fill
                sizes="800px"
                className="object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Button variant="secondary" size="lg" className="gap-2">
                  Go to Release <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
        <CardHeader>
          <h3 className="text-lg font-semibold">{release.title}</h3>
          <p className="text-sm text-muted-foreground">{release.artist}</p>
          {release.record_label && (
            <p className="text-sm text-muted-foreground">
              {release.record_label}
            </p>
          )}
        </CardHeader>
        <CardContent>
          {release.date_released && (
            <p className="text-sm text-muted-foreground">
              {release.date_released}
            </p>
          )}
          {release.buy_link && (
            <span className="inline-flex items-center mt-4 text-sm hover:underline">
              Buy/Stream <ExternalLink className="ml-2 h-4 w-4" />
            </span>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
