import { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";

const MOBILE_BREAKPOINT = 1200;
const TOP_TARGET = "__TOP__";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMobileLink, setActiveMobileLink] = useState("");
    const scrollPositionRef = useRef(0);

    const lockPageScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset || 0;
        scrollPositionRef.current = scrollY;

        document.body.classList.add("mobile-menu-open");
        document.body.style.top = `-${scrollY}px`;
    };

    const unlockPageScroll = () => {
        const scrollY = scrollPositionRef.current || 0;

        document.body.classList.remove("mobile-menu-open");
        document.body.style.top = "";

        window.scrollTo({
            top: scrollY,
            behavior: "instant",
        });
    };

    useEffect(() => {
        if (window.innerWidth >= MOBILE_BREAKPOINT) return;

        if (isMenuOpen) {
            lockPageScroll();
        } else {
            unlockPageScroll();
        }

        return () => {
            document.body.classList.remove("mobile-menu-open");
            document.body.style.top = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= MOBILE_BREAKPOINT) {
                if (document.body.classList.contains("mobile-menu-open")) {
                    unlockPageScroll();
                }
                setIsMenuOpen(false);
                setActiveMobileLink("");
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToSelector = (selector) => {
        const target = document.querySelector(selector);
        if (!target) return;

        const navbarHeight =
            parseFloat(
                getComputedStyle(document.documentElement).getPropertyValue(
                    "--navbar-height"
                )
            ) || 84;

        const targetTop =
            target.getBoundingClientRect().top + window.pageYOffset - navbarHeight + 1;

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: "smooth",
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleMenu = () => {
        if (isMenuOpen) {
            setActiveMobileLink("");
            setIsMenuOpen(false);
            return;
        }

        setActiveMobileLink("");
        setIsMenuOpen(true);
    };

    const closeMenuOnly = () => {
        if (window.innerWidth < MOBILE_BREAKPOINT) {
            setActiveMobileLink("");
            setIsMenuOpen(false);
        }
    };

    const handleSectionClick = (e, selector) => {
        e.preventDefault();
        e.currentTarget.blur();

        if (window.innerWidth < MOBILE_BREAKPOINT) {
            setActiveMobileLink(selector);
            setIsMenuOpen(false);

            setTimeout(() => {
                scrollToSelector(selector);
                setTimeout(() => {
                    setActiveMobileLink("");
                }, 120);
            }, 80);


            return;
        }

        scrollToSelector(selector);
    };

    const handleTopClick = (e) => {
        e.preventDefault();
        e.currentTarget.blur();

        if (window.innerWidth < MOBILE_BREAKPOINT) {
            setActiveMobileLink(TOP_TARGET);

            if (isMenuOpen) {
                setIsMenuOpen(false);

                setTimeout(() => {
                    scrollToTop();
                    setTimeout(() => {
                        setActiveMobileLink("");
                    }, 220);
                }, 80);
            } else {
                scrollToTop();
                setTimeout(() => {
                    setActiveMobileLink("");
                }, 220);
            }

            return;
        }

        scrollToTop();
    };

    return (
        <nav className="navbar navbar-expand-xl custom-navbar fixed-top">
            <div className="container">
                <a
                    className="navbar-brand brand-wrapper"
                    href="#hero"
                    onClick={handleTopClick}
                >
                    <img
                        src="/mariposa-navbar@2x.png"
                        alt="María Cervantes"
                        className="navbar-icon"
                    />

                    <div className="brand-text">
                        <span className="brand-title">María Cervantes Forastieri</span>
                        <span className="brand-subtitle">Psicóloga • Tanatóloga</span>
                    </div>
                </a>

                <button
                    className={`navbar-toggler custom-toggler ${isMenuOpen ? "is-open" : ""}`}
                    type="button"
                    aria-controls="mainNavbar"
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
                    onClick={toggleMenu}
                >
                    <span className="custom-toggler-box">
                        <span className="custom-toggler-line"></span>
                        <span className="custom-toggler-line"></span>
                        <span className="custom-toggler-line"></span>
                    </span>
                </button>

                <div
                    className={`navbar-collapse custom-collapse justify-content-end ${isMenuOpen ? "show" : ""
                        }`}
                    id="mainNavbar"
                >
                    <ul className="navbar-nav align-items-xl-center gap-xl-2 ms-auto">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeMobileLink === "#hero" ? "is-active-mobile" : ""
                                    }`}
                                href="#hero"
                                onClick={(e) => handleSectionClick(e, "#hero")}
                            >
                                <span>Inicio</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeMobileLink === "#about" ? "is-active-mobile" : ""
                                    }`}
                                href="#about"
                                onClick={(e) => handleSectionClick(e, "#about")}
                            >
                                <span>Sobre mí</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeMobileLink === "#help" ? "is-active-mobile" : ""
                                    }`}
                                href="#help"
                                onClick={(e) => handleSectionClick(e, "#help")}
                            >
                                <span>Acompañamiento</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeMobileLink === "#therapy-services" ? "is-active-mobile" : ""
                                    }`}
                                href="#therapy-services"
                                onClick={(e) => handleSectionClick(e, "#therapy-services")}
                            >
                                <span>Servicios</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeMobileLink === "#testimonials" ? "is-active-mobile" : ""
                                    }`}
                                href="#testimonials"
                                onClick={(e) => handleSectionClick(e, "#testimonials")}
                            >
                                <span>Testimonios</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeMobileLink === "#contact" ? "is-active-mobile" : ""
                                    }`}
                                href="#contact"
                                onClick={(e) => handleSectionClick(e, "#contact")}
                            >
                                <span>Contacto</span>
                            </a>
                        </li>

                        <li className="nav-item mt-3 mt-xl-0 nav-cta-item">
                            <a
                                className="nav-cta nav-cta--ghost"
                                href="https://wa.me/525550561776?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20para%20agendar%20una%20sesi%C3%B3n."
                                target="_blank"
                                rel="noreferrer"
                                onClick={closeMenuOnly}
                            >
                                <i className="bi bi-whatsapp"></i>
                                <span>WhatsApp</span>
                            </a>
                        </li>

                        <li className="nav-item mt-3 mt-xl-0 nav-cta-item nav-cta-item--primary">
                            <a
                                className="nav-cta nav-cta--primary"
                                href="#contact"
                                onClick={(e) => handleSectionClick(e, "#contact")}
                            >
                                Agendar sesión
                            </a>
                        </li>
                    </ul>
                </div>

                <button
                    type="button"
                    className={`navbar-backdrop ${isMenuOpen ? "show" : ""}`}
                    aria-hidden={!isMenuOpen}
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={closeMenuOnly}
                />
            </div>
        </nav>
    );
}

export default Navbar;