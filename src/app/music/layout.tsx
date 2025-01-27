import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music | Superluminal",
  description: "Music releases from Superluminal and Kabayun",
};

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
