import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ReleaseLoading() {
  return (
    <div className="w-full max-w-7xl space-y-6">
      <Card className="bg-card/60 backdrop-blur">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Image Skeleton */}
          <div className="w-full">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
              <Skeleton className="w-full h-full" />
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-6">
            <div>
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-6 w-1/2" />
            </div>

            <div className="space-y-4">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-24 w-full" />

              <div className="flex gap-2">
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-24" />
              </div>
            </div>
          </div>

          {/* Tracklist Skeleton */}
          <div className="col-span-full w-full max-w-4xl mx-auto px-4">
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
