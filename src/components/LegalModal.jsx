import { useEffect } from "react";
import "../styles/legal-modal.css";

function LegalModal({ isOpen, type, onClose }) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const content = {
        terms: {
            eyebrow: "Términos y condiciones",
            title: "Términos y condiciones",
            intro:
                "El presente sitio web tiene como finalidad brindar información sobre los servicios de acompañamiento terapéutico, psicológico y tanatológico ofrecidos por María Cervantes. Al navegar en este sitio, el usuario acepta las condiciones descritas a continuación.",
            sections: [
                {
                    heading: "1. Uso del sitio web",
                    text: "El contenido de este sitio es exclusivamente informativo y tiene como objetivo facilitar el acceso a información general sobre los servicios, modalidades de atención y medios de contacto. El uso del sitio debe realizarse de manera respetuosa y conforme a la ley.",
                },
                {
                    heading: "2. Naturaleza de la información",
                    text: "La información contenida en este sitio no sustituye una valoración clínica, psicológica o médica individual. Cada proceso terapéutico requiere una atención personalizada, por lo que cualquier orientación o contenido publicado tiene fines exclusivamente informativos.",
                },
                {
                    heading: "3. Solicitudes de contacto",
                    text: "El envío de formularios o mensajes a través de este sitio no constituye por sí mismo el establecimiento automático de una relación terapéutica o profesional. Toda solicitud será revisada y atendida de acuerdo con la disponibilidad y pertinencia del servicio.",
                },
                {
                    heading: "4. Propiedad intelectual",
                    text: "Los textos, elementos visuales, identidad gráfica, logotipos, imágenes, estructura y diseño del sitio son parte de la identidad profesional del servicio y no podrán ser reproducidos, distribuidos o utilizados sin autorización previa por escrito.",
                },
                {
                    heading: "5. Enlaces externos",
                    text: "Este sitio puede incluir enlaces a servicios de terceros, como WhatsApp, Google Maps o plataformas de formularios. El acceso y uso de dichos servicios está sujeto a los términos y políticas de privacidad de cada plataforma externa.",
                },
                {
                    heading: "6. Modificaciones",
                    text: "Los presentes términos y condiciones podrán ser actualizados o modificados en cualquier momento, sin previo aviso, para reflejar cambios en el sitio, en los servicios o en la normativa aplicable.",
                },
            ],
        },
        privacy: {
            eyebrow: "Aviso de privacidad",
            title: "Aviso de privacidad",
            intro:
                "En cumplimiento con la normativa aplicable en materia de protección de datos personales, se informa que los datos proporcionados a través de este sitio web serán tratados con confidencialidad, respeto y responsabilidad.",
            sections: [
                {
                    heading: "1. Datos que pueden recabarse",
                    text: "A través del formulario de contacto, se podrán recabar datos como: nombre, teléfono, correo electrónico, motivo de consulta y el mensaje que el usuario decida compartir.",
                },
                {
                    heading: "2. Finalidad del tratamiento",
                    text: "Los datos personales serán utilizados exclusivamente para dar seguimiento a solicitudes de información, brindar orientación inicial sobre los servicios ofrecidos, establecer contacto para agendar sesiones cuando así se solicite y responder mensajes enviados voluntariamente por el usuario.",
                },
                {
                    heading: "3. Confidencialidad",
                    text: "La información compartida será tratada de forma confidencial y no será vendida, cedida o transferida a terceros, salvo en los casos estrictamente necesarios para la operación técnica del sitio o por requerimiento legal de autoridad competente.",
                },
                {
                    heading: "4. Servicios de terceros",
                    text: "Este sitio puede utilizar herramientas externas para la recepción de formularios, mensajería o localización, como Formspree, WhatsApp o Google Maps. El uso de estas herramientas puede estar sujeto a las políticas de privacidad de cada proveedor.",
                },
                {
                    heading: "5. Derechos del usuario",
                    text: "El usuario podrá solicitar en cualquier momento información, corrección o eliminación de sus datos personales, escribiendo al correo electrónico de contacto publicado en este sitio.",
                },
                {
                    heading: "6. Cambios al aviso de privacidad",
                    text: "El presente aviso de privacidad podrá actualizarse en cualquier momento para reflejar cambios legales, técnicos o de operación del sitio web.",
                },
            ],
        },
    };

    const modalContent = content[type];

    if (!modalContent) return null;

    return (
        <div
            className="legal-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            onClick={onClose}
        >
            <div
                className="legal-modal__dialog"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="legal-modal__close"
                    aria-label="Cerrar"
                    onClick={onClose}
                >
                    <i className="bi bi-x-lg"></i>
                </button>

                <div className="legal-modal__header">
                    <span className="legal-modal__eyebrow">{modalContent.eyebrow}</span>

                    <div className="legal-modal__accent" aria-hidden="true">
                        <span className="legal-modal__accent-line"></span>
                        <img
                            src="/mariposa-navbar@2x.png"
                            alt=""
                            className="legal-modal__accent-butterfly"
                        />
                        <span className="legal-modal__accent-line"></span>
                    </div>

                    <h2 id="legal-modal-title" className="legal-modal__title">
                        {modalContent.title}
                    </h2>

                    <p className="legal-modal__intro">{modalContent.intro}</p>
                </div>

                <div className="legal-modal__body">
                    {modalContent.sections.map((section) => (
                        <section className="legal-modal__section" key={section.heading}>
                            <h3>{section.heading}</h3>
                            <p>{section.text}</p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LegalModal;