import './About.css';
import { FaFlask, FaBullseye, FaShieldAlt } from 'react-icons/fa';
import { useRevealOnScroll } from './useRevealOnScroll';

const About = () => {
  const revealRef = useRevealOnScroll();
  return (
    <section className="about reveal-on-scroll" id="about" ref={revealRef}>
      <div className="container about-flex">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Investment Team"
          />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are a leading investment firm dedicated to helping individuals and businesses achieve
            their financial goals through innovative investment solutions and expert guidance.
          </p>
          <div className="about-section">
            <div className="about-icon"><FaFlask /></div>
            <div>
              <h3>Mission</h3>
              <p>
                To empower our clients to build and preserve wealth through trusted investment
                strategies and exceptional service.
              </p>
            </div>
          </div>
          <div className="about-section">
            <div className="about-icon"><FaBullseye /></div>
            <div>
              <h3>Vision</h3>
              <p>
                To be the preferred investment partner, delivering sustainable growth and financial
                security for our clients.
              </p>
            </div>
          </div>
          <div className="about-section">
            <div className="about-icon"><FaShieldAlt /></div>
            <div>
              <h3>Core Values</h3>
              <ul className="core-values">
                <li><strong>Integrity:</strong> We act with honesty and transparency in all our dealings.</li>
                <li><strong>Excellence:</strong> We strive for the highest standards in everything we do.</li>
                <li><strong>Innovation:</strong> We embrace new ideas to deliver better investment outcomes.</li>
                <li><strong>Client Focus:</strong> Your success is our success.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 