import "../styles/footer.css";

function Footer({ onOpenLegalModal }) {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e, selector) => {
    e.preventDefault();
    e.currentTarget.blur();

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

  const handleOpenLegal = (e, type) => {
    e.preventDefault();
    e.currentTarget.blur();
    onOpenLegalModal(type);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top-line"></div>

        <div className="site-footer__row">
          <div className="site-footer__col site-footer__col--left">
            <p className="site-footer__copyright">
              © {currentYear} María Cervantes. Todos los derechos reservados.
            </p>
          </div>

          <div className="site-footer__col site-footer__col--center">
            <a
              href="#hero"
              className="site-footer__logo-link"
              aria-label="Ir al inicio"
              onClick={(e) => handleScroll(e, "#hero")}
            >
              <img
                src="/mariposa-navbar@2x.png"
                alt="María Cervantes"
                className="site-footer__logo"
              />
            </a>
          </div>

          <div className="site-footer__col site-footer__col--right">
            <nav className="site-footer__nav" aria-label="Footer navigation">
              <div className="site-footer__nav-group">
                <a href="#hero" onClick={(e) => handleScroll(e, "#hero")}>
                  Inicio
                </a>
                <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
                  Sobre mí
                </a>
                <a href="#help" onClick={(e) => handleScroll(e, "#help")}>
                  Acompañamiento
                </a>
                <a
                  href="#therapy-services"
                  onClick={(e) => handleScroll(e, "#therapy-services")}
                >
                  Servicios
                </a>
                <a
                  href="#testimonials"
                  onClick={(e) => handleScroll(e, "#testimonials")}
                >
                  Testimonios
                </a>
                <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
                  Contacto
                </a>
              </div>

              <div className="site-footer__nav-group site-footer__nav-group--legal">
                <a
                  href="#terminos"
                  onClick={(e) => handleOpenLegal(e, "terms")}
                >
                  Términos y condiciones
                </a>
                <a
                  href="#privacidad"
                  onClick={(e) => handleOpenLegal(e, "privacy")}
                >
                  Aviso de privacidad
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;