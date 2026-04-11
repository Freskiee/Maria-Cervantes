import heroPhoto from "../assets/img/hero-photo.jpg";
import "../styles/hero-section.css";

function HeroSection() {
    const whatsappMessage = encodeURIComponent(
        "Hola, me gustaría solicitar información para agendar una sesión."
    );

    return (
        <>
            <section id="hero" className="hero-section">
                <div className="hero-bg-shape hero-shape-1"></div>
                <div className="hero-bg-shape hero-shape-2"></div>
                <div className="hero-bg-glow hero-glow-1"></div>
                <div className="hero-bg-glow hero-glow-2"></div>

                <div className="container hero-section__container position-relative">
                    <div className="row align-items-center gy-5 hero-section__row">
                        <div className="col-lg-6">
                            <div className="hero-copy">
                                <span className="hero-eyebrow">
                                    Acompañamiento psicológico y tanatológico
                                </span>

                                <h1 className="hero-title mt-3">
                                    Un espacio seguro para acompañarte en procesos de duelo,
                                    pérdida y transición emocional
                                </h1>

                                <p className="hero-description mt-4">
                                    Atención profesional, cálida y humana para ayudarte a
                                    transitar momentos difíciles con claridad, contención
                                    emocional y acompañamiento terapéutico.
                                </p>

                                <div className="hero-actions d-flex flex-column flex-sm-row gap-3 mt-4">
                                    <a href="#contact" className="hero-btn hero-btn--primary">
                                        Agendar sesión
                                    </a>

                                    <a
                                        href={`https://wa.me/525550561776?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hero-btn hero-btn--ghost"
                                    >
                                        <i className="bi bi-whatsapp"></i>
                                        <span>Enviar WhatsApp</span>
                                    </a>
                                </div>

                                <ul className="hero-highlights list-unstyled mt-4 mb-0">
                                    <li>
                                        <i className="bi bi-bluesky"></i>
                                        <span>Atención presencial y online</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-bluesky"></i>
                                        <span>
                                            Especialidad en duelo, pérdidas y crisis emocionales
                                        </span>
                                    </li>
                                    <li>
                                        <i className="bi bi-bluesky"></i>
                                        <span>
                                            Acompañamiento profesional, cercano y sin juicio
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="hero-visual">
                                <div className="hero-image-frame">
                                    <div className="hero-image-card">
                                        <img
                                            src={heroPhoto}
                                            alt="María Cervantes"
                                            className="img-fluid hero-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTÓN FLOTANTE SOLO MÓVIL */}
            <a
                href={`https://wa.me/525550561776?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="hero-whatsapp-float"
                aria-label="Escribir por WhatsApp"
            >
                <i className="bi bi-whatsapp"></i>
            </a>
        </>
    );
}

export default HeroSection;