import './WhyChooseUs.css';
import { useRevealOnScroll } from './useRevealOnScroll';

const WhyChooseUs = () => {
  const revealRef = useRevealOnScroll();
  return (
    <section className="why-choose-us reveal-on-scroll" id="services" ref={revealRef}>
      <div className="container">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <div className="icon">💼</div>
            <h3>YAC Petroleum</h3>
            <p>YAC Petroleum is a premier energy trading company specializing in the wholesale supply of petroleum products across Africa. With a robust global network, efficient logistics, and deep market expertise, we empower businesses and industries with reliable fuel solutions to drive economic growth.</p>
          </div>
          <div className="feature">
            <div className="icon">📈</div>
            <h3> YAC Mining</h3>
            <p>YAC Mining is dedicated to the responsible exploration and extraction of valuable natural resources. We focus on sustainable mining practices that balance profitability with environmental stewardship and community development. With a strong commitment to safety, innovation, and regulatory compliance, YAC Mining delivers long-term value in minerals such as gold, bauxite, and other critical commodities essential to global markets.</p>
          </div>
          <div className="feature">
            <div className="icon">🤝</div>
            <h3>YAC Commodities</h3>
            <p>YAC Commodities operates at the heart of global trade, specializing in the sourcing, supply, and distribution of essential raw materials and agricultural products. We connect producers and buyers across borders, ensuring efficiency, quality assurance, and timely delivery. Backed by market intelligence and strong supplier networks, we support industries in accessing the commodities they need to thrive.</p>
          </div>
          <div className="feature">
            <div className="icon">💼</div>
            <h3>YAC Construction</h3>
            <p>YAC Construction is building the future through innovative, reliable, and high-quality infrastructure solutions. From roads and commercial buildings to residential developments and industrial facilities, we execute each project with precision and professionalism. Our focus is on delivering durable, sustainable structures that meet both modern needs and long-term investment goals.</p>
          </div>
          <div className="feature">
            <div className="icon">💼</div>
            <h3>YAC Trading</h3>
            <p>YAC Trading serves as a trusted gateway for general trade across multiple sectors. We facilitate the import and export of goods, manage supply chains, and ensure the smooth flow of products from source to market. With a strong commitment to quality, transparency, and timely execution, YAC Trading helps businesses expand their reach and operate efficiently in local and international markets.</p>
          </div>
        </div>
        <div className="services-list">
          {/* <h4>List of Services/Products:</h4>
          <ul>
            <li>MINING</li>
            <li>ROAD AND BUILDING CONSTRUCTION</li>
            <li>ASSET MANAGEMENT</li>
            <li>FUND MANAGEMENT</li>
            <li>CAPITAL MARKET SERVICES</li>
            <li>INVESTMENT SERVICES</li>
            <li>GENERAL TRADING</li>
            <li>IMPORT AND EXPORT OF GENERAL GOODS</li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 