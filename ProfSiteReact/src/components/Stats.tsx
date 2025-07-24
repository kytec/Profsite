import './Stats.css';

const Stats = () => (
  <section className="stats">
    <div className="container stats-grid">
      <div className="stat">
        <div className="stat-icon">👨‍💼</div>
        <div className="stat-number">50+</div>
        <div className="stat-label">Advisors</div>
      </div>
      <div className="stat">
        <div className="stat-icon">🌍</div>
        <div className="stat-number">1,000+</div>
        <div className="stat-label">Clients</div>
      </div>
      <div className="stat">
        <div className="stat-icon">⏳</div>
        <div className="stat-number">15</div>
        <div className="stat-label">Years Experience</div>
      </div>
      <div className="stat">
        <div className="stat-icon">💰</div>
        <div className="stat-number">100+</div>
        <div className="stat-label">Investment Products</div>
      </div>
    </div>
  </section>
);

export default Stats; 