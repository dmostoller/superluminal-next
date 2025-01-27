import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video | Superluminal",
  description:
    "Watch live performances, music videos, and free tutorials from Superluminal. Dive into psychedelic trance production techniques and dance floor moments.",
};

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
