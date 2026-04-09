import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

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
            <a href="#hero" className="site-footer__logo-link" aria-label="Ir al inicio">
              <img
                src="/mariposa-navbar@2x.png"
                alt="María Cervantes"
                className="site-footer__logo"
              />
            </a>
          </div>

          <div className="site-footer__col site-footer__col--right">
            <nav className="site-footer__nav" aria-label="Footer navigation">
              <a href="#hero">Inicio</a>
              <a href="#about">Sobre mí</a>
              <a href="#therapy-services">Servicios</a>
              <a href="#testimonials">Testimonios</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;