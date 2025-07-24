import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <div className="logo">[Company Logo]</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar; 