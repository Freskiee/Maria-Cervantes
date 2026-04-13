import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/about-section.css";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);
  const topWaveRef = useRef(null);
  const bottomWaveRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1.2,
          },
        })
        .to(topWaveRef.current, {
          attr: {
            d: "M0,150 C140,235 320,20 620,95 C880,155 1120,195 1440,70 L1440,0 L0,0 Z",
          },
          ease: "none",
        })
        .to(topWaveRef.current, {
          attr: {
            d: "M0,135 C180,255 350,35 650,55 C900,75 1140,230 1440,100 L1440,0 L0,0 Z",
          },
          ease: "none",
        })
        .to(topWaveRef.current, {
          attr: {
            d: "M0,155 C170,220 330,45 620,72 C860,95 1120,205 1440,88 L1440,0 L0,0 Z",
          },
          ease: "none",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1.35,
          },
        })
        .to(bottomWaveRef.current, {
          attr: {
            d: "M0,105 C220,25 390,220 690,145 C980,75 1160,55 1440,135 L1440,220 L0,220 Z",
          },
          ease: "none",
        })
        .to(bottomWaveRef.current, {
          attr: {
            d: "M0,135 C250,60 410,205 700,175 C980,145 1140,15 1440,110 L1440,220 L0,220 Z",
          },
          ease: "none",
        })
        .to(bottomWaveRef.current, {
          attr: {
            d: "M0,120 C230,40 360,210 650,165 C920,120 1110,35 1440,120 L1440,220 L0,220 Z",
          },
          ease: "none",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-wave-section" id="about" ref={sectionRef}>
      <div className="about-wave about-wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            ref={topWaveRef}
            d="M0,150 C160,250 330,30 620,70 C860,100 1120,210 1440,90 L1440,0 L0,0 Z"
            fill="#2f86f6"
          />
        </svg>
      </div>

      <div className="container about-wave-content">
        <div className="about-wave-inner">
          <span className="about-wave-kicker">Sobre mí</span>

          <div className="about-wave-heading-block">
            <span className="about-wave-accent" aria-hidden="true">
              <span className="about-wave-accent-line"></span>
              <img
                src="/mariposa-navbar@2x.png"
                alt=""
                className="about-wave-accent-butterfly"
              />
              <span className="about-wave-accent-line"></span>
            </span>

            <h2 className="about-wave-title">CONOCE MÁS ACERCA DE MÍ</h2>
          </div>

          <div className="about-wave-text">
            <span className="about-wave-paragraph">
              Soy psicóloga y tanatóloga, especializada en el acompañamiento
              terapéutico de procesos de duelo, pérdidas y crisis emocionales.
            </span>

            <span className="about-wave-paragraph">
              Desde la intervención psicológica y el enfoque tanatológico,
              ofrezco un espacio seguro y humano para acompañarte en lo que estás
              atravesando, brindando contención y orientación profesional.
            </span>
          </div>
        </div>
      </div>

      <div className="about-wave about-wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            ref={bottomWaveRef}
            d="M0,120 C230,40 360,210 650,165 C920,120 1110,35 1440,120 L1440,220 L0,220 Z"
            fill="#77d7e6"
          />
        </svg>
      </div>
    </section>
  );
}

export default AboutSection;