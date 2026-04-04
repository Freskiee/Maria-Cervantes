function HeroSection() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg-shape hero-shape-1"></div>
            <div className="hero-bg-shape hero-shape-2"></div>

            <div className="container position-relative">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-6">
                        <span className="section-eyebrow">
                            Acompañamiento psicológico y tanatológico
                        </span>

                        <h1 className="hero-title mt-3">
                            Un espacio seguro para acompañarte en procesos de duelo, pérdida y transición emocional
                        </h1>

                        <p className="hero-description mt-4">
                            Atención profesional, cálida y humana para ayudarte a transitar momentos
                            difíciles con claridad, contención emocional y acompañamiento terapéutico.
                        </p>

                        <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                            <a href="#contact" className="btn btn-primary-soft">
                                Agendar sesión
                            </a>

                            <a
                                href="https://wa.me/525550561776"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-outline-soft"
                            >
                                Enviar WhatsApp
                            </a>
                        </div>

                        <ul className="hero-highlights list-unstyled mt-4 mb-0">
                            <li>Atención presencial y online</li>
                            <li>Especialidad en duelo, pérdidas y crisis emocionales</li>
                            <li>Acompañamiento profesional, cercano y sin juicio</li>
                        </ul>
                    </div>

                    <div className="col-lg-6">
                        <div className="hero-image-card">
                            <img
                                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80"
                                alt="Retrato profesional cálido para la sección principal"
                                className="img-fluid hero-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;