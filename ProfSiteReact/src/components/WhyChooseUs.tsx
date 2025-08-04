import './WhyChooseUs.css';
import { useRevealOnScroll } from './useRevealOnScroll';
import { useState } from 'react';

const services = [
  {
    name: 'YAC Petroleum',
    icon: '⛽',
    shortDesc: 'Premier energy trading company specializing in petroleum products across Africa',
    fullDesc: 'YAC Petroleum is a premier energy trading company specializing in the wholesale supply of petroleum products across Africa. With a robust global network, efficient logistics, and deep market expertise, we empower businesses and industries with reliable fuel solutions to drive economic growth. Our comprehensive portfolio includes gasoline, diesel, jet fuel, and other refined products, ensuring we meet the diverse energy needs of our clients.'
  },
  {
    name: 'YAC Mining',
    icon: '⛏️',
    shortDesc: 'Responsible exploration and extraction of valuable natural resources',
    fullDesc: 'YAC Mining is dedicated to the responsible exploration and extraction of valuable natural resources. We focus on sustainable mining practices that balance profitability with environmental stewardship and community development. With a strong commitment to safety, innovation, and regulatory compliance, YAC Mining delivers long-term value in minerals such as gold, bauxite, and other critical commodities essential to global markets.'
  },
  {
    name: 'YAC Commodities',
    icon: '🌾',
    shortDesc: 'Global trade specializing in raw materials and agricultural products',
    fullDesc: 'YAC Commodities operates at the heart of global trade, specializing in the sourcing, supply, and distribution of essential raw materials and agricultural products. We connect producers and buyers across borders, ensuring efficiency, quality assurance, and timely delivery. Backed by market intelligence and strong supplier networks, we support industries in accessing the commodities they need to thrive.'
  },
  {
    name: 'YAC Construction',
    icon: '🏗️',
    shortDesc: 'Innovative infrastructure solutions for modern development needs',
    fullDesc: 'YAC Construction is building the future through innovative, reliable, and high-quality infrastructure solutions. From roads and commercial buildings to residential developments and industrial facilities, we execute each project with precision and professionalism. Our focus is on delivering durable, sustainable structures that meet both modern needs and long-term investment goals.'
  },
  {
    name: 'YAC Trading',
    icon: '📦',
    shortDesc: 'Trusted gateway for general trade across multiple sectors',
    fullDesc: 'YAC Trading serves as a trusted gateway for general trade across multiple sectors. We facilitate the import and export of goods, manage supply chains, and ensure the smooth flow of products from source to market. With a strong commitment to quality, transparency, and timely execution, YAC Trading helps businesses expand their reach and operate efficiently in local and international markets.'
  }
];

const WhyChooseUs = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const revealRef = useRevealOnScroll();

  const toggleServiceDetails = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section className="why-choose-us reveal-on-scroll" id="services" ref={revealRef}>
      <div className="container">
        <h2>Why Choose Us?</h2>
        <p className="services-subtitle">Comprehensive investment solutions across multiple sectors</p>
        
        <div className="services-tabs-container">
          <div className="services-tabs">
            {services.map((service, idx) => (
              <div 
                className={`service-tab ${expandedService === idx ? 'expanded' : ''}`} 
                key={idx}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-short-desc">{service.shortDesc}</p>
                
                {expandedService === idx && (
                  <div className="service-full-desc">
                    <p>{service.fullDesc}</p>
                  </div>
                )}
                
                <button 
                  className="learn-more-btn"
                  onClick={() => toggleServiceDetails(idx)}
                >
                  {expandedService === idx ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 