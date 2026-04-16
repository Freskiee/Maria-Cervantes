import "../styles/services-section.css";
import servicesGroupImage from "../assets/img/services-group-illustration.jpg";
import RevealOnScroll from "../components/RevealOnScroll";

const services = [
  {
    title: "Acompañamiento tanatológico para adolescentes y adultos",
    subtitle: "Modalidad presencial o en línea",
    type: "Atención individual",
    icon: "bi-person-heart",
    tone: "sky",
  },
  {
    title: "Acompañamiento tanatológico para adolescentes y adultos",
    subtitle: "Modalidad presencial o en línea",
    type: "Atención grupal",
    icon: "bi-people",
    tone: "sand",
  },
];

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

function ServicesSection() {
  return (
    <section className="services-editorial-section" id="therapy-services">
      <div className="services-wave services-wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none">
          <path
            d="M0,175 C170,255 360,25 660,92 C930,150 1140,215 1440,98 L1440,0 L0,0 Z"
            fill="#3a86ef"
            opacity="0.18"
          />
        </svg>
      </div>

      <div className="services-wave services-wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 240" preserveAspectRatio="none">
          <path
            d="M0,118 C240,34 420,214 706,170 C970,128 1166,34 1440,122 L1440,240 L0,240 Z"
            fill="#78d5e6"
            opacity="0.18"
          />
        </svg>
      </div>

      <div className="services-editorial-bg" aria-hidden="true"></div>

      <div className="container services-editorial__content">
        <div className="services-editorial__hero">
          <div className="services-editorial__copy">
            <RevealOnScroll className="reveal-soft" delay={40} y={10}>
              <div className="services-editorial__copy-inner">
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

                <h2 className="services-editorial__title">
                  Un espacio terapéutico para el acompañamiento del duelo y la
                  pérdida.
                </h2>

                <p className="services-editorial__description">
                  Este espacio está diseñado para brindarte apoyo durante tu
                  proceso, respetando tu ritmo y tu experiencia emocional.
                </p>

                <ul className="services-editorial__points">
                  <li>
                    Atención profesional con enfoque humano y sensible al duelo
                  </li>
                  <li>Modalidad presencial y en línea</li>
                  <li>
                    Espacios de escucha, contención y orientación terapéutica
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>

          <div className="services-editorial__visual">
            <RevealOnScroll className="reveal-image" delay={120} y={12} scale={0.992}>
              <div className="services-editorial__image-wrap">
                <div className="services-editorial__image-frame">
                  <div className="services-editorial__image-card">
                    <img
                      src={servicesGroupImage}
                      alt="Acompañamiento terapéutico"
                      className="services-editorial__image"
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <div className="services-editorial__cards services-editorial__cards--two">
          {services.map((service, index) => (
            <RevealOnScroll
              key={index}
              className="reveal-soft"
              delay={140 + index * 90}
              y={10}
            >
              <article
                className={`service-editorial-card service-editorial-card--${service.tone}`}
              >
                <div className="service-editorial-card__media">
                  <div className="service-editorial-card__icon-wrap">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                </div>

                <div className="service-editorial-card__body">
                  <h3 className="service-editorial-card__title">
                    {service.title}
                  </h3>

                  <p className="service-editorial-card__subtitle">
                    {service.subtitle}
                  </p>

                  <span className="service-editorial-card__type">
                    {service.type}
                  </span>

                  <a
                    href="#contact"
                    className="service-editorial-card__link"
                    onClick={handleContactClick}
                  >
                    <i className="bi bi-calendar3"></i>
                    <span>Agendar cita</span>
                  </a>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;