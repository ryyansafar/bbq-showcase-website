"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { menuData } from "../data/menu";

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(menuData[0].title);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        // Update active category based on section visibility
                        if (entry.target.tagName === "SECTION") {
                            const id = entry.target.id;
                            // Find matching category title
                            const category = menuData.find(
                                (c) => c.title.toLowerCase().replace(/\s+/g, "-") === id
                            );
                            if (category) setActiveCategory(category.title);
                        }
                    }
                });
            },
            { threshold: 0.1, rootMargin: "-100px 0px -20% 0px" }
        );

        document.querySelectorAll(".reveal-item, section").forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToCategory = (title: string) => {
        const id = title.toLowerCase().replace(/\s+/g, "-");
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const handleBookTable = () => {
        // Check if the modal toggle function is available on window (or just use CSS class toggle as backup)
        // Since the Modal is in ClientLayout, we can assume it's handling the 'active' class
        const modal = document.querySelector('.modal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = "hidden";
        }
    };

    return (
        <div className="bg-[var(--color-bg-dark)] min-h-screen pb-96">
            {/* Hero Header */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 scale-110"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUTHVa82S1OVcL23YqIQ_LbdAEzNdVjTX8U-m7HWqu52GWytyrG_JrBlv6PWKiIRoVwzLMxHqnkOPpe0Hk1q4KFa0jsC9gP2YdXPdjINFXBPjincTcl0r6cUgK8Wk6ynTQGXNF3koptLZrThFvY0LmTZCa_15LBIK7yhwpDKGM0LuTs3jl26ZmSFh3krUKmfZMZgitv4XbekDcRCMiykpLWA3LYbei4Cz5FFfJRG2x5ou9K_JDKZsxpP-UkhImtG7njl1dQzeA-hg')",
                        filter: "blur(2px)",
                    }}
                ></div>
                {/* Gradient Fade for Smooth Transition */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-bg-dark)] to-transparent z-10 pointer-events-none"></div>

                <div className="relative z-20 text-center px-4">
                    <span className="block text-[var(--color-primary)] font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-sm mb-4 animate-[fadeInUp_1s_ease-out]">
                        Experience the Smoke
                    </span>
                    <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-display)] font-bold uppercase italic text-white animate-[fadeInUp_1s_ease-out_0.2s_both] py-4 leading-tight">
                        Our <span className="text-gradient text-clip-fix">Menu</span>
                    </h1>
                </div>
            </div>

            {/* Mobile Sticky Nav (Hidden on Desktop) */}
            <div className="lg:hidden sticky top-20 z-40 bg-[rgba(15,5,5,0.95)] backdrop-blur-md border-b border-[var(--color-border)] py-4 overflow-x-auto no-scrollbar">
                <div className="container mx-auto px-4 flex gap-8 min-w-max">
                    {menuData.map((category) => (
                        <button
                            key={category.title}
                            onClick={() => scrollToCategory(category.title)}
                            className={`text-sm font-[family-name:var(--font-display)] tracking-widest uppercase transition-colors whitespace-nowrap ${activeCategory === category.title
                                ? "text-[var(--color-primary)] font-bold border-b-2 border-[var(--color-primary)]"
                                : "text-[var(--color-text-muted)] hover:text-white"
                                }`}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 py-40 mb-40 flex gap-20">
                {/* Desktop Sidebar Navigation - Timeline Style */}
                <aside className="hidden lg:block w-1/4 sticky top-64 h-fit">
                    <nav className="relative flex flex-col gap-16">
                        {menuData.map((category) => (
                            <button
                                key={category.title}
                                onClick={() => scrollToCategory(category.title)}
                                className={`group flex items-center gap-4 text-left font-[family-name:var(--font-display)] tracking-widest uppercase transition-all duration-300 text-lg ${activeCategory === category.title
                                    ? "text-[var(--color-primary)] font-bold translate-x-2"
                                    : "text-[var(--color-text-muted)] hover:text-white hover:translate-x-1"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 flex-shrink-0 ${activeCategory === category.title
                                    ? "bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)] scale-125"
                                    : "bg-white/20 group-hover:bg-white"
                                    }`}></span>
                                {category.title}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Menu Content */}
                <div className="w-full lg:w-3/4 flex flex-col gap-32">
                    {menuData.map((category, catIndex) => (
                        <section
                            key={category.title}
                            id={category.title.toLowerCase().replace(/\s+/g, "-")}
                            className="scroll-mt-32"
                        >
                            <div
                                className={`transition-all duration-700 ${catIndex === 0 ? "" : "reveal-item opacity-0 translate-y-8"}`}
                                style={{ marginBottom: "5rem" }}
                            >
                                <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-display)] font-bold uppercase text-white mb-4">
                                    {category.title}
                                </h2>
                                <div className="w-24 h-1 bg-[var(--color-primary)]"></div>
                            </div>

                            <div className="flex flex-col gap-24">
                                {category.items.map((item, index) => {
                                    const hasImage = !!item.image;
                                    // Alternate layout for items with images
                                    const isEven = index % 2 === 0;

                                    if (hasImage) {
                                        return (
                                            <div
                                                key={item.id}
                                                className={`flex flex-col ${isEven ? "xl:flex-row" : "xl:flex-row-reverse"
                                                    } gap-8 xl:gap-16 items-center transition-all duration-700 ${catIndex === 0 && index === 0 ? "" : "reveal-item opacity-0 translate-y-8"}`}
                                            >
                                                {/* Image Side */}
                                                <div className="w-full xl:w-1/2">
                                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl group cursor-pointer">
                                                        <div className="absolute inset-0 border border-white/10 z-10 pointer-events-none"></div>
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10"></div>
                                                        <Image
                                                            src={item.image!}
                                                            alt={item.name}
                                                            fill
                                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                            priority={catIndex === 0 && index < 2} // Prioritize first couple of images
                                                        />
                                                        {item.popular && (
                                                            <div className="absolute top-4 left-4 z-20 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
                                                                Signature
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Content Side */}
                                                <div className="w-full xl:w-1/2 text-center xl:text-left">
                                                    <div className="flex flex-col xl:items-start items-center mb-6">
                                                        <h3 className="text-4xl font-[family-name:var(--font-display)] font-bold uppercase text-white mb-2 leading-tight">
                                                            {item.name}
                                                        </h3>
                                                        <span className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-primary)] drop-shadow-md">{item.price}</span>
                                                    </div>

                                                    <p className="text-xl text-[var(--color-text-muted)] font-light leading-relaxed mb-8">
                                                        {item.description}
                                                    </p>
                                                    <button
                                                        onClick={handleBookTable}
                                                        className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-bold hover:text-white transition-colors border-b border-[var(--color-primary)] pb-1"
                                                    >
                                                        Reserve this Dish inside
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    }

                                    // Standard Layout for items without images
                                    return (
                                        <div
                                            key={item.id}
                                            className={`flex flex-col md:flex-row justify-between items-start border-b border-white/5 pb-10 gap-4 transition-all duration-700 ${catIndex === 0 && index === 0 ? "" : "reveal-item opacity-0 translate-y-8"}`}
                                        >
                                            <div className="md:w-3/4 pr-4">
                                                <div className="flex items-center gap-4 mb-2">
                                                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold uppercase text-white">
                                                        {item.name}
                                                    </h3>
                                                    {item.popular && (
                                                        <span className="bg-white/10 text-white text-[0.6rem] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                                            Popular
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[var(--color-text-muted)] font-light">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="md:w-1/4 text-right mt-2 md:mt-0 pl-4">
                                                <span className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-primary)]">
                                                    {item.price}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {/* Floating CTA Removed as per user request */}

            <div className="h-[150px] w-full"></div>
        </div>
    );
}
