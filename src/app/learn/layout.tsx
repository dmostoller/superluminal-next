import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn | Superluminal",
  description:
    "Dive into our courses, tutorials, and tips to elevate your music production skills.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
