import { useState, useEffect } from "react";
import { SearchResult } from "@/types/search";
import { useDebounce } from "./useDebounce";

export interface SearchApiResponse {
  releases: SearchResult[];
  error?: string;
}

export function useSearch(query: string) {
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(debouncedQuery)}`,
        );
        const data: SearchApiResponse = await res.json();

        // Validate and transform data
        const validReleases = (data.releases || []).map((release) => ({
          ...release,
          id: Number(release.id),
          title: String(release.title),
          artist: String(release.artist),
          image: release.image ? String(release.image) : null,
          tracks: Array.isArray(release.tracks) ? release.tracks : [],
        }));

        // console.log("Transformed releases:", validReleases);
        setResults(validReleases);
      } catch (error) {
        console.error("Search error:", error);
        setError(error instanceof Error ? error.message : "Search failed");
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [debouncedQuery]);

  return {
    results: Array.isArray(results) ? results : [],
    isLoading,
    error,
  };
}
