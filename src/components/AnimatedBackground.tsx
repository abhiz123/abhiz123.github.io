"use client";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-[-2] overflow-hidden bg-[#fefae0]">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#FF1493]/8 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#E85D04]/8 blur-[120px]" />
            <div className="absolute top-[40%] left-[50%] w-[40%] h-[40%] rounded-full bg-[#008080]/6 blur-[120px]" />
        </div>
    );
}
