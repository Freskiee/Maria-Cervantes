import heroPhoto from "../assets/img/hero-photo.jpg";
import "../styles/hero-section.css";
import RevealOnScroll from "../components/RevealOnScroll";

function HeroSection() {
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría solicitar información para agendar una sesión."
  );

  const handleContactClick = (e) => {
    e.preventDefault();

    const target = document.querySelector("#contact");
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
              <RevealOnScroll className="reveal-soft" delay={20} y={14}>
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
                    <br /><br />
                    Atención profesional, cálida y humana, orientada a
                    sostenerte emocionalmente durante tu proceso terapéutico con
                    presencia y sensibilidad.
                  </p>

                  <div className="hero-actions d-flex flex-column flex-sm-row gap-3 mt-4">
                    <a
                      href="#contact"
                      className="hero-btn hero-btn--primary"
                      onClick={handleContactClick}
                    >
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

                  {/* <ul className="hero-highlights list-unstyled mt-4 mb-0">
                    <li>
                      <RevealOnScroll className="reveal-soft" delay={140} y={10}>
                        <div className="hero-highlights__item">
                          <img
                            src="/mariposa-navbar@2x.png"
                            alt=""
                            aria-hidden="true"
                            className="hero-highlights__butterfly"
                          />
                          <span>Atención presencial y en línea</span>
                        </div>
                      </RevealOnScroll>
                    </li>

                    <li>
                      <RevealOnScroll className="reveal-soft" delay={220} y={10}>
                        <div className="hero-highlights__item">
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
                        </div>
                      </RevealOnScroll>
                    </li>

                    <li>
                      <RevealOnScroll className="reveal-soft" delay={300} y={10}>
                        <div className="hero-highlights__item">
                          <img
                            src="/mariposa-navbar@2x.png"
                            alt=""
                            aria-hidden="true"
                            className="hero-highlights__butterfly"
                          />
                          <span>
                            Acompañamiento profesional, cercano y libre de
                            juicios
                          </span>
                        </div>
                      </RevealOnScroll>
                    </li>
                  </ul> */}
                </div>
              </RevealOnScroll>
            </div>

            <div className="col-lg-7">
              <RevealOnScroll
                className="reveal-image"
                delay={120}
                y={14}
                scale={0.992}
              >
                <div className="hero-visual">
                  <div className="hero-image-frame">
                    <div className="hero-image-card">
                      <img
                        src={heroPhoto}
                        alt="María Cervantes Forastieri"
                        className="img-fluid hero-image"
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
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