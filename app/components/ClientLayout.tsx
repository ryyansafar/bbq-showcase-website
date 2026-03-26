"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingModal from "./BookingModal";
import StatusModal from "./StatusModal";


export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [statusModal, setStatusModal] = useState({
        isOpen: false,
        title: "",
        message: "",
        type: "info" as "info" | "success" | "warning"
    });

    useEffect(() => {
        // Add 'no-js' class handling
        document.documentElement.classList.remove("no-js");

        // Listen for custom event to open booking modal
        const handleOpenBooking = () => setIsBookingOpen(true);
        window.addEventListener('openBookingModal', handleOpenBooking);

        // Listen for status modal
        const handleStatusModal = (e: CustomEvent) => {
            setStatusModal({
                isOpen: true,
                title: e.detail.title || "Feature Update",
                message: e.detail.message || "This feature is coming soon!",
                type: e.detail.type || "info"
            });
        };
        window.addEventListener('openStatusModal', handleStatusModal as EventListener);

        // Check for manual trigger
        const checkForTrigger = setInterval(() => {
            const trigger = document.getElementById('bookingModalTrigger');
            if (trigger && window.getComputedStyle(trigger).display !== 'none') {
                // specific logic
            }
        }, 500);

        return () => {
            window.removeEventListener('openBookingModal', handleOpenBooking);
            window.removeEventListener('openStatusModal', handleStatusModal as EventListener);
            clearInterval(checkForTrigger);
        };
    }, []);

    // ... (reveal observer logic stays same)

    return (
        <>

            <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
            <main>{children}</main>
            <Footer />
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
            />
            <StatusModal
                isOpen={statusModal.isOpen}
                onClose={() => setStatusModal(prev => ({ ...prev, isOpen: false }))}
                title={statusModal.title}
                message={statusModal.message}
                type={statusModal.type}
            />
        </>
    );
}
