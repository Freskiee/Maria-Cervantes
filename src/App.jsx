import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <section id="trust" className="section-placeholder">
          <div className="container">
            <h2 className="section-title">Bloque de confianza</h2>
            <p className="section-text">
              Aquí irá la franja con Psicología y Tanatología, atención presencial y online,
              enfoque emocional y confidencialidad.
            </p>
          </div>
        </section>

        <section id="about" className="section-placeholder section-soft">
          <div className="container">
            <h2 className="section-title">Sobre mí</h2>
            <p className="section-text">
              Aquí irá la presentación de María Cervantes, su enfoque, formación y espacio
              para credenciales.
            </p>
          </div>
        </section>

        <section id="services" className="section-placeholder">
          <div className="container">
            <h2 className="section-title">Servicios</h2>
            <p className="section-text">
              Aquí irán los servicios: psicoterapia individual, acompañamiento tanatológico,
              sesiones online y contención emocional en crisis.
            </p>
          </div>
        </section>

        <section id="contact" className="section-placeholder section-soft">
          <div className="container">
            <h2 className="section-title">Contacto</h2>
            <p className="section-text">
              Aquí irá el formulario, WhatsApp, correo, teléfono y dirección del consultorio.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;