import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Superluminal",
  description:
    "Superluminal emerges from the creative symbiosis between Kabayun and his partner, muse, and wife Yasmin. Born on the dancefloor and steeped in the spirit of Goa, their collaboration transcends traditional boundaries.",
  openGraph: {
    title: "About Superluminal",
    description:
      "Discover the story behind Superluminal - a psychedelic trance project born from the creative fusion of Kabayun and Yasmin.",
    images: [
      {
        url: "/sl5.jpg",
        width: 1200,
        height: 630,
        alt: "Superluminal - Psychedelic Trance",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
