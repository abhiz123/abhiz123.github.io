"use client";

import { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
import { useLoadingState } from "./LoadingWrapper";
import TeamMemberCard from "./ui/team-member-card";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const ROLES = [
  "Developer",
  "Writer",
  "Dancer",
  "Explorer",
  "Builder",
  "Designer",
  "Storyteller",
  "Systems Thinker",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const isLoading = useLoadingState();
  const currentRole = ROLES[roleIndex];

  // Cycle roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <VideoBackground
        src={HLS_SRC}
        overlayOpacity={0.2}
        bottomFade
      />

      {/* Hero content — TeamMemberCard inside the hero */}
      <div
        className={`relative z-10 w-full max-w-[1200px] mx-auto px-6 transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <TeamMemberCard
          position="left"
          jobPosition={currentRole}
          firstName="Abhiram"
          lastName="Nair"
          imageUrl="/images/abhiram-profile.png"
          subtitle="Software • Design • AI • Writing"
          description="Designing seamless digital interactions by focusing on the unique nuances which bring systems to life."
        />
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-xs text-muted uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute w-full h-3 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
