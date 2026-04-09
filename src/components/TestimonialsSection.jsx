import "../styles/testimonials-section.css";

const testimonials = [
  {
    quote:
      "Encontré un espacio de escucha muy profesional y humano. Me sentí acompañada en todo momento con mucha claridad y calidez.",
    name: "Paciente",
    detail: "Proceso terapéutico",
  },
  {
    quote:
      "Las sesiones me ayudaron a comprender mejor lo que estaba viviendo y a transitar mi proceso con más calma y contención emocional.",
    name: "Consultante",
    detail: "Acompañamiento emocional",
  },
  {
    quote:
      "Desde la primera sesión sentí un ambiente seguro, respetuoso y cercano. Ha sido un proceso valioso para mí.",
    name: "Paciente",
    detail: "Sesiones individuales",
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-section__bg"></div>

      <div className="container testimonials-section__content">
        <div className="testimonials-section__header">
          <span className="testimonials-section__eyebrow">Testimonios</span>

          <div className="testimonials-section__heading-block">
            <span className="testimonials-section__accent-line"></span>
            <h2 className="testimonials-section__title">
              Un espacio que acompaña con escucha, sensibilidad y presencia
            </h2>
          </div>

          <p className="testimonials-section__description">
            Cada proceso se vive de forma distinta, pero todos merecen un espacio
            seguro, profesional y humano donde sentirse acompañado.
          </p>
        </div>

        <div className="testimonials-section__grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={index}>
              <div className="testimonial-card__quote-mark">“</div>

              <p className="testimonial-card__text">{item.quote}</p>

              <div className="testimonial-card__footer">
                <span className="testimonial-card__name">{item.name}</span>
                <span className="testimonial-card__divider"></span>
                <span className="testimonial-card__detail">{item.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;