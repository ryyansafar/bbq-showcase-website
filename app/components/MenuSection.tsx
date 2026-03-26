import Link from "next/link";

export default function MenuSection() {
    return (
        <section id="menu" className="section menu">
            <div className="container">
                <div className="section__header">
                    <div className="section__subtitle reveal-text">SIGNATURE SELECTION</div>
                    <h2 className="section__title reveal-text">THE SMOKEHOUSE ORIGINALS</h2>
                    <Link href="/menu" className="link-arrow reveal-text">
                        VIEW FULL MENU
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>

                <div className="menu__grid">
                    {/* Card 1 */}
                    <article className="card menu-card reveal-card">
                        <div className="card__image-wrapper">
                            <div
                                className="card__image"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDV6d2STp4qI-Ul-7aiy1neVoFHoQ6UGix0WGfy-I35GAdTTzWaneXyph1tF9kyciiXXZqApFrngjemdHuDTjzg_2U7wuVPIn1py7HraZ_yMlWVWxVayEAnmA7qpw_oBex7kjWaiivvmhU2MZTiwXodM93wAQYkHMHCsVeqzJ3MrdnQjUjFhAacton9q5m9hOICv5Jc1on76y1x7BZOBtGFCmp3szZMJSmTfh4xVjpk2_jcejdm4NQruRiss9Y_Zyww3wyOa3A_cRg')",
                                }}
                            ></div>
                            <div className="card__badge">BESTSELLER</div>
                        </div>
                        <div className="card__content">
                            <div className="card__header">
                                <h3 className="card__title">GOURMET BRISKET SANDWICH</h3>
                                <div className="card__price">
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ fontSize: "1.2rem", color: "var(--color-primary)" }}
                                    >
                                        star
                                    </span>
                                </div>
                            </div>
                            <p className="card__description">
                                Slow-smoked pulled beef with truffle mayo, caramelized onions, and
                                melted cheese on toasted brioche.
                            </p>
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article
                        className="card menu-card reveal-card"
                        style={{ transitionDelay: "0.1s" }}
                    >
                        <div className="card__image-wrapper">
                            <div
                                className="card__image"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCa11y105KyH07C6pWEo2P43pFRtHSTIL2GMy5szRi9DmdhySL9uT762KxDi9kkROApP80MHWtdYAeA9yfq1ifd2l-UmutCBRewIqTGaC48FrIiEH90UIjFwcmc7DyE1nn9-gTpCJKeU5U2-RGV1Ecc1EsO8ZToGW--kK_592l12f7XwZh7GE7SJwZi6PNHuMx3_hyK395UFpu3oyeYs5OsHD4xHlKU_aHJmQwruI_YKeVtjLhsLKXAxLzK5PqhZ74TazWqiwI5MU')",
                                }}
                            ></div>
                        </div>
                        <div className="card__content">
                            <div className="card__header">
                                <h3 className="card__title">SMOKED PORK BELLY</h3>
                                <div className="card__price">
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ fontSize: "1.2rem", color: "var(--color-primary)" }}
                                    >
                                        local_fire_department
                                    </span>
                                </div>
                            </div>
                            <p className="card__description">
                                Succulent pork belly smoked to perfection, with crispy skin and
                                tender meat. Served with house BBQ sauce.
                            </p>
                        </div>
                    </article>

                    {/* Card 3 */}
                    <article
                        className="card menu-card reveal-card"
                        style={{ transitionDelay: "0.2s" }}
                    >
                        <div className="card__image-wrapper">
                            <div
                                className="card__image"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_R5QWPTT4PwgfRwyWZ0oDVtrEPT6l-c9R8bxp9vJmQpevvSHq31Y1r5TcE9TUhAiLZxuS-ZwA0xnMgIxhzmz01Isxy-afadGuf0ULxqPHy0ydfQSKLiM4fjESVqBY7B7jgJFQaSvhkgNZF9CDqhMdLC7_IhLhUbA6Mh7pk_DdKv8OQ1uPgUDTjJFzGSpCIf-XUIxUfUVlQMczGamrLCL54zGCgJy9W-oY4XgHZMocNBEI4bCUUX1SEkQhObbmSzHhV19TciYOfZA')",
                                }}
                            ></div>
                            <div className="card__badge card__badge--secondary">
                                LIMITED DAILY
                            </div>
                        </div>
                        <div className="card__content">
                            <div className="card__header">
                                <h3 className="card__title">BEEF BRISKET</h3>
                                <div className="card__price">
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ fontSize: "1.2rem", color: "var(--color-primary)" }}
                                    >
                                        workspace_premium
                                    </span>
                                </div>
                            </div>
                            <p className="card__description">
                                The King of BBQ. Prime beef smoked for 16 hours over aged wood.
                                Served with special potato salad.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
