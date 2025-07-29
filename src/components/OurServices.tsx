import './OurServices.css';

const services = [
  'Mining',
  'Road and Building Construction',
  'Asset Management',
  'Fund Management',
  'Capital Market Services',
  'Investment Services',
  'General Trading',
  'Import and Export of General Goods',
];

const OurServices = () => (
  <section className="our-services reveal-on-scroll" id="our-services">
    <div className="container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            {service}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurServices; 