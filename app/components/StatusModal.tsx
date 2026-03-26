"use client";

import { useEffect } from "react";

interface StatusModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message: string;
    type?: "info" | "success" | "warning";
}

export default function StatusModal({ isOpen, onClose, title = "Update", message, type = "info" }: StatusModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal active" style={{ zIndex: 3000 }}>
            <div className="modal__overlay" onClick={onClose}></div>
            <div className="modal__content" style={{ maxWidth: '400px', textAlign: 'center' }}>
                <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
                    <span className="material-symbols-outlined">close</span>
                </button>
                <div style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '3rem' }}>
                        {type === 'success' ? 'check_circle' : 'info'}
                    </span>
                </div>
                <h3 className="modal__title" style={{ fontSize: '1.5rem' }}>{title}</h3>
                <p className="modal__subtitle" style={{ marginBottom: '1.5rem' }}>{message}</p>
                <button className="btn btn--primary width-full" onClick={onClose}>
                    GOT IT
                </button>
            </div>
        </div>
    );
}
