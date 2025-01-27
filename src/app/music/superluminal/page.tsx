import { Metadata } from "next";
import { ReleaseList } from "@/components/ReleaseList";

export const metadata: Metadata = {
  title: "Superluminal | Music",
  description: "Music releases from Superluminal",
};

export default function SuperluminalPage() {
  return (
    <main className="container mx-auto min-h-screen py-10 px-4">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center border-b border-border pb-2">
          Superluminal Releases
        </h2>
        <ReleaseList artistFilter="superluminal" />
      </section>
    </main>
  );
}
