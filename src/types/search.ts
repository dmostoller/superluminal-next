export interface SearchResult {
  id: number;
  title: string;
  artist: string;
  image: string | null;
  tracks?: {
    id: number;
    title: string;
  }[];
}
