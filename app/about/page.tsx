
import React from "react";

export default function AboutPage() {
    return (
        <div className="bg-[var(--color-bg-dark)] min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Darker overlay for readability */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-50 scale-110"
                >
                    <source src="/videos/about-background-placeholder.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-20 max-w-4xl animate-[fadeInUp_1s_ease-out]">
                <span className="block text-[var(--color-primary)] font-[family-name:var(--font-display)] tracking-[0.5em] uppercase text-sm md:text-base mb-10 font-bold">
                    Est. 2023
                </span>
                <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-display)] font-bold uppercase text-white mb-10 leading-[0.9]">
                    The <span className="text-gradient">Story</span>
                </h1>
                <div className="w-32 h-1 bg-[var(--color-primary)] mx-auto"></div>

                {/* Explicit Spacer */}
                <div className="h-32 md:h-5 w-full"></div>

                <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
                    <p className="text-2xl md:text-3xl text-white font-[family-name:var(--font-display)] font-light leading-relaxed tracking-wide uppercase">
                        Content available <br />
                        <span className="text-[var(--color-primary)] font-bold">upon request</span>
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4 opacity-70">
                        <div className="h-px w-12 bg-white/40"></div>
                        <span className="text-xs uppercase tracking-[0.3em] text-white/60">Demo Placeholder</span>
                        <div className="h-px w-12 bg-white/40"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
