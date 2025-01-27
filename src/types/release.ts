export interface Release {
  id: number;
  title: string | null;
  artist: string | null;
  description: string | null;
  record_label: string | null;
  date_released: string | null;
  image: string | null;
  buy_link: string | null;
}

export interface Track {
  id: number;
  title: string;
  artist_names: string;
  bpm: number;
  audio: string;
}
