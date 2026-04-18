"use client";

import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  src: string;
  className?: string;
  flipped?: boolean;
  overlayOpacity?: number;
  bottomFade?: boolean;
}

export default function VideoBackground({
  src,
  className = "",
  flipped = false,
  overlayOpacity = 0.2,
  bottomFade = false,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: any = null;

    async function initHls() {
      const Hls = (await import("hls.js")).default;

      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: false });
        hls.loadSource(src);
        hls.attachMedia(video!);
      } else if (video!.canPlayType("application/vnd.apple.mpegurl")) {
        video!.src = src;
      }
    }

    initHls();

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        style={flipped ? { transform: "translate(-50%, -50%) scaleY(-1)" } : undefined}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      {bottomFade && (
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      )}
    </div>
  );
}
