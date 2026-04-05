import "../styles/services-section.css";

const services = [
  {
    title: "Psicoterapia individual",
    text: "Un espacio terapéutico para trabajar emociones, procesos personales y situaciones que impactan tu bienestar.",
    modality: "Presencial y online",
  },
  {
    title: "Acompañamiento tanatológico",
    text: "Apoyo especializado para transitar duelo, pérdidas significativas y procesos de despedida con claridad y contención.",
    modality: "Presencial y online",
  },
  {
    title: "Sesiones online",
    text: "Atención a distancia con la misma cercanía, profundidad y acompañamiento profesional.",
    modality: "Online",
  },
  {
    title: "Contención emocional en crisis",
    text: "Acompañamiento para momentos de alta carga emocional, ansiedad o desborde interno en un espacio seguro.",
    modality: "Presencial y online",
  },
];

function ServicesSection() {
  return (
    <section className="services-wave-section" id="therapy-services">
      <div className="services-wave services-wave-top">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            d="M0,150 C170,250 330,35 620,85 C900,130 1110,205 1440,90 L1440,0 L0,0 Z"
            fill="#5cb9f3"
            opacity="0.18"
          />
        </svg>
      </div>

      <div className="container services-wave-content">
        <div className="services-wave-header">
          <span className="services-wave-eyebrow">Servicios</span>
          <h2 className="services-wave-title">
            Un acompañamiento pensado para tu proceso
          </h2>
          <p className="services-wave-description">
            Servicios diseñados para brindarte un espacio profesional, humano y
            claro, adaptado a tu momento emocional y a la forma en que necesitas
            ser acompañada/o.
          </p>
        </div>

        <div className="services-wave-grid">
          {services.map((service, index) => (
            <article className="services-wave-card" key={index}>
              <div className="services-wave-card__top">
                <span className="services-wave-card__line"></span>
                <span className="services-wave-card__modality">
                  {service.modality}
                </span>
              </div>

              <h3 className="services-wave-card__title">{service.title}</h3>
              <p className="services-wave-card__text">{service.text}</p>

              <a href="#contact" className="services-wave-card__link">
                Solicitar información
              </a>
            </article>
          ))}
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