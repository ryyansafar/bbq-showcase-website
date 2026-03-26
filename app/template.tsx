"use client";

import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Scroll to top on page change
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-[fadeIn_0.5s_ease-out]">
            {children}
        </div>
    );
}
