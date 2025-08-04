import './Stats.css';
import { useRevealOnScroll } from './useRevealOnScroll';
import { useState } from 'react';

const products = [
  { 
    name: 'Gasoline (PMS)', 
    icon: '⛽',
    shortDesc: 'Premium motor spirit for automotive engines',
    fullDesc: 'Our high-quality gasoline (PMS) is refined to meet international standards, providing optimal performance for all types of gasoline engines. We supply both regular and premium grades to meet your specific requirements.'
  },
  { 
    name: 'Gas oil (AGO)', 
    icon: '🛢️',
    shortDesc: 'Automotive gas oil for diesel engines',
    fullDesc: 'Automotive Gas Oil (AGO) is specifically formulated for diesel engines, offering excellent fuel efficiency and reduced emissions. Our AGO meets all regulatory standards and is available in various grades.'
  },
  { 
    name: 'Crude oil', 
    icon: '🛢️',
    shortDesc: 'Raw petroleum for processing and refining',
    fullDesc: 'We source and supply high-quality crude oil from various regions, ensuring consistent quality and reliable supply chains. Our crude oil is suitable for various refining processes and industrial applications.'
  },
  { 
    name: 'LNG / LPG', 
    icon: '🔥',
    shortDesc: 'Liquefied natural gas and propane',
    fullDesc: 'LNG and LPG solutions for industrial and commercial applications. These clean-burning fuels offer environmental benefits and cost efficiency for power generation, heating, and industrial processes.'
  },
  { 
    name: 'Jet A1 fuel / Kerosene', 
    icon: '✈️',
    shortDesc: 'Aviation fuel and kerosene products',
    fullDesc: 'Jet A1 fuel meets international aviation standards for commercial and private aircraft. Our kerosene products are also available for heating, lighting, and other industrial applications.'
  },
  { 
    name: 'RFO / HFO', 
    icon: '⚙️',
    shortDesc: 'Residual fuel oil for industrial use',
    fullDesc: 'Residual Fuel Oil (RFO) and Heavy Fuel Oil (HFO) are cost-effective solutions for power generation, marine engines, and industrial boilers. We provide various grades to meet specific operational requirements.'
  },
  { 
    name: 'Bitumen', 
    icon: '🛣️',
    shortDesc: 'Asphalt binder for road construction',
    fullDesc: 'High-quality bitumen for road construction, waterproofing, and industrial applications. Our bitumen products meet international standards and are available in various penetration grades.'
  },
];

const Stats = () => {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const revealRef = useRevealOnScroll();

  const toggleProductDetails = (index: number) => {
    setExpandedProduct(expandedProduct === index ? null : index);
  };

  return (
    <section className="stats" id="products" ref={revealRef}>
      <div className="container">
        <h2 className="stats-heading">Our Products</h2>
        <p className="stats-subtitle">We supply a wide range of petroleum and energy products to meet your business needs.</p>
        
        <div className="products-tabs-container">
          <div className="products-tabs">
            {products.map((product, idx) => (
              <div 
                className={`product-tab ${expandedProduct === idx ? 'expanded' : ''}`} 
                key={idx}
              >
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-short-desc">{product.shortDesc}</p>
                
                {expandedProduct === idx && (
                  <div className="product-full-desc">
                    <p>{product.fullDesc}</p>
                  </div>
                )}
                
                <button 
                  className="learn-more-btn"
                  onClick={() => toggleProductDetails(idx)}
                >
                  {expandedProduct === idx ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 