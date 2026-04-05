import "../styles/help-section.css";

const helpItems = [
  {
    title: "Duelo y pérdida",
    text: "Acompañamiento terapéutico para transitar pérdidas significativas con claridad, contención y un espacio seguro.",
  },
  {
    title: "Acompañamiento tanatológico",
    text: "Apoyo profesional para comprender procesos de pérdida, despedida y adaptación emocional desde una mirada sensible.",
  },
  {
    title: "Ansiedad y crisis emocionales",
    text: "Un espacio de escucha y acompañamiento para identificar y atravesar momentos de desborde emocional o incertidumbre.",
  },
  {
    title: "Cambios de vida y transiciones",
    text: "Acompañamiento en cierres de ciclo, cambios familiares, nuevas etapas personales y reorganización emocional.",
  },
  {
    title: "Contención emocional",
    text: "Escucha profesional y herramientas para sostener momentos difíciles con mayor calma, claridad y estabilidad.",
  },
];

function HelpSection() {
  return (
    <section className="help-section" id="help">
      <div className="container help-section__content">
        <div className="help-section__layout">
          <div className="help-section__copy">
            <span className="help-section__blob"></span>

            <span className="help-section__eyebrow">
              Acompañamiento terapéutico
            </span>

            <div className="help-section__heading-block">
              <span className="help-section__accent-line"></span>
              <h2 className="help-section__title">¿Cómo puedo ayudarte?</h2>
            </div>

            <p className="help-section__description">
              Cada proceso emocional es distinto. Aquí encontrarás un espacio
              profesional y humano para acompañarte en momentos de duelo,
              pérdida, crisis emocionales y etapas de transformación personal.
            </p>
          </div>

          <div className="help-section__grid">
            {helpItems.map((item, index) => (
              <article className="help-card" key={index}>
                <div className="help-card__top-accent">
                  <span className="help-card__petal"></span>
                  <span className="help-card__line"></span>
                </div>

                <h3 className="help-card__title">{item.title}</h3>
                <p className="help-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;