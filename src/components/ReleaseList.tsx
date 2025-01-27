"use client";

import { ReleaseCard } from "./ReleaseCard";
import { useReleases } from "@/hooks/useReleases";
import { motion } from "framer-motion";
import { Release } from "@/types/release";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface ReleaseListProps {
  artistFilter: string;
}

export function ReleaseList({ artistFilter }: ReleaseListProps) {
  const { ref, inView } = useInView();
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useReleases(artistFilter);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (error) {
    return <div className="text-red-500">Error loading releases</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading ? (
        [...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ReleaseCard isLoading />
          </motion.div>
        ))
      ) : (
        <>
          {data?.pages.map((page) =>
            page.releases.map((release: Release, index: number) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ReleaseCard release={release} />
              </motion.div>
            )),
          )}
          <div ref={ref} className="col-span-full h-10">
            {isFetchingNextPage && (
              <div className="text-center">Loading more...</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
