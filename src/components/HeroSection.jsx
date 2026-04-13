import heroPhoto from "../assets/img/hero-photo.jpg";
import "../styles/hero-section.css";

function HeroSection() {
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría solicitar información para agendar una sesión."
  );

  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-bg-shape hero-shape-1"></div>
        <div className="hero-bg-shape hero-shape-2"></div>
        <div className="hero-bg-glow hero-glow-1"></div>
        <div className="hero-bg-glow hero-glow-2"></div>

        <div className="container hero-section__container position-relative">
          <div className="row align-items-center gy-5 hero-section__row">
            <div className="col-lg-5">
              <div className="hero-copy">
                <span className="hero-kicker">
                  Acompañamiento tanatológico y psicológico
                </span>

                <span className="hero-accent" aria-hidden="true">
                  <span className="hero-accent-line"></span>
                  <img
                    src="/mariposa-navbar@2x.png"
                    alt=""
                    className="hero-accent-butterfly"
                  />
                  <span className="hero-accent-line"></span>
                </span>

                <h1 className="hero-title mt-3">
                  ACOMPAÑAMIENTO PARA PROCESOS DE DUELO, PÉRDIDA Y CAMBIOS
                  SIGNIFICATIVOS DE VIDA
                </h1>

                <p className="hero-description mt-4">
                  Un espacio terapéutico diseñado para brindarte contención,
                  escucha y acompañamiento respetuoso en momentos de dolor y
                  transformación personal.
                  <br />
                  Atención profesional, cálida y humana, orientada a sostenerte
                  emocionalmente durante tu proceso terapéutico con presencia y
                  sensibilidad.
                </p>

                <div className="hero-actions d-flex flex-column flex-sm-row gap-3 mt-4">
                  <a href="#contact" className="hero-btn hero-btn--primary">
                    Agendar sesión
                  </a>

                  <a
                    href={`https://wa.me/525550561776?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-btn hero-btn--ghost"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>Enviar WhatsApp</span>
                  </a>
                </div>

                <ul className="hero-highlights list-unstyled mt-4 mb-0">
                  <li>
                    <img
                      src="/mariposa-navbar@2x.png"
                      alt=""
                      aria-hidden="true"
                      className="hero-highlights__butterfly"
                    />
                    <span>Atención presencial y en línea</span>
                  </li>
                  <li>
                    <img
                      src="/mariposa-navbar@2x.png"
                      alt=""
                      aria-hidden="true"
                      className="hero-highlights__butterfly"
                    />
                    <span>
                      Especialidad en procesos de duelo, pérdidas y crisis
                      emocionales
                    </span>
                  </li>
                  <li>
                    <img
                      src="/mariposa-navbar@2x.png"
                      alt=""
                      aria-hidden="true"
                      className="hero-highlights__butterfly"
                    />
                    <span>
                      Acompañamiento profesional, cercano y libre de juicios
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="hero-visual">
                <div className="hero-image-frame">
                  <div className="hero-image-card">
                    <img
                      src={heroPhoto}
                      alt="María Cervantes Forastieri"
                      className="img-fluid hero-image"
                    />
                  </div>

                  <p className="hero-photo-signature">
                    <span>Lic.</span> María Cervantes Forastieri
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href={`https://wa.me/525550561776?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="hero-whatsapp-float"
        aria-label="Escribir por WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}

export default HeroSection;