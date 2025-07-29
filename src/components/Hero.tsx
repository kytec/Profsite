import './Hero.css';

const Hero = () => (
  <section className="hero" id="hero">
    <div className="hero-bg" />
    <div className="hero-overlay" />
    <div className="hero-content fade-in">
      <img src="/images/logo.jpg" alt="YAC Investments Logo" className="hero-logo" />
      <h1 className="hero-title">Empowering Your Financial Future</h1>
      <p className="hero-subtitle">To be the most reliable and trusted distributor of petroleum products in Africa.</p>
      <a href="#contact" className="hero-cta-btn">Get Started</a>
    </div>
  </section>
);

export default Hero; 