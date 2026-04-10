import { useEffect, useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = () => {
    if (window.innerWidth < 992) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        <a
          className="navbar-brand brand-wrapper"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
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
          className={`navbar-toggler custom-toggler ${isMenuOpen ? "is-open" : ""}`}
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="custom-toggler-box">
            <span className="custom-toggler-line"></span>
            <span className="custom-toggler-line"></span>
            <span className="custom-toggler-line"></span>
          </span>
        </button>

        <div
          className={`navbar-collapse custom-collapse justify-content-end ${
            isMenuOpen ? "show" : ""
          }`}
          id="mainNavbar"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-3 ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero" onClick={handleNavClick}>
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavClick}>
                Sobre mí
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#therapy-services"
                onClick={handleNavClick}
              >
                Servicios
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#testimonials"
                onClick={handleNavClick}
              >
                Testimonios
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleNavClick}>
                Contacto
              </a>
            </li>

            <li className="nav-item mt-3 mt-lg-0 nav-cta-item">
              <a
                className="nav-cta nav-cta--ghost"
                href="https://wa.me/525550561776"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
              >
                <i className="bi bi-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </li>

            <li className="nav-item mt-3 mt-lg-0 nav-cta-item">
              <a
                className="nav-cta nav-cta--primary"
                href="#contact"
                onClick={handleNavClick}
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