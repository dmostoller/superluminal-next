import { useQuery } from "@tanstack/react-query";
import { Track } from "@/types/track";

async function fetchTracks(releaseId: string): Promise<Track[]> {
  const response = await fetch(`/api/tracks?releaseId=${releaseId}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to fetch tracks");
  }

  return response.json();
}

export function useTracks(releaseId: string) {
  return useQuery({
    queryKey: ["tracks", releaseId],
    queryFn: () => fetchTracks(releaseId),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
}
