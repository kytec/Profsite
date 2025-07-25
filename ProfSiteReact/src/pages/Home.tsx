import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import About from '../components/About';
import Stats from '../components/Stats';
import ContactForm from '../components/ContactForm';

const Home = () => (
  <>
    <Hero />
    <About />
    <Stats />
    <section id="contact" className="contact-section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Contact Us</h2>
        <ContactForm />
      </div>
    </section>
    <WhyChooseUs />
  </>
);

export default Home; 