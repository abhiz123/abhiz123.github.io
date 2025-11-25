
"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isSpaceMode, setIsSpaceMode] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const starContainerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  // Handle Space Mode Toggle
  useEffect(() => {
    const body = document.body;
    if (isSpaceMode) {
      body.classList.add("space-active");
      audioRef.current?.play().catch((e) => console.log("Audio play failed:", e));
    } else {
      body.classList.remove("space-active");
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isSpaceMode]);

  // Handle Stars and Shooting Stars
  useEffect(() => {
    if (!isSpaceMode || !starContainerRef.current) {
      // Cleanup stars if not in space mode
      if (starContainerRef.current) {
        starContainerRef.current.innerHTML = "";
      }
      return;
    }

    const container = starContainerRef.current;
    const stars: HTMLDivElement[] = [];

    // Create Stars
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star";

      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 3 + 2; // 2-5s
      const maxOpacity = Math.random() * 0.7 + 0.3;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.setProperty("--duration", `${duration}s`);
      star.style.setProperty("--max-opacity", maxOpacity.toString());
      star.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(star);
      stars.push(star);
    }

    // Shooting Stars
    const createShootingStar = () => {
      if (!container) return;
      const star = document.createElement("div");
      star.className = "shooting-star";

      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * (window.innerHeight / 2);

      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      star.style.width = `${50 + Math.random() * 100}px`;

      container.appendChild(star);

      const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
      const distance = 300 + Math.random() * 300;
      const duration = 1000 + Math.random() * 1000;

      const endX = Math.cos(angle) * distance;
      const endY = Math.sin(angle) * distance;

      const animation = star.animate(
        [
          { transform: "translate(0, 0) rotate(45deg)", opacity: 0 },
          {
            transform: `translate(${endX * 0.2}px, ${endY * 0.2}px) rotate(45deg)`,
            opacity: 1,
            offset: 0.1,
          },
          {
            transform: `translate(${endX}px, ${endY}px) rotate(45deg)`,
            opacity: 0,
          },
        ],
        {
          duration: duration,
          easing: "ease-out",
        }
      );

      animation.onfinish = () => star.remove();
    };

    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        createShootingStar();
      }
    }, 1000);

    return () => {
      clearInterval(shootingStarInterval);
      if (container) container.innerHTML = "";
    };
  }, [isSpaceMode]);

  // Handle Moon Animation
  useEffect(() => {
    if (!isSpaceMode || !moonRef.current) return;

    const animateMoon = () => {
      if (!moonRef.current) return;
      const time = Date.now() * 0.0005;
      const x = Math.cos(time) * 45 + 50;
      const y = Math.sin(time) * 10 + 20;

      moonRef.current.style.left = `${x}%`;
      moonRef.current.style.top = `${y}%`;

      requestRef.current = requestAnimationFrame(animateMoon);
    };

    requestRef.current = requestAnimationFrame(animateMoon);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isSpaceMode]);

  return (
    <main>
      <div className="container">
        <h1>Abhiram Nair</h1>
        <p>Hi! Tech, dance, writing, and table tennis are the core of my world.</p>
        <p>
          Currently playing around with Attention mechanisms and Neural Networks to
          find more efficient compute.
        </p>
        <p>
          Hit me up if you want to chat about AI, philosophy, geo-politics, sports
          and anything under the sun!
        </p>

        <div className="links">
          <a href="https://www.linkedin.com/in/abhiz123" target="_blank">
            LinkedIn
          </a>
          <a href="https://truemid.substack.com" target="_blank">
            Substack
          </a>
          <a href="https://twitter.com/0_yes_abhi" target="_blank">
            X
          </a>
          <button id="space-mode" onClick={() => setIsSpaceMode(!isSpaceMode)}>
            {isSpaceMode ? "Light Mode" : "Space Mode"}
          </button>
        </div>
      </div>

      <div
        ref={starContainerRef}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
      />

      <div
        ref={moonRef}
        className="moon"
        style={{
          display: isSpaceMode ? "block" : "none",
          opacity: isSpaceMode ? 1 : 0,
        }}
      />

      <audio ref={audioRef} loop>
        <source src="/tough-cut.mp3" type="audio/mpeg" />
      </audio>
    </main>
  );
}
