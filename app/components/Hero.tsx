"use client";

import { useEffect } from "react";
import Link from "next/link";

interface HeroProps {
    onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
    const handleOpenBooking = () => {
        window.dispatchEvent(new CustomEvent('openStatusModal', {
            detail: {
                title: "Reservations",
                message: "Online booking is currently paused. Please call us for reservations.",
                type: "info"
            }
        }));
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const heroBg = document.querySelector(".hero__bg") as HTMLElement;
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrollY * 0.5}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="hero__bg">
                <div className="hero__overlay"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero__video"
                    poster="/hero-poster.png"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                >
                    <source src="/videos/hero-background.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="hero__overlay"></div>

            <div className="hero__content">
                <div className="hero__subtitle animate-[fadeInUp_1s_ease-out]">EST. 2023 // CITY</div>
                <h1 className="hero__title animate-[fadeInUp_1s_ease-out_0.2s_both]">
                    THE <span className="text-gradient">SMOKEHOUSE</span>
                </h1>
                <p className="hero__description animate-[fadeInUp_1s_ease-out_0.4s_both]">
                    Authentic 16-hour slow-smoked BBQ using traditional post-oak methods.
                    Where fire, wood, and patience meet.
                </p>

                <div className="hero__actions animate-[fadeInUp_1s_ease-out_0.6s_both]">
                    <button className="btn btn--primary btn--lg" onClick={handleOpenBooking}>
                        BOOK A TABLE
                    </button>
                    <Link href="/menu" className="btn btn--outline btn--lg">
                        VIEW MENU
                    </Link>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-indicator__text">SCROLL</div>
                <div className="scroll-indicator__line"></div>
            </div>
        </section>
    );
}
