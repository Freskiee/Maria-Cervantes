import { useEffect } from "react";

function Header() {
    useEffect(() => {
        const updateViewportOffset = () => {
            const offsetTop = window.visualViewport
                ? window.visualViewport.offsetTop
                : 0;

            document.documentElement.style.setProperty(
                "--viewport-offset-top",
                `${offsetTop}px`
            );
        };

        updateViewportOffset();

        window.addEventListener("resize", updateViewportOffset);
        window.addEventListener("scroll", updateViewportOffset);

        if (window.visualViewport) {
            window.visualViewport.addEventListener("resize", updateViewportOffset);
            window.visualViewport.addEventListener("scroll", updateViewportOffset);
        }

        return () => {
            window.removeEventListener("resize", updateViewportOffset);
            window.removeEventListener("scroll", updateViewportOffset);

            if (window.visualViewport) {
                window.visualViewport.removeEventListener("resize", updateViewportOffset);
                window.visualViewport.removeEventListener("scroll", updateViewportOffset);
            }
        };
    }, []);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
                    <div className="container">
                        <a
                            className="navbar-brand brand-wrapper"
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                        >
                            <img
                                src="/mariposa-navbar@2x.png"
                                alt="María Cervantes"
                                className="navbar-icon"
                            />

                            <div className="brand-text">
                                <span className="brand-title">María Cervantes</span>
                                <span className="brand-subtitle">Psicóloga • Tanatóloga</span>
                            </div>
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mainNavbar"
                            aria-controls="mainNavbar"
                            aria-expanded="false"
                            aria-label="Abrir navegación"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="mainNavbar"
                        >
                            <ul className="navbar-nav align-items-lg-center gap-lg-3 ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#hero">
                                        Inicio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        Sobre mí
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">
                                        Servicios
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">
                                        Contacto
                                    </a>
                                </li>

                                <li className="nav-item mt-3 mt-lg-0">
                                    <a
                                        className="btn btn-outline-soft"
                                        href="https://wa.me/525550561776"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        WhatsApp
                                    </a>
                                </li>

                                <li className="nav-item mt-3 mt-lg-0">
                                    <a className="btn btn-primary-soft" href="#contact">
                                        Agendar sesión
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="header-spacer" aria-hidden="true"></div>
        </>
    );
}

export default Header;