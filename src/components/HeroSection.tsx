"use client";

import { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
import { useLoadingState } from "./LoadingWrapper";
import TeamMemberCard from "./ui/team-member-card";

const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4";
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
  const roleLabel = /^[aeiou]/i.test(currentRole)
    ? `An ${currentRole}`
    : `A ${currentRole}`;

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
        src={HERO_VIDEO_SRC}
        overlayOpacity={0.34}
      />

      {/* Hero content — TeamMemberCard inside the hero */}
      <div
        className={`relative z-10 w-full max-w-[1280px] mx-auto px-6 transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <TeamMemberCard
          position="left"
          jobPosition={roleLabel}
          firstName="Abhiram"
          lastName="Nair"
          imageUrl="/images/abhiram-profile.png"
          subtitle="Software • Design • AI • Writing"
          description="I design and build cinematic digital experiences that make complex systems feel intuitive, human, and alive."
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
