import './About.css';
import { FaFlask, FaBullseye, FaShieldAlt, FaUserCheck, FaStar, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { useRevealOnScroll } from './useRevealOnScroll';

const About = () => {
  const revealRef = useRevealOnScroll();
  return (
    <section className="about reveal-on-scroll" id="about" ref={revealRef}>
      <div className="container">
        <div className="about-flex">
          <div className="about-img">
            <img
              src="/images/aboutus.jpg"
              alt="Investment Team"
            />
          </div>
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              At YAC Investments Limited, we are more than just an investment company—we are your trusted financial partner 
              and a leading provider of comprehensive investment solutions. We are committed to excellence in providing 
              high-quality investment services, asset management, and personalized financial guidance to individuals, 
              businesses, and institutions, whether for everyday investment essentials or bulk financial services.
            </p>
            
            {/* Mission and Vision Sections */}
            <div className="mission-vision-section">
              <div className="mission-section">
                <div className="mission-icon">
                  <FaFlask />
                </div>
                <div className="mission-content">
                  <h3>Mission</h3>
                  <p>
                    We seek to be the most reliable and trusted distributor of petroleum products in Africa, 
                    delivering exceptional service and innovative energy solutions.
                  </p>
                </div>
              </div>
              
              <div className="vision-section">
                <div className="vision-icon">
                  <FaBullseye />
                </div>
                <div className="vision-content">
                  <h3>Vision</h3>
                  <p>
                    To be the preferred energy distribution partner across Africa, known for efficiency, 
                    sustainability, and excellence in fuel supply and management.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Core Values Section */}
            <div className="core-values-section">
              <h3>Core Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">
                    <FaHandshake />
                  </div>
                  <div className="value-content">
                    <h4>Trust</h4>
                    <p>We believe in building strong, lasting relationships with our clients, partners, and communities through transparency and dependability.</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <FaUserCheck />
                  </div>
                  <div className="value-content">
                    <h4>Honesty</h4>
                    <p>Integrity is the foundation of our operations. We communicate openly and act with fairness and accountability at every level.</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <FaShieldAlt />
                  </div>
                  <div className="value-content">
                    <h4>Reliability</h4>
                    <p>Our clients count on us to deliver—on time, on budget, and to the highest standard.</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <FaLightbulb />
                  </div>
                  <div className="value-content">
                    <h4>Innovation</h4>
                    <p>We embrace change and continuously seek smarter, more efficient ways to solve problems, improve services, and create value.</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <FaStar />
                  </div>
                  <div className="value-content">
                    <h4>Excellence</h4>
                    <p>We strive for excellence in everything we do, from project execution to customer service. Quality and professionalism define the YAC standard.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 