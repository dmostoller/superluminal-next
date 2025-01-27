import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Superluminal",
  description:
    "Get in touch with Superluminal for bookings, collaborations, or inquiries. Connect with us for your next psychedelic trance event.",
  openGraph: {
    title: "Contact Superluminal",
    description:
      "Get in touch with Superluminal for bookings, collaborations, or inquiries.",
    images: [
      {
        url: "/superluminal2.png",
        width: 1200,
        height: 630,
        alt: "Contact Superluminal",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
