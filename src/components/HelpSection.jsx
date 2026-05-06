import "../styles/help-section.css";
import helpTherapyImage from "../assets/img/help-therapy-illustration.jpg";
import RevealOnScroll from "../components/RevealOnScroll";

const helpItems = [
  {
    title: "Duelo por fallecimiento de un ser querido",
    icon: "bi-heartbreak",
    tone: "rose",
  },
  {
    title: "Enfermedad grave o terminal (propia o de un familiar)",
    icon: "bi-hospital",
    tone: "mist",
  },
  {
    title: "Duelo por suicidio o muerte repentina",
    icon: "bi-cloud-lightning-rain",
    tone: "sand",
  },
  {
    title: "Ruptura o término de relación amorosa",
    icon: "bi-arrow-through-heart",
    tone: "rose",
  },
  {
    title: "Jubilación o despido laboral",
    icon: "bi-briefcase",
    tone: "sand",
  },
  {
    title: "Migración o cambio de país",
    icon: "bi-globe-americas",
    tone: "mist",
  },
];

function HelpSection() {
  return (
    <section className="therapy-help-section" id="help">
      <div className="container therapy-help__content">
        <div className="therapy-help__header">
          <RevealOnScroll className="reveal-soft" delay={20} y={10}>
            <span className="therapy-help__kicker">
              Acompañamiento terapéutico
            </span>
          </RevealOnScroll>

          <RevealOnScroll className="reveal-soft" delay={90} y={10}>
            <span className="therapy-help__ornament" aria-hidden="true">
              <span className="therapy-help__ornament-line"></span>
              <img
                src="/mariposa-navbar@2x.png"
                alt=""
                className="therapy-help__ornament-butterfly"
              />
              <span className="therapy-help__ornament-line"></span>
            </span>
          </RevealOnScroll>
        </div>

        <div className="therapy-help__intro-layout">
          <div className="therapy-help__visual">
            <RevealOnScroll
              className="reveal-left"
              delay={120}
              scale={0.992}
            >
              <div className="therapy-help__image-frame">
                <div className="therapy-help__image-card">
                  <img
                    src={helpTherapyImage}
                    alt="Espacio de acompañamiento terapéutico"
                    className="therapy-help__image"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="therapy-help__summary">
            <RevealOnScroll className="reveal-right" delay={180} scale={0.992}>
              <div className="therapy-help__summary-card">
                <h2 className="therapy-help__title">¿EN QUÉ TE PUEDO AYUDAR?</h2>

                <p className="therapy-help__description">
                  Desde el acompañamiento tanatológico, te brindo apoyo en
                  procesos de duelo y pérdida, ayudándote a transitar y
                  resignificar experiencias de cambio y dolor emocional.
                </p>

                <p className="therapy-help__summary-text">
                  Cada experiencia de duelo es distinta. El acompañamiento busca
                  ofrecerte un espacio humano, seguro y profesional donde puedas
                  expresar lo que estás viviendo, resignificar tu proceso y
                  encontrar contención emocional.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <div className="therapy-help__grid">
          {helpItems.map((item, index) => (
            <RevealOnScroll
              key={index}
              className="reveal-soft"
              delay={120 + index * 70}
              y={10}
            >
              <a
                href="https://wa.me/525550561776?text=Hola%20Mar%C3%ADa%2C%20me%20gustar%C3%ADa%20recibir%20acompa%C3%B1amiento%20terap%C3%A9utico%20y%20agendar%20una%20sesi%C3%B3n.%20%C2%BFPodr%C3%ADas%20brindarme%20informaci%C3%B3n%2C%20por%20favor%3F"
                target="_blank"
                rel="noopener noreferrer"
                className={`therapy-help-card therapy-help-card--${item.tone}`}
              >
                <div className="therapy-help-card__icon-wrap">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h3 className="therapy-help-card__title">{item.title}</h3>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HelpSection;