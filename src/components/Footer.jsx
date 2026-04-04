function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-lg-4">
            <div className="brand-wrapper footer-brand">
              <div className="brand-mark"></div>

              <div className="brand-text">
                <span className="brand-title">María Cervantes</span>
                <span className="brand-subtitle">Psicología y Tanatología</span>
              </div>
            </div>

            <p className="footer-text mt-3">
              Acompañamiento emocional profesional, cálido y humano en procesos de duelo,
              pérdida y transición emocional.
            </p>
          </div>

          <div className="col-lg-4">
            <h3 className="footer-heading">Contacto</h3>
            <ul className="footer-list list-unstyled">
              <li>WhatsApp: 55 5056 1776</li>
              <li>Correo: forastieri@psicotanato.com</li>
              <li>Atención presencial y online</li>
              <li>Comunal #58, Acacias, Del. Benito Juárez, CDMX</li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h3 className="footer-heading">Navegación</h3>
            <ul className="footer-list list-unstyled">
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom mt-4 pt-4">
          <p className="mb-0">
            © {currentYear} María Cervantes | Psicología y Tanatología
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;