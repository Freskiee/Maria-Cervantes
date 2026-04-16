import { useState } from "react";
import RevealOnScroll from "../components/RevealOnScroll";
import "../styles/testimonials-section.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgaegaw";

function TestimonialsSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    testimonio: "",
    anonimo: false,
  });

  const [status, setStatus] = useState({
    sending: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      sending: true,
      success: false,
      error: "",
    });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          testimonio: formData.testimonio,
          anonimo: formData.anonimo ? "Sí" : "No",
          _subject: "Nuevo testimonio desde la página web",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.errors?.[0]?.message ||
            "No se pudo enviar el testimonio. Intenta nuevamente."
        );
      }

      setStatus({
        sending: false,
        success: true,
        error: "",
      });

      setFormData({
        nombre: "",
        testimonio: "",
        anonimo: false,
      });
    } catch (error) {
      setStatus({
        sending: false,
        success: false,
        error:
          error.message ||
          "Ocurrió un problema al enviar tu testimonio. Intenta de nuevo.",
      });
    }
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-section__bg"></div>

      <div className="container testimonials-section__content">
        <div className="testimonials-section__header">
          <RevealOnScroll className="reveal-soft" delay={20} y={10}>
            <span className="testimonials-section__eyebrow">Testimonios</span>
          </RevealOnScroll>

          <RevealOnScroll className="reveal-soft" delay={90} y={10}>
            <span className="testimonials-section__accent" aria-hidden="true">
              <span className="testimonials-section__accent-line"></span>
              <img
                src="/mariposa-navbar@2x.png"
                alt=""
                className="testimonials-section__accent-butterfly"
              />
              <span className="testimonials-section__accent-line"></span>
            </span>
          </RevealOnScroll>
        </div>

        <div className="testimonials-section__layout">
          <div className="testimonials-section__copy">
            <RevealOnScroll className="reveal-left" delay={120} scale={0.994}>
              <div className="testimonials-section__copy-inner">
                <h2 className="testimonials-section__title">
                  Un espacio de escucha, sensibilidad y acompañamiento
                  terapéutico, donde cada proceso es recibido con respeto y
                  presencia.
                </h2>

                <blockquote className="testimonials-section__quote">
                  Si has transitado un proceso de acompañamiento, te invito a
                  compartir tu experiencia; tu testimonio puede acompañar y
                  brindar esperanza a otras personas en su propio camino de
                  duelo y transformación.
                </blockquote>
              </div>
            </RevealOnScroll>
          </div>

          <div className="testimonials-section__form-wrap">
            <RevealOnScroll className="reveal-right" delay={170} scale={0.992}>
              <div className="testimonials-section__form-shell">
                {status.success ? (
                  <div
                    className="testimonials-success"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="testimonials-success__icon">
                      <i className="bi bi-envelope-check"></i>
                    </div>

                    <h3 className="testimonials-success__title">
                      Gracias por compartir tu experiencia
                    </h3>

                    <p className="testimonials-success__text">
                      Tu testimonio ha sido enviado correctamente. Será recibido
                      con respeto, sensibilidad y confidencialidad.
                    </p>

                    <button
                      type="button"
                      className="testimonials-success__button"
                      onClick={() =>
                        setStatus({
                          sending: false,
                          success: false,
                          error: "",
                        })
                      }
                    >
                      Enviar otro testimonio
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="testimonials-form">
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
                      <label htmlFor="testimonial-name">
                        Nombre (opcional)
                      </label>
                      <input
                        type="text"
                        id="testimonial-name"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Puedes dejarlo en blanco"
                        disabled={status.sending}
                      />
                    </div>

                    <div className="testimonials-form__field">
                      <label htmlFor="testimonial-message">Tu testimonio</label>
                      <textarea
                        id="testimonial-message"
                        name="testimonio"
                        rows="6"
                        value={formData.testimonio}
                        onChange={handleChange}
                        placeholder="Escribe aquí tu experiencia..."
                        required
                        disabled={status.sending}
                      ></textarea>
                    </div>

                    <div className="testimonials-form__checks">
                      <label className="testimonials-form__check">
                        <input
                          type="checkbox"
                          name="anonimo"
                          checked={formData.anonimo}
                          onChange={handleChange}
                          disabled={status.sending}
                        />
                        <span
                          className="testimonials-form__check-box"
                          aria-hidden="true"
                        ></span>
                        <span>Prefiero compartirlo de forma anónima</span>
                      </label>
                    </div>

                    {status.error ? (
                      <p className="testimonials-form__error" role="alert">
                        {status.error}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      className="testimonials-form__submit"
                      disabled={status.sending}
                    >
                      <i
                        className={`bi ${
                          status.sending
                            ? "bi-hourglass-split"
                            : "bi-envelope-paper"
                        }`}
                      ></i>
                      <span>
                        {status.sending
                          ? "Enviando..."
                          : "Compartir mi testimonio"}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;