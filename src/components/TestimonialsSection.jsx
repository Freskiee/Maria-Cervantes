import "../styles/testimonials-section.css";

function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-section__bg"></div>

      <div className="container testimonials-section__content">
        <div className="testimonials-section__header">
          <span className="testimonials-section__eyebrow">Testimonios</span>

          <span className="testimonials-section__accent" aria-hidden="true">
            <span className="testimonials-section__accent-line"></span>
            <img
              src="/mariposa-navbar@2x.png"
              alt=""
              className="testimonials-section__accent-butterfly"
            />
            <span className="testimonials-section__accent-line"></span>
          </span>
        </div>

        <div className="testimonials-section__layout">
          <div className="testimonials-section__copy">
            <h2 className="testimonials-section__title">
              Un espacio de escucha, sensibilidad y acompañamiento terapéutico,
              donde cada proceso es recibido con respeto y presencia.
            </h2>

            <blockquote className="testimonials-section__quote">
              Si has transitado un proceso de acompañamiento, te invito a
              compartir tu experiencia; tu testimonio puede acompañar y brindar
              esperanza a otras personas en su propio camino de duelo y
              transformación.
            </blockquote>
          </div>

          <div className="testimonials-section__form-wrap">
            <form
              action="https://formspree.io/f/xlgaegaw"
              method="POST"
              className="testimonials-form"
            >
              <div className="testimonials-form__intro">
                <h3 className="testimonials-form__title">
                  Comparte tu experiencia
                </h3>
                <p className="testimonials-form__text">
                  Puedes dejar tu testimonio de forma anónima si así lo
                  prefieres.
                </p>
              </div>

              <div className="testimonials-form__field">
                <label htmlFor="testimonial-name">Nombre (opcional)</label>
                <input
                  type="text"
                  id="testimonial-name"
                  name="nombre"
                  placeholder="Puedes dejarlo en blanco"
                />
              </div>

              <div className="testimonials-form__field">
                <label htmlFor="testimonial-message">Tu testimonio</label>
                <textarea
                  id="testimonial-message"
                  name="testimonio"
                  rows="6"
                  placeholder="Escribe aquí tu experiencia..."
                  required
                ></textarea>
              </div>

              <div className="testimonials-form__checks">
                <label className="testimonials-form__check">
                  <input type="checkbox" name="anonimo" value="Sí" />
                  <span>Prefiero que se comparta como anónimo</span>
                </label>
              </div>

              <input
                type="hidden"
                name="_subject"
                value="Nuevo testimonio desde la página web"
              />

              <button type="submit" className="testimonials-form__submit">
                <i className="bi bi-envelope-paper"></i>
                <span>Dar mi testimonio anónimo</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;