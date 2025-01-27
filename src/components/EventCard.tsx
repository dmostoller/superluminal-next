import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Event } from "@/types/event";
import { ExternalLink } from "lucide-react";

interface EventCardProps {
  event?: Event;
  isLoading?: boolean;
}

export function EventCard({ event, isLoading }: EventCardProps) {
  if (isLoading) {
    return (
      <Card>
        <div className="relative aspect-video">
          <Skeleton className="h-full w-full rounded-t-lg" />
        </div>
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/4 mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-1/3 mb-2" />
          <Skeleton className="h-4 w-full mt-4" />
        </CardContent>
      </Card>
    );
  }

  if (!event) return null;

  const { name, venue, location, details, image_url, event_date, event_link } =
    event;

  return (
    <Card className="hover:bg-accent transition-colors group relative">
      {event_link && (
        <a
          href={event_link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full 
                     opacity-0 group-hover:opacity-100 transition-opacity
                     hover:bg-black/70"
        >
          <ExternalLink className="h-5 w-5 text-white" />
        </a>
      )}
      <div className="relative aspect-video">
        <Image
          src={image_url}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{event_date}</p>
      </CardHeader>
      <CardContent>
        <p className="font-medium">{venue}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
        <p className="mt-2 text-sm line-clamp-2">{details}</p>
      </CardContent>
    </Card>
  );
}
