import './Hero.css';
import { useRevealOnScroll } from './useRevealOnScroll';

const Hero = () => {
  const revealRef = useRevealOnScroll();
  return (
    <section className="hero reveal-on-scroll" id="hero" ref={revealRef}>
      <div className="hero-bg-placeholder">{/* Place your background image here */}</div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">WELCOME</h1>
        <h2 className="hero-subtitle">TO YAC Investments </h2>
      </div>
    </section>
  );
};

export default Hero; 