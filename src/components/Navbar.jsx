import { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";

const MOBILE_BREAKPOINT = 1200;
const TOP_TARGET = "__TOP__";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMobileLink, setActiveMobileLink] = useState("");
    const scrollLockYRef = useRef(0);
    const pendingScrollTargetRef = useRef(null);

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= MOBILE_BREAKPOINT) {
                setIsMenuOpen(false);
                setActiveMobileLink("");
                pendingScrollTargetRef.current = null;
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

    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;

        if (isMenuOpen && window.innerWidth < MOBILE_BREAKPOINT) {
            scrollLockYRef.current = window.scrollY;
            body.classList.add("menu-open");
            html.classList.add("menu-open");
            body.style.top = `-${scrollLockYRef.current}px`;
            return;
        }

        const wasLocked =
            body.classList.contains("menu-open") || html.classList.contains("menu-open");

        if (wasLocked) {
            const restoreY = scrollLockYRef.current;
            const pendingTarget = pendingScrollTargetRef.current;

            body.classList.remove("menu-open");
            html.classList.remove("menu-open");
            body.style.top = "";

            const previousScrollBehavior = html.style.scrollBehavior;
            html.style.scrollBehavior = "auto";
            window.scrollTo(0, restoreY);
            html.style.scrollBehavior = previousScrollBehavior;

            if (pendingTarget) {
                pendingScrollTargetRef.current = null;

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        if (pendingTarget === TOP_TARGET) {
                            scrollToTop();
                        } else {
                            scrollToSelector(pendingTarget);
                        }

                        setTimeout(() => {
                            setActiveMobileLink("");
                        }, 260);
                    });
                });
            }
        }

        return () => {
            body.classList.remove("menu-open");
            html.classList.remove("menu-open");
            body.style.top = "";
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        if (isMenuOpen) {
            pendingScrollTargetRef.current = null;
            setActiveMobileLink("");
            setIsMenuOpen(false);
            return;
        }

        setActiveMobileLink("");
        pendingScrollTargetRef.current = null;
        setIsMenuOpen(true);
    };

    const closeMenuOnly = () => {
        if (window.innerWidth < MOBILE_BREAKPOINT) {
            pendingScrollTargetRef.current = null;
            setActiveMobileLink("");
            setIsMenuOpen(false);
        }
    };

    const handleSectionClick = (e, selector) => {
        e.preventDefault();
        e.currentTarget.blur();

        if (window.innerWidth < MOBILE_BREAKPOINT) {
            setActiveMobileLink(selector);
            pendingScrollTargetRef.current = selector;

            setTimeout(() => {
                setIsMenuOpen(false);
            }, 150);

            return;
        }

        scrollToSelector(selector);
    };

    const handleTopClick = (e) => {
        e.preventDefault();
        e.currentTarget.blur();

        if (window.innerWidth < MOBILE_BREAKPOINT) {
            setActiveMobileLink(TOP_TARGET);
            pendingScrollTargetRef.current = TOP_TARGET;

            if (isMenuOpen) {
                setTimeout(() => {
                    setIsMenuOpen(false);
                }, 150);
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
                <a className="navbar-brand brand-wrapper" href="/" onClick={handleTopClick}>
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
                    <ul className="navbar-nav align-items-xl-center gap-xl-3 ms-auto">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeMobileLink === "#hero" ? "is-active-mobile" : ""}`}
                                href="#hero"
                                onClick={(e) => handleSectionClick(e, "#hero")}
                            >
                                <span>Inicio</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeMobileLink === "#about" ? "is-active-mobile" : ""}`}
                                href="#about"
                                onClick={(e) => handleSectionClick(e, "#about")}
                            >
                                <span>Sobre mí</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeMobileLink === "#help" ? "is-active-mobile" : ""}`}
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
                                href="https://wa.me/525550561776"
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
            </div>
        </nav>
    );
}

export default Navbar;