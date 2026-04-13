import "../styles/contact-section.css";

function ContactSection() {
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría solicitar información para agendar una sesión."
  );

  return (
    <section className="contact-modern-section" id="contact">
      <div className="container">
        <div className="contact-modern-blob">
          <div className="contact-modern-card__panel">
            <span className="contact-modern-card__eyebrow">Contacto</span>

            <h2 className="contact-modern-card__title">
              Da el primer paso hacia un espacio de acompañamiento
            </h2>

            <p className="contact-modern-card__text">
              Si deseas agendar una sesión o recibir más información, puedes
              escribirme por formulario o por WhatsApp. Será un gusto
              acompañarte con escucha, claridad y calidez.
            </p>

            <div className="contact-modern-card__info">
              <div className="contact-modern-card__info-item">
                <span className="contact-modern-card__icon">✦</span>
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
                <span className="contact-modern-card__icon">✦</span>
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
                <span className="contact-modern-card__icon">✦</span>
                <div>
                  <span className="contact-modern-card__label">Atención</span>
                  <span className="contact-modern-card__value">
                    Presencial y Online
                  </span>
                </div>
              </div>

              <div className="contact-modern-card__info-item">
                <span className="contact-modern-card__icon">✦</span>
                <div>
                  <span className="contact-modern-card__label">
                    Consultorio
                  </span>
                  <span className="contact-modern-card__value">
                    Zona Sur, CDMX
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
                <span>WhatsApp</span>
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

          <div className="contact-modern-form-wrap">
            <div className="contact-modern-form-card">
              <h3 className="contact-modern-form-card__title">
                Solicita información
              </h3>

              <form className="contact-modern-form">
                <div className="contact-modern-form__field">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="contact-modern-form__field">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu correo"
                  />
                </div>

                <div className="contact-modern-form__field">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Tu teléfono"
                  />
                </div>

                <div className="contact-modern-form__field">
                  <label htmlFor="service">Motivo de consulta</label>
                  <select id="service" name="service" defaultValue="">
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="duelo">Duelo y pérdida</option>
                    <option value="tanatologia">
                      Acompañamiento tanatológico
                    </option>
                    <option value="ansiedad">
                      Ansiedad y crisis emocionales
                    </option>
                    <option value="transiciones">
                      Cambios de vida y transiciones
                    </option>
                    <option value="contencion">Contención emocional</option>
                  </select>
                </div>

                <div className="contact-modern-form__field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Cuéntame brevemente en qué puedo acompañarte"
                  ></textarea>
                </div>

                <button type="submit" className="contact-modern-form__submit">
                  Enviar solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;