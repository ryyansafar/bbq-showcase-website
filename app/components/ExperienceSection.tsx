export default function ExperienceSection() {
    return (
        <section id="experience" className="section experience">
            <div className="experience__bg"></div>
            <div className="container">
                <div className="experience__grid">
                    <div className="experience__images reveal-card">
                        <div className="image-stack">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz0rC0vAHnwTRIjxaQvACQySMfhoBWk31j3eJajaV13OKHQLWq9KHrgh7o4O6Sg_tykfdYvqIB6PaXlYw9UMs8_5PdCSk9ee8XFuL_P9_DFL_FqJMN_-xHKJ2hG0by2Tw5Z6ndpDmjwdgvJ2so7Sf59_sxmQAHCZYeQnouLWqoJgRJONwlkrr0_srD-hkW7guLqX5tivwtwRYVJuM0JQUuM3yyRfVm_Ad6n67ipzFLuU4l-OIVcdfPbbx7uaJ-LRLBFEhbYbzDCn0"
                                alt="Restaurant Interior"
                                className="experience__img experience__img--1"
                            />
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqXtbK_XOgtHbBTEvRpDWk_FcIwl7li7rdEdAZQaHI9fhhb-mFGj6BbMB7XFI4PYvpCHRX62Z-8u0TEfzOe4MjpGqkSf3nqNnyyXfvm13i91-RThCuQZ92pDZWO-gICt-JtB_82FN9jlxkBcELssofW7EOUrONtYtOlMRvQkrF40mylLb8uBOGz4RaKOTiljW5pj5Cw5iAaVTkj1Qxm_lSsaAM6p1B1eMBQJ6eWYjsXcCBMQ6hDTagCaUPzsFulwog4VbKB0UQkeI"
                                alt="Chef slicing brisket"
                                className="experience__img experience__img--2"
                            />
                        </div>
                    </div>

                    <div className="experience__content">
                        <div className="section__subtitle reveal-text">CATERING & EVENTS</div>
                        <h2 className="section__title reveal-text">
                            BRING THE PIT TO YOUR PARTY
                        </h2>
                        <p className="section__description reveal-text">
                            From intimate backyard weddings to large corporate gatherings,
                            our mobile pit setup brings the authentic smokehouse
                            experience directly to you. We handle everything from the fire to
                            the cleanup.
                        </p>

                        <div className="features-list reveal-text">
                            <div className="feature">
                                <div className="feature__icon">
                                    <span className="material-symbols-outlined">
                                        local_fire_department
                                    </span>
                                </div>
                                <div className="feature__text">
                                    <h4 className="feature__title">ON-SITE SMOKING</h4>
                                    <p className="feature__desc">
                                        We smoke live at your location for maximum impact and flavor.
                                    </p>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="feature__icon">
                                    <span className="material-symbols-outlined">restaurant_menu</span>
                                </div>
                                <div className="feature__text">
                                    <h4 className="feature__title">CUSTOM MENUS</h4>
                                    <p className="feature__desc">
                                        Tailored meat selections and sides to fit your event's vibe.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn--white mt-8 reveal-text">
                            INQUIRE ABOUT CATERING
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
