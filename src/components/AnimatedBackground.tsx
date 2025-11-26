"use client";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-[-2] overflow-hidden bg-white/20">
            <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 animate-rotate opacity-80 blur-[50px] bg-[conic-gradient(from_0deg,#ff9aa2,#ffb7b2,#ffdac1,#e2f0cb,#a2e4ff,#c9afff,#ffb7b2,#ff9aa2)]" />
            <div className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 animate-rotate-reverse opacity-60 blur-[50px] bg-[conic-gradient(from_0deg,#ff9aa2,#ffb7b2,#ffdac1,#e2f0cb,#a2e4ff,#c9afff,#ffb7b2,#ff9aa2)]" />
            <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(255,255,255,0.2),rgba(0,0,0,0.1)]" />
        </div>
    );
}
