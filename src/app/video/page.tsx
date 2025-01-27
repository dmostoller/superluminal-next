"use client";

import { Suspense } from "react";
import { VideoSkeleton } from "@/components/VideoSkeleton";
import dynamic from "next/dynamic";

const VideoContent = dynamic(() => import("@/components/VideoContent"), {
  loading: () => <VideoSkeleton />,
});

export default function VideoPage() {
  return (
    <div className="container mx-auto px-4 mb-4">
      <Suspense fallback={<VideoSkeleton />}>
        <VideoContent />
      </Suspense>
    </div>
  );
}
