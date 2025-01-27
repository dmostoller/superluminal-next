export interface Event {
  id: number;
  name: string;
  venue: string;
  location: string;
  details: string;
  image_url: string;
  event_date: string;
  event_link: string | null;
}
