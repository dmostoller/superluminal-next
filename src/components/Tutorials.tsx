"use client";

import { Card, CardContent } from "@/components/ui/card";
import { YouTubePlaylistWrapper } from "./YouTubePlaylistWrapper";

export default function Tutorials() {
  return (
    <Card>
      <CardContent className="p-6">
        <YouTubePlaylistWrapper
          apiKey={process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || ""}
          playlistId="PLkiLSmC1caWur5fzZycc6Sh65tYb3OKhS"
        />
      </CardContent>
    </Card>
  );
}
