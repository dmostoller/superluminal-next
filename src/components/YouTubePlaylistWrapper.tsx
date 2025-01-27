"use client";

import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

interface YouTubePlaylistWrapperProps {
  playlistId: string;
  apiKey: string;
}

export function YouTubePlaylistWrapper({
  playlistId,
  apiKey,
}: YouTubePlaylistWrapperProps) {
  return <YouTubePlaylist apiKey={apiKey} playlistId={playlistId} />;
}
