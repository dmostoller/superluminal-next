"use client";

import { EventCard } from "./EventCard";
import { useEvents } from "@/hooks/useEvents";
import { motion } from "framer-motion";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

interface EventsListProps {
  type: "upcoming" | "past";
}

export function EventsList({ type }: EventsListProps) {
  const { data: events, isLoading, error } = useEvents();

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!events) return null;

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);

  const filteredEvents = events.filter((event) => {
    const isPast = Date.parse(event.event_date) < currentDate.getTime();
    return type === "past" ? isPast : !isPast;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (type === "past") {
      return Date.parse(b.event_date) - Date.parse(a.event_date);
    }
    return Date.parse(a.event_date) - Date.parse(b.event_date);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading
        ? [...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <EventCard isLoading />
            </motion.div>
          ))
        : sortedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
    </div>
  );
}
