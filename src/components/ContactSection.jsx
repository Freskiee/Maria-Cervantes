import { useState } from "react";
import RevealOnScroll from "../components/RevealOnScroll";
import "../styles/contact-section.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgjvygb";

const consultationReasons = [
  "Duelo por fallecimiento de un ser querido",
  "Enfermedad grave o terminal (propia o de un familiar)",
  "Duelo por suicidio o muerte repentina",
  "Ruptura o término de relación amorosa",
  "Jubilación o despido laboral",
  "Migración o cambio de país",
];

function ContactSection() {
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría solicitar información para agendar una sesión."
  );

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    motivo: "",
    mensaje: "",
  });

  const [status, setStatus] = useState({
    sending: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
          telefono: formData.telefono,
          correo: formData.correo,
          motivo_consulta: formData.motivo,
          mensaje: formData.mensaje,
          _subject: "Nueva solicitud de contacto desde la página web",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.errors?.[0]?.message ||
            "No se pudo enviar tu solicitud. Intenta nuevamente."
        );
      }

      setStatus({
        sending: false,
        success: true,
        error: "",
      });

      setFormData({
        nombre: "",
        telefono: "",
        correo: "",
        motivo: "",
        mensaje: "",
      });
    } catch (error) {
      setStatus({
        sending: false,
        success: false,
        error:
          error.message ||
          "Ocurrió un problema al enviar tu solicitud. Intenta de nuevo.",
      });
    }
  };

  return (
    <section className="contact-modern-section" id="contact">
      <div className="container">
        <div className="contact-modern-blob">
          <div className="contact-modern-card__panel">
            <RevealOnScroll className="reveal-soft" delay={60} y={10}>
              <div className="contact-modern-card__panel-inner">
                <span className="contact-modern-card__eyebrow">Contacto</span>

                <span className="contact-modern-card__accent" aria-hidden="true">
                  <span className="contact-modern-card__accent-line"></span>
                  <img
                    src="/mariposa-navbar@2x.png"
                    alt=""
                    className="contact-modern-card__accent-butterfly"
                  />
                  <span className="contact-modern-card__accent-line"></span>
                </span>

                <h2 className="contact-modern-card__title">
                  Da el primer paso hacia tu proceso de acompañamiento
                </h2>
                <br />

                {/* <p className="contact-modern-card__text">
                  Si deseas agendar una sesión o recibir más información, puedes
                  escribirme por WhatsApp o mediante el formulario de contacto.
                  Estoy disponible para brindarte un espacio de acompañamiento
                  terapéutico en duelo y pérdida.
                </p> */}

                <div className="contact-modern-card__info">
                  <div className="contact-modern-card__info-item">
                    <span className="contact-modern-card__icon-wrap">
                      <img
                        src="/mariposa-navbar@2x.png"
                        alt=""
                        className="contact-modern-card__icon-butterfly"
                      />
                    </span>
                    <div>
                      <span className="contact-modern-card__label">
                        Teléfono / WhatsApp
                      </span>
                      <a
                        href="tel:5550561776"
                        className="contact-modern-card__value"
                      >
                        55 5056 1776
                      </a>
                    </div>
                  </div>

                  <div className="contact-modern-card__info-item">
                    <span className="contact-modern-card__icon-wrap">
                      <img
                        src="/mariposa-navbar@2x.png"
                        alt=""
                        className="contact-modern-card__icon-butterfly"
                      />
                    </span>
                    <div>
                      <span className="contact-modern-card__label">Correo</span>
                      <a
                        href="mailto:forastieri@psicotanato.com"
                        className="contact-modern-card__value"
                      >
                        forastieri@psicotanato.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-modern-card__info-item">
                    <span className="contact-modern-card__icon-wrap">
                      <img
                        src="/mariposa-navbar@2x.png"
                        alt=""
                        className="contact-modern-card__icon-butterfly"
                      />
                    </span>
                    <div>
                      <span className="contact-modern-card__label">Atención</span>
                      <span className="contact-modern-card__value">
                        Presencial y online
                      </span>
                    </div>
                  </div>

                  <div className="contact-modern-card__info-item">
                    <span className="contact-modern-card__icon-wrap">
                      <img
                        src="/mariposa-navbar@2x.png"
                        alt=""
                        className="contact-modern-card__icon-butterfly"
                      />
                    </span>
                    <div>
                      <span className="contact-modern-card__label">
                        Consultorio
                      </span>
                      <span className="contact-modern-card__value">
                        Benito Juárez, CDMX
                      </span>
                    </div>
                  </div>
                </div>

                <div className="contact-modern-card__actions">
                  <a
                    href={`https://wa.me/525550561776?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-modern-card__secondary"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>Escribir por WhatsApp</span>
                  </a>

                  <a
                    href="https://www.google.com/maps/place/Comunal+58,+Acacias,+Benito+Ju%C3%A1rez,+03240+Ciudad+de+M%C3%A9xico,+CDMX/@19.3640344,-99.1779236,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ff93a59c361b:0xbe2c489abd12fb3!8m2!3d19.3640294!4d-99.1753487!16s%2Fg%2F11cppbxgfj?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-modern-card__ghost"
                  >
                    <i className="bi bi-geo-alt"></i>
                    <span>Ver ubicación</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="contact-modern-form-wrap">
            <RevealOnScroll className="reveal-image" delay={150} y={12} scale={0.994}>
              <div className="contact-modern-form-shell">
                {status.success ? (
                  <div
                    className="contact-modern-success"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="contact-modern-success__icon">
                      <i className="bi bi-envelope-check"></i>
                    </div>

                    <h3 className="contact-modern-success__title">
                      Tu solicitud fue enviada correctamente
                    </h3>

                    <p className="contact-modern-success__text">
                      Gracias por escribir. Tu mensaje ha sido recibido y será
                      respondido con la atención y sensibilidad que tu proceso
                      merece.
                    </p>

                    <button
                      type="button"
                      className="contact-modern-success__button"
                      onClick={() =>
                        setStatus({
                          sending: false,
                          success: false,
                          error: "",
                        })
                      }
                    >
                      Enviar otra solicitud
                    </button>
                  </div>
                ) : (
                  <div className="contact-modern-form-card">
                    <h3 className="contact-modern-form-card__title">
                      Solicita información
                    </h3>

                    <form className="contact-modern-form" onSubmit={handleSubmit}>
                      <div className="contact-modern-form__field">
                        <label htmlFor="name">Nombre</label>
                        <input
                          type="text"
                          id="name"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                          disabled={status.sending}
                        />
                      </div>

                      <div className="contact-modern-form__field">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                          type="tel"
                          id="phone"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="Tu teléfono"
                          required
                          disabled={status.sending}
                        />
                      </div>

                      <div className="contact-modern-form__field">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                          type="email"
                          id="email"
                          name="correo"
                          value={formData.correo}
                          onChange={handleChange}
                          placeholder="Tu correo"
                          required
                          disabled={status.sending}
                        />
                      </div>

                      <div className="contact-modern-form__field">
                        <label htmlFor="service">Motivo de consulta</label>
                        <select
                          id="service"
                          name="motivo"
                          value={formData.motivo}
                          onChange={handleChange}
                          required
                          disabled={status.sending}
                        >
                          <option value="" disabled>
                            Selecciona una opción
                          </option>
                          {consultationReasons.map((reason) => (
                            <option key={reason} value={reason}>
                              {reason}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="contact-modern-form__field">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                          id="message"
                          name="mensaje"
                          rows="5"
                          value={formData.mensaje}
                          onChange={handleChange}
                          placeholder="Cuéntame brevemente en qué puedo apoyarte"
                          required
                          disabled={status.sending}
                        ></textarea>
                      </div>

                      {status.error ? (
                        <p className="contact-modern-form__error" role="alert">
                          {status.error}
                        </p>
                      ) : null}

                      <button
                        type="submit"
                        className="contact-modern-form__submit"
                        disabled={status.sending}
                      >
                        <i
                          className={`bi ${
                            status.sending ? "bi-hourglass-split" : "bi-send"
                          }`}
                        ></i>
                        <span>
                          {status.sending ? "Enviando..." : "Enviar solicitud"}
                        </span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;