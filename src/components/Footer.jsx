import React from 'react';

function Footer() {
  // Inline styles for footer and its content
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    width:'100%',
    position: 'fixed',
    left: '0',
    bottom: '0'
  };

  const footerLinksStyle = {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  const copyrightStyle = {
    marginTop: '15px',
    fontSize: '12px',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerLinksStyle}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/dipayan-lodh-855111212/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/dipayan_ig"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          Instagram
        </a>
      </div>
      <div style={copyrightStyle}>
        © {new Date().getFullYear()} QuizMaster. @ Dipayan Lodh  | All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
