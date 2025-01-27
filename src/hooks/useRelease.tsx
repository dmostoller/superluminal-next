import { useQuery } from "@tanstack/react-query";
import { Release } from "@/types/release";

async function fetchRelease(id: string): Promise<Release> {
  const response = await fetch(`/api/releases/${id}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to fetch release");
  }

  return response.json();
}

export function useRelease(id: string) {
  return useQuery({
    queryKey: ["release", id],
    queryFn: () => fetchRelease(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
