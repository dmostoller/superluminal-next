import { Metadata } from "next";
import { ReleaseList } from "@/components/ReleaseList";

export const metadata: Metadata = {
  title: "Kabayun | Music",
  description: "Music releases from Kabayun",
};

export default function KabayunPage() {
  return (
    <main className="container mx-auto min-h-screen py-10 px-4">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center border-b border-border pb-2">
          Kabayun Releases
        </h2>
        <ReleaseList artistFilter="kabayun" />
      </section>
    </main>
  );
}
