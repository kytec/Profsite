import './Stats.css';
import { useRevealOnScroll } from './useRevealOnScroll';

const products = [
  { name: 'Gasoline (PMS)', icon: '⛽' },
  { name: 'Gas oil (AGO)', icon: '🛢️' },
  { name: 'Crude oil', icon: '🛢️' },
  { name: 'LNG / LPG', icon: '🔥' },
  { name: 'Jet A1 fuel / Kerosene', icon: '✈️' },
  { name: 'RFO / HFO', icon: '⚙️' },
  { name: 'Bitumen', icon: '🛣️' },
];

const Stats = () => (
  <section className="stats" id="products">
    <div className="container">
      <h2 className="stats-heading">Our Products</h2>
      <p className="stats-subtitle">We supply a wide range of petroleum and energy products to meet your business needs.</p>
      <div className="stats-grid">
        {products.map((product, idx) => {
          const revealRef = useRevealOnScroll();
          return (
            <div className="stat reveal-on-scroll" ref={revealRef} key={idx}>
              <div className="stat-icon">{product.icon}</div>
              <div className="stat-number">{product.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Stats; 