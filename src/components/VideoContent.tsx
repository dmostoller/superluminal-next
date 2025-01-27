"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { VideoSkeleton } from "@/components/VideoSkeleton";

const Tutorials = dynamic(() => import("@/components/Tutorials"), {
  loading: () => <VideoSkeleton />,
});
const GigVideos = dynamic(() => import("@/components/GigVideos"), {
  loading: () => <VideoSkeleton />,
});

export default function VideoPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "music",
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Sync URL with active tab
    const currentTab = searchParams.get("tab");
    if (currentTab !== activeTab) {
      setActiveTab(currentTab || "music");
    }
  }, [searchParams, activeTab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="container mx-auto px-4 pt-8 mb-4">
      <Tabs
        defaultValue={activeTab}
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
        </TabsList>
        <TabsContent value="tutorials" className="min-h-screen">
          <Tutorials />
        </TabsContent>
        <TabsContent value="music" className="min-h-screen">
          <GigVideos />
        </TabsContent>
      </Tabs>
    </div>
  );
}
