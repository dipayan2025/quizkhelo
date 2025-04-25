import { Link } from 'react-router-dom';


function Navbar() {


  // Inline styles for the navbar and components
  const navbarStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const leftSectionStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

 

  return (
    <nav style={navbarStyle}>
      <div style={leftSectionStyle}>QuizMaster</div>
      <div style={rightSectionStyle}>
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
