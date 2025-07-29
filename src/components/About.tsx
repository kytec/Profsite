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
            YAC Investments Limited is a forward-thinking financial powerhouse committed to unlocking strategic value across private equity, asset management, and capital markets.
            Rooted in expertise and driven by innovation, we provide clients with tailored investment solutions that catalyze growth and safeguard long-term wealth.
            YAC Investments blends financial acumen with visionary leadership; championing prosperity, resilience, and sustainable impact for our partners and stakeholders.
          </p>
          <div className="about-section">
            <div className="about-icon"><FaFlask /></div>
            <div>
                <h3>Mission Statement</h3>
              <p>
              To be the most reliable and trusted distributor of petroleum products in Africa.
              </p>
            </div>
          </div>
          <div className="about-section">
            <div className="about-icon"><FaBullseye /></div>
            <div>
              <h3>Vision Statement</h3>
              <p>
              To be the preferred energy distribution partner across Africa, known for efficiency, sustainability, and excellence in fuel supply and management.
              </p>
            </div>
          </div>
          <div className="about-section">
            <div className="about-icon"><FaShieldAlt /></div>
            <div>
              <h3>Core Values</h3>
               <ul className="core-values">
                <li><strong>Trust:</strong> We believe in building strong, lasting relationships with our clients, partners, and communities through transparency and dependability.</li>
                <li><strong>Honesty:</strong> Integrity is the foundation of our operations. We communicate openly and act with fairness and accountability at every level.</li>
                <li><strong>Reliability:</strong> Our clients count on us to deliver—on time, on budget, and to the highest standard.</li>
                <li><strong>Innovation:</strong> We embrace change and continuously seek smarter, more efficient ways to solve problems, improve services, and create value.</li>
                <li><strong>Excellence:</strong>We strive for excellence in everything we do, from project execution to customer service. Quality and professionalism define the YAC standard.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 