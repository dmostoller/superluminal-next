"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Player } from "@/components/Player";
import { useTracks } from "@/hooks/useTracks";
import { Skeleton } from "@/components/ui/skeleton";

export default function TrackList({ releaseId }: { releaseId: string }) {
  const { data: tracks, isLoading, error } = useTracks(releaseId);

  if (isLoading) {
    return (
      <Card className="w-full max-w-3xl mx-auto border-none">
        <CardContent className="p-6">
          <h3 className="mb-2 text-lg font-semibold">Track(s)</h3>
          <div className="border-b my-4" />
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-lg p-4">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-3xl mx-auto border-none">
        <CardContent className="p-6 text-red-500 text-center">
          Failed to load tracks
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-7xl mx-auto border-none">
      <CardContent className="py-2 sm:p-6">
        <h3 className="mb-2 text-lg font-semibold">Track(s)</h3>
        <div className="border-b my-4" />
        <div className="space-y-4">
          {tracks?.map((track) => (
            <div key={track.id} className="rounded-lg border p-2 sm:p-4">
              <h4 className="font-medium">{track.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                {track.artist_names} • {track.bpm} BPM
              </p>
              <Player url={track.audio} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
