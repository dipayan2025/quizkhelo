import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: '0',
    zIndex: '10',
    width: '100%',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
  };

  const leftSectionStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const hamburgerStyle = {
    fontSize: '1.8rem',
    cursor: 'pointer',
    display: 'none',
  };

  const rightSectionStyle = {
    display: menuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    width: '100%',
    marginTop: '1rem',
  };

  const rightSectionDesktopStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <nav style={navbarStyle}>
      <div style={leftSectionStyle}>QuizMaster</div>

      {/* Hamburger icon */}
      {isMobile && (
        <div
          style={{ ...hamburgerStyle, display: 'block' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </div>
      )}

      {/* Navigation Links */}
      <div style={isMobile ? rightSectionStyle : rightSectionDesktopStyle}>
        <Link
          to="/"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          Home
        </Link>
        <Link
          to="/quiz"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          Quiz
        </Link>
        <Link
          to="/about"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          About
        </Link>
        <Link
          to="/contact"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
