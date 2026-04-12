import "../styles/help-section.css";

const helpItems = [
  {
    title: "Duelo por fallecimiento",
    text: "Acompañamiento sensible para transitar pérdidas significativas con contención y claridad.",
    label: "Acompañamiento emocional",
    icon: "bi-heartbreak",
    tone: "rose",
  },
  {
    title: "Rupturas y pérdidas afectivas",
    text: "Un espacio para procesar separaciones, despedidas y vínculos que han cambiado o terminado.",
    label: "Duelo relacional",
    icon: "bi-arrow-through-heart",
    tone: "sand",
  },
  {
    title: "Ansiedad por pérdida",
    text: "Escucha profesional para comprender el miedo, la incertidumbre y el desborde emocional.",
    label: "Proceso terapéutico",
    icon: "bi-clipboard2-pulse",
    tone: "mist",
  },
  {
    title: "Procesos de cambio de vida",
    text: "Acompañamiento en transiciones personales, cierres de ciclo y nuevas etapas vitales.",
    label: "Acompañamiento",
    icon: "bi-flower1",
    tone: "rose",
  },
];

function HelpSection() {
  return (
    <section className="therapy-help-section" id="help">
      <div className="container therapy-help__content">
        <div className="therapy-help__header">
          <span className="therapy-help__pill">Acompañamiento terapéutico</span>

          <span className="therapy-help__ornament" aria-hidden="true">
            <span className="therapy-help__ornament-line"></span>
            <img
              src="/mariposa-navbar@2x.png"
              alt=""
              className="therapy-help__ornament-butterfly"
            />
            <span className="therapy-help__ornament-line"></span>
          </span>

          <h2 className="therapy-help__title">¿Cómo puedo ayudarte?</h2>

          <p className="therapy-help__description">
            Cada proceso emocional es distinto. Aquí encontrarás un espacio
            profesional y humano para acompañarte en distintos momentos de
            duelo, pérdida, ansiedad y transformación personal.
          </p>
        </div>

        <div className="therapy-help__grid">
          {helpItems.map((item, index) => (
            <article
              className={`therapy-help-card therapy-help-card--${item.tone}`}
              key={index}
            >
              <div className="therapy-help-card__icon-wrap">
                <i className={`bi ${item.icon}`}></i>
              </div>

              <h3 className="therapy-help-card__title">{item.title}</h3>

              <p className="therapy-help-card__text">{item.text}</p>

              <span className="therapy-help-card__label">{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HelpSection;