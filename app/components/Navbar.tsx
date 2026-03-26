"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
    onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
                <div className="nav__container">
                    <Link href="/" className="nav__logo">
                        <svg
                            className="nav__logo-icon"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                opacity="0.8"
                            ></path>
                            <path
                                clipRule="evenodd"
                                d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                                fill="currentColor"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                        <div className="nav__logo-text">
                            <span className="nav__logo-title">THE</span>
                            <span className="nav__logo-subtitle">SMOKEHOUSE</span>
                        </div>
                    </Link>

                    <div className="nav__links">
                        <Link href="/" className={`nav__link ${pathname === "/" ? "active" : ""}`}>
                            HOME
                        </Link>
                        <Link href="/menu" className={`nav__link ${pathname === "/menu" ? "active" : ""}`}>
                            MENU
                        </Link>
                        <button
                            className="nav__link"
                            onClick={() => {
                                window.dispatchEvent(new CustomEvent('openStatusModal', {
                                    detail: {
                                        title: "Catering Services",
                                        message: "Our catering packages are being updated. Check back soon!",
                                        type: "info"
                                    }
                                }));
                            }}
                        >
                            CATERING
                        </button>
                        <Link href="/about" className={`nav__link ${pathname === "/about" ? "active" : ""}`}>
                            ABOUT
                        </Link>
                    </div>

                    <button
                        className="btn btn--primary nav__cta"
                        onClick={onOpenBooking}
                    >
                        BOOK A TABLE
                    </button>

                    <button
                        className="nav__toggle"
                        aria-label="Toggle Menu"
                        onClick={toggleMenu}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
                <button
                    className="mobile-menu__close"
                    aria-label="Close Menu"
                    onClick={toggleMenu}
                >
                    <span className="material-symbols-outlined">close</span>
                </button>
                <div className="mobile-menu__links">
                    <Link href="/" className="mobile-menu__link" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="/menu" className="mobile-menu__link" onClick={toggleMenu}>
                        Menu
                    </Link>
                    <Link
                        href="/#experience"
                        className="mobile-menu__link"
                        onClick={toggleMenu}
                    >
                        Catering
                    </Link>
                    <Link href="/about" className="mobile-menu__link" onClick={toggleMenu}>
                        About
                    </Link>
                </div>
            </div>
        </>
    );
}
