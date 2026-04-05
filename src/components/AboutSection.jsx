import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/about-section.css";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);
  const waveTopRef = useRef(null);
  const waveBottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(waveTopRef.current, {
        y: -35,
        x: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(waveBottomRef.current, {
        y: 35,
        x: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-wave-section" id="about" ref={sectionRef}>
      <div className="about-wave about-wave-top" ref={waveTopRef}>
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            d="M0,150 C160,250 330,30 620,70 C860,100 1120,210 1440,90 L1440,0 L0,0 Z"
            fill="#2f86f6"
          />
        </svg>
      </div>

      <div className="container about-wave-content">
        <div className="about-wave-inner">
          <span className="about-wave-kicker">Sobre mí</span>
          <h2 className="about-wave-title">Conoce más acerca de mí</h2>
          <p className="about-wave-text">
            Soy psicóloga y tanatóloga, y acompaño a personas en procesos de
            duelo, pérdida, crisis emocionales y transición vital. Mi propósito
            es brindarte un espacio seguro, profesional y humano donde puedas
            comprender lo que estás viviendo con claridad y contención.
          </p>
        </div>
      </div>

      <div className="about-wave about-wave-bottom" ref={waveBottomRef}>
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            d="M0,120 C230,40 360,210 650,165 C920,120 1110,35 1440,120 L1440,220 L0,220 Z"
            fill="#77d7e6"
          />
        </svg>
      </div>
    </section>
  );
}

export default AboutSection;