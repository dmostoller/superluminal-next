import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container max-w-2xl">
        <Card className="bg-black/50 backdrop-blur-sm">
          <CardContent className="p-6 space-y-6">
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
            <Skeleton className="h-24 w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
