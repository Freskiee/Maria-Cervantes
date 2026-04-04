import { services } from '../data/siteData';

const ServicesSection = function () {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-eyebrow">Servicios</p>
          <h2>Un acompañamiento pensado para tu proceso</h2>
          <p className="section-text">
            Servicios diseñados para brindarte atención profesional, humana y clara.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="service-card h-100 p-4">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>{service.modality}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;