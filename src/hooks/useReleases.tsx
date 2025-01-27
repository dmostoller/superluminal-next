import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import { Release } from "@/types/release";

interface PageData {
  releases: Release[];
  nextCursor?: number;
}

export function useReleases(artistFilter?: string) {
  return useInfiniteQuery<
    PageData,
    Error,
    InfiniteData<PageData>,
    ["releases", string | undefined],
    number
  >({
    queryKey: ["releases", artistFilter],
    initialPageParam: 0,
    queryFn: async ({ pageParam }) => {
      const res = await fetch(
        `/api/releases?${new URLSearchParams({
          artist: artistFilter || "",
          cursor: pageParam.toString(),
          limit: "9",
        })}`,
      );
      if (!res.ok) throw new Error("Failed to fetch releases");
      return res.json();
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}
