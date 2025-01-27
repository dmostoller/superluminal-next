import { EventsList } from "@/components/EventsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Superluminal",
  description: "Upcoming and past events from Superluminal",
};

export default function GigsPage() {
  return (
    <main className="container mx-auto min-h-screen py-10 px-4">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center border-b border-border pb-2">
          Upcoming Shows
        </h2>
        <EventsList type="upcoming" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center border-b border-border pb-2">
          Past Shows
        </h2>
        <EventsList type="past" />
      </section>
    </main>
  );
}
