import "../styles/help-section.css";

const helpItems = [
  {
    title: "Duelo por fallecimiento",
    text: "Acompañamiento emocional",
    tone: "soft-pink",
  },
  {
    title: "Rupturas y pérdidas afectivas",
    text: "Contención sensible",
    tone: "soft-sand",
  },
  {
    title: "Ansiedad por pérdida",
    text: "Pausa terapéutica",
    tone: "soft-gray",
  },
  {
    title: "Procesos de cambio de vida",
    text: "Acompañamiento",
    tone: "soft-pink",
  },
];

function HelpSection() {
  return (
    <section className="help-minimal-section" id="help">
      <div className="container">
        <div className="help-minimal__header">
          <span className="help-minimal__eyebrow">Acompañamiento terapéutico</span>
          <h2 className="help-minimal__title">¿Cómo puedo ayudarte?</h2>
          <p className="help-minimal__description">
            Un espacio profesional y humano para acompañarte en procesos de duelo,
            pérdida, ansiedad emocional y transiciones importantes de vida.
          </p>
        </div>

        <div className="help-minimal__grid">
          {helpItems.map((item, index) => (
            <article
              className={`help-mini-card ${item.tone}`}
              key={index}
            >
              <span className="help-mini-card__icon-wrap">
                <span className="help-mini-card__icon"></span>
              </span>

              <h3 className="help-mini-card__title">{item.title}</h3>
              <p className="help-mini-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HelpSection;