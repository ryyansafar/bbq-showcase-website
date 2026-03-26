"use client";

import { useEffect } from "react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div id="bookingModal" className={`modal ${isOpen ? "active" : ""}`}>
            <div className="modal__overlay" onClick={onClose}></div>
            <div className="modal__content">
                <button type="button" className="modal__close" onClick={onClose} aria-label="Close Modal">
                    <span className="material-symbols-outlined">close</span>
                </button>
                <h2 className="modal__title">BOOK A TABLE</h2>
                <p className="modal__subtitle">Reserve your spot at the smokehouse.</p>
                <form
                    className="booking-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onClose();
                        // Dispatch custom event for status modal
                        const event = new CustomEvent('openStatusModal', {
                            detail: {
                                title: "Request Received",
                                message: "We're updating our booking system. Your request has been noted!",
                                type: "success"
                            }
                        });
                        window.dispatchEvent(event);
                    }}
                >
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Date</label>
                            <input type="date" required />
                        </div>
                        <div className="form-group">
                            <label>Guests</label>
                            <select>
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5+ People</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" placeholder="+91 00000 00000" required />
                    </div>
                    <button type="submit" className="btn btn--primary width-full">
                        CONFIRM BOOKING
                    </button>
                </form>
            </div>
        </div>
    );
}
