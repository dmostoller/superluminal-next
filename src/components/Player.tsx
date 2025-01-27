"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Button } from "@/components/ui/button";
import { Play, Pause, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PlayerProps {
  url: string;
}

export function Player({ url }: PlayerProps) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!waveformRef.current) return;

    const container = waveformRef.current;
    // Clear previous waveform content
    if (container.firstChild) {
      container.innerHTML = "";
    }

    let isCleaningUp = false;
    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "rgba(127, 0, 255, 1)",
      progressColor: "rgba(100, 150, 255, 0.8)",
      cursorColor: "rgba(127, 0, 255, 1)",
      height: 40,
      normalize: true,
    });

    wavesurfer.current = ws;

    const handlers = {
      ready: () => !isCleaningUp && setIsLoading(false),
      loading: () => !isCleaningUp && setIsLoading(true),
      play: () => !isCleaningUp && setIsPlaying(true),
      pause: () => !isCleaningUp && setIsPlaying(false),
    };

    // Attach handlers
    Object.entries(handlers).forEach(([event, handler]) => {
      ws.on(event as "ready" | "loading" | "play" | "pause", handler);
    });

    ws.load(url);

    return () => {
      isCleaningUp = true;

      if (wavesurfer.current) {
        Object.entries(handlers).forEach(([event, handler]) => {
          ws.un(event as "ready" | "loading" | "play" | "pause", handler);
        });
        // Clear the DOM
        if (container) {
          container.innerHTML = "";
        }

        wavesurfer.current = null;
        wavesurfer.current = null;
      }
    };
  }, [url]);

  const togglePlay = () => {
    if (!wavesurfer.current) return;
    wavesurfer.current.playPause();
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          disabled={isLoading}
          onClick={togglePlay}
          className={cn("h-10 w-10", isLoading && "animate-pulse")}
        >
          {isLoading ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </Button>
        <div ref={waveformRef} className="flex-1 min-h-[40px] max-w-full" />
      </div>
    </div>
  );
}
