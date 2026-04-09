import "../styles/services-section.css";

const services = [
  {
    title: "Terapia individual",
    text: "Un espacio cercano para trabajar emociones, procesos personales y situaciones que impactan tu bienestar.",
    tag: "Presencial y online",
  },
  {
    title: "Acompañamiento tanatológico",
    text: "Apoyo profesional para transitar duelo, pérdidas significativas y procesos de despedida con contención y claridad.",
    tag: "Acompañamiento",
  },
  {
    title: "Sesiones online",
    text: "Atención a distancia con la misma cercanía, profundidad y acompañamiento profesional desde donde estés.",
    tag: "Online",
  },
];

function ServicesSection() {
  return (
    <section className="services-editorial-section" id="therapy-services">
      <div className="services-wave services-wave-top">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            d="M0,150 C170,250 330,35 620,85 C900,130 1110,205 1440,90 L1440,0 L0,0 Z"
            fill="#5cb9f3"
            opacity="0.26"
          />
        </svg>
      </div>

      <div className="services-editorial-bg"></div>

      <div className="container services-editorial__content">
        <div className="services-editorial__layout">
          <div className="services-editorial__copy">
            <span className="services-editorial__eyebrow">Servicios</span>

            <div className="services-editorial__heading-block">
              <span className="services-editorial__accent-line"></span>
              <h2 className="services-editorial__title">
                Un acompañamiento diseñado para sostenerte con claridad y calidez
              </h2>
            </div>

            <p className="services-editorial__description">
              Cada servicio está pensado para ofrecerte un espacio profesional,
              humano y seguro, adaptado a tu momento emocional y a la forma en
              que necesitas ser acompañada/o.
            </p>

            <ul className="services-editorial__points">
              <li>Atención profesional con enfoque humano</li>
              <li>Modalidad presencial y online</li>
              <li>Espacios de escucha, contención y guía</li>
            </ul>
          </div>

          <div className="services-editorial__cards">
            {services.map((service, index) => (
              <article className="service-editorial-card" key={index}>
                <div className="service-editorial-card__image">
                  <span className="service-editorial-card__glow"></span>
                  <div className="service-editorial-card__mock-photo">
                    <span className="service-editorial-card__mock-shape one"></span>
                    <span className="service-editorial-card__mock-shape two"></span>
                    <span className="service-editorial-card__mock-shape three"></span>
                  </div>
                </div>

                <div className="service-editorial-card__body">
                  <span className="service-editorial-card__tag">{service.tag}</span>
                  <h3 className="service-editorial-card__title">{service.title}</h3>
                  <p className="service-editorial-card__text">{service.text}</p>

                  <a href="#contact" className="service-editorial-card__link">
                    Agendar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="services-wave services-wave-bottom">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            d="M0,120 C220,40 380,205 660,168 C930,130 1120,35 1440,120 L1440,220 L0,220 Z"
            fill="#a7ebf3"
            opacity="0.22"
          />
        </svg>
      </div>
    </section>
  );
}

export default ServicesSection;