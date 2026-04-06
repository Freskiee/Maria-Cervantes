import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AboutSection from "./components/AboutSection";
import HelpSection from './components/HelpSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HelpSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}

export default App;