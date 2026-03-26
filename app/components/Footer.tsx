"use client";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__col footer__brand">
                        <div className="footer__logo">
                            <svg
                                className="footer__logo-icon"
                                viewBox="0 0 48 48"
                                role="img"
                                aria-label="The Smokehouse Logo"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                ></path>
                                <path
                                    clipRule="evenodd"
                                    d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                            <span className="footer__logo-text">THE SMOKEHOUSE</span>
                        </div>
                        <p className="footer__desc">
                            Redefining the BBQ experience through craftsmanship, quality
                            ingredients, and the slow-food movement.
                        </p>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__title">EXPLORE</h4>
                        <ul className="footer__links">
                            <li>
                                <a href="#">Lunch Menu</a>
                            </li>
                            <li>
                                <a href="#">Dinner Menu</a>
                            </li>
                            <li>
                                <a href="#">Pitmaster Lessons</a>
                            </li>
                            <li>
                                <a href="#">Gift Cards</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__title">VISIT US</h4>
                        <address className="footer__address">
                            {/* Marottichuvadu, Edappally<br />
                            Ernakulam, Kerala 682024<br />
                            India */}
                            Street Name, City Center<br />
                            City, State 12345<br />
                            Country
                        </address>
                        <p className="footer__hours">
                            Mon - Thu: 5:00 PM - 11:00 PM<br />
                            Fri - Sun: 12:00 PM - 11:00 PM
                        </p>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__title">STAY UPDATED</h4>
                        <form
                            className="footer__form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                window.dispatchEvent(new CustomEvent('openStatusModal', {
                                    detail: {
                                        title: "Newsletter",
                                        message: "Thanks for subscribing! You'll hear from us soon.",
                                        type: "success"
                                    }
                                }));
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="footer__input"
                            />
                            <button
                                type="submit"
                                className="footer__btn"
                                aria-label="Subscribe"
                            >
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © 2024 The Smokehouse. All rights reserved.
                    </p>
                    <div className="footer__socials">
                        <a href="#" aria-label="Share">
                            <span className="material-symbols-outlined">share</span>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <span className="material-symbols-outlined">camera_enhance</span>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <span className="material-symbols-outlined">thumb_up</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
