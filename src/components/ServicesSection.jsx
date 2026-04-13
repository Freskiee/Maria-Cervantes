import "../styles/services-section.css";

const services = [
  {
    title: "Terapia individual",
    text: "Un espacio cercano para trabajar emociones, procesos personales y situaciones que impactan tu bienestar.",
    tag: "Presencial y online",
    icon: "bi-person-heart",
    tone: "sky",
  },
  {
    title: "Acompañamiento tanatológico",
    text: "Apoyo profesional para transitar duelo, pérdidas significativas y procesos de despedida con contención y claridad.",
    tag: "Acompañamiento",
    icon: "bi-heartbreak",
    tone: "sand",
  },
  {
    title: "Sesiones online",
    text: "Atención a distancia con la misma cercanía, profundidad y acompañamiento profesional desde donde estés.",
    tag: "Online",
    icon: "bi-laptop",
    tone: "mist",
  },
];

function ServicesSection() {
  return (
    <section className="services-editorial-section" id="therapy-services">
      <div className="services-wave services-wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            d="M0,150 C170,250 330,35 620,85 C900,130 1110,205 1440,90 L1440,0 L0,0 Z"
            fill="#5cb9f3"
            opacity="0.24"
          />
        </svg>
      </div>

      <div className="services-editorial-bg"></div>

      <div className="container services-editorial__content">
        <div className="services-editorial__layout">
          <div className="services-editorial__copy">
            <span className="services-editorial__eyebrow">Servicios</span>

            <span className="services-editorial__accent" aria-hidden="true">
              <span className="services-editorial__accent-line"></span>
              <img
                src="/mariposa-navbar@2x.png"
                alt=""
                className="services-editorial__accent-butterfly"
              />
              <span className="services-editorial__accent-line"></span>
            </span>

            <div className="services-editorial__heading-block">
              <h2 className="services-editorial__title">
                Un acompañamiento diseñado para sostenerte con claridad y
                calidez
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
              <article
                className={`service-editorial-card service-editorial-card--${service.tone}`}
                key={index}
              >
                <div className="service-editorial-card__media">
                  <div className="service-editorial-card__icon-wrap">
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                  <span className="service-editorial-card__tag">
                    {service.tag}
                  </span>
                </div>

                <div className="service-editorial-card__body">
                  <h3 className="service-editorial-card__title">
                    {service.title}
                  </h3>
                  <p className="service-editorial-card__text">{service.text}</p>

                  <a href="#contact" className="service-editorial-card__link">
                    Solicitar información
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="services-wave services-wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            d="M0,120 C220,40 380,205 660,168 C930,130 1120,35 1440,120 L1440,220 L0,220 Z"
            fill="#a7ebf3"
            opacity="0.2"
          />
        </svg>
      </div>
    </section>
  );
}

export default ServicesSection;