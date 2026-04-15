import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import HelpSection from "./components/HelpSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import LegalModal from "./components/LegalModal";

function App() {
  const [legalModal, setLegalModal] = useState(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (legalModal) {
      body.classList.add("legal-modal-open");
      html.classList.add("legal-modal-open");
    } else {
      body.classList.remove("legal-modal-open");
      html.classList.remove("legal-modal-open");
    }

    return () => {
      body.classList.remove("legal-modal-open");
      html.classList.remove("legal-modal-open");
    };
  }, [legalModal]);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HelpSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer onOpenLegalModal={setLegalModal} />

      <LegalModal
        type={legalModal}
        isOpen={Boolean(legalModal)}
        onClose={() => setLegalModal(null)}
      />
    </>
  );
}

export default App;